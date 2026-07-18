'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Send, Trophy } from 'lucide-react';
import type { AnswerId } from '../../types/question';
import type { CompetitionQuestion } from '../../lib/competition/daily-questions';
import { startCompetition, submitCompetition } from '../../app/competition/actions';

export function CompetitionExam({ questions, hasPreviousAttempt }: { questions: CompetitionQuestion[]; hasPreviousAttempt: boolean }) {
  const router = useRouter();
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [now, setNow] = useState(Date.now());
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, AnswerId | null>>({});
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [completedAttempt, setCompletedAttempt] = useState(hasPreviousAttempt);

  useEffect(() => {
    if (!startedAt) return;
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, [startedAt]);

  const remaining = startedAt ? Math.max(0, 2400 - Math.floor((now - startedAt) / 1000)) : 2400;
  const time = `${String(Math.floor(remaining / 60)).padStart(2, '0')}:${String(remaining % 60).padStart(2, '0')}`;
  const answered = useMemo(() => Object.values(answers).filter(Boolean).length, [answers]);

  const submit = useCallback(async (skipConfirmation = false) => {
    if (busy) return;
    if (!skipConfirmation && !window.confirm('Submit this attempt? Your latest score and time will replace your current leaderboard result.')) return;
    setBusy(true);
    setError('');
    const result = await submitCompetition(answers);
    if (result.error) {
      setError(result.error);
      setBusy(false);
      return;
    }
    setStartedAt(null);
    setAnswers({});
    setIndex(0);
    setCompletedAttempt(true);
    setBusy(false);
    router.refresh();
  }, [answers, busy, router]);

  useEffect(() => {
    if (startedAt && remaining === 0) void submit(true);
  }, [remaining, startedAt, submit]);

  const begin = async () => {
    setBusy(true);
    setError('');
    const result = await startCompetition();
    if (result.error || !result.startedAt) setError(result.error ?? 'Could not start.');
    else {
      setStartedAt(result.startedAt);
      setNow(Date.now());
    }
    setBusy(false);
  };

  if (!startedAt) {
    return (
      <section className="mt-6 rounded-3xl border border-amber-500/30 bg-[#111214] p-6 text-center shadow-glow">
        <Trophy className="mx-auto h-9 w-9 text-amber-300" />
        <h2 className="mt-3 text-xl font-bold">Red Book Championship</h2>
        <p className="mt-2 text-sm text-slate-400">50 difficult questions · 40 minutes · your latest result sets your rank</p>
        {error && <p className="mt-4 text-sm text-red-300">{error}</p>}
        <button onClick={begin} disabled={busy} className="mt-5 w-full rounded-2xl bg-amber-500 px-5 py-3 font-bold text-slate-950 disabled:opacity-50">{busy ? 'Starting…' : completedAttempt ? 'Retake Test' : 'Start Competition'}</button>
      </section>
    );
  }

  const current = questions[index];
  return (
    <section className="mt-6 space-y-4">
      <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-[#111214] px-4 py-3 text-sm font-semibold">
        <span>{index + 1} of 50 · {answered} answered</span><span className={remaining < 300 ? 'text-red-300' : 'text-amber-300'}>{time}</span>
      </div>
      <div className="rounded-3xl border border-slate-800 bg-[#111214] p-6 shadow-glow">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">{current.category}</p>
        <h2 className="mt-3 text-lg font-bold">{current.question}</h2>
        <div className="mt-5 grid gap-3">
          {current.options.map((option) => <button key={option.id} onClick={() => {
            setAnswers((value) => ({ ...value, [current.id]: option.id }));
            if (index < questions.length - 1) setIndex((value) => value + 1);
          }} className={`rounded-2xl border px-4 py-4 text-left ${answers[current.id] === option.id ? 'border-amber-400 bg-amber-500/15' : 'border-slate-700 bg-slate-900/80'}`}><strong className="mr-3">{option.id}</strong>{option.text}</button>)}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <button onClick={() => setIndex((value) => Math.max(0, value - 1))} disabled={index === 0} className="flex items-center justify-center gap-2 rounded-2xl border border-slate-700 px-4 py-3 font-semibold disabled:opacity-30"><ArrowLeft className="h-4 w-4" /> Previous</button>
        <button onClick={() => setIndex((value) => Math.min(49, value + 1))} disabled={index === 49} className="flex items-center justify-center gap-2 rounded-2xl border border-slate-700 px-4 py-3 font-semibold disabled:opacity-30">Next <ArrowRight className="h-4 w-4" /></button>
      </div>
      {error && <p className="text-center text-sm text-red-300">{error}</p>}
      <button onClick={() => void submit()} disabled={busy} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-500 px-5 py-3 font-bold text-slate-950 disabled:opacity-50"><Send className="h-4 w-4" /> {busy ? 'Submitting…' : 'Submit Competition'}</button>
    </section>
  );
}
