'use client';

import { useMemo, useState } from 'react';
import { Search, Star } from 'lucide-react';
import type { Question } from '../../types/question';

export function QuestionManager({ questions, initialHiddenIds }: { questions: Question[]; initialHiddenIds: string[] }) {
  const [hiddenIds, setHiddenIds] = useState(() => new Set(initialHiddenIds));
  const [query, setQuery] = useState('');
  const [busyId, setBusyId] = useState<string | null>(null);
  const [error, setError] = useState('');
  const visibleQuestions = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return normalized
      ? questions.filter((question) => `${question.question} ${question.category} ${question.id}`.toLowerCase().includes(normalized))
      : questions;
  }, [query, questions]);

  const toggle = async (questionId: string) => {
    const hidden = !hiddenIds.has(questionId);
    setBusyId(questionId);
    setError('');
    const response = await fetch('/api/questions/visibility', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questionId, hidden })
    });
    const result = await response.json();
    if (!response.ok) setError(result.error ?? 'Could not update the question.');
    else setHiddenIds((current) => {
      const next = new Set(current);
      hidden ? next.add(questionId) : next.delete(questionId);
      return next;
    });
    setBusyId(null);
  };

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-800 bg-[#111214]">
      <div className="border-b border-slate-800 p-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold">Question bank</h2>
            <p className="mt-1 text-sm text-slate-400">{questions.length} questions · {hiddenIds.size} hidden from tests</p>
          </div>
          <label className="flex w-full items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-3 sm:w-80">
            <Search className="h-4 w-4 text-slate-400" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search questions…" className="w-full bg-transparent py-3 text-sm outline-none" />
          </label>
        </div>
        {error && <p className="mt-3 text-sm text-red-300">{error}</p>}
      </div>
      <div className="max-h-[70vh] divide-y divide-slate-800 overflow-y-auto">
        {visibleQuestions.map((question) => {
          const hidden = hiddenIds.has(question.id);
          return (
            <article key={question.id} className={`flex gap-3 p-4 ${hidden ? 'bg-amber-500/5' : ''}`}>
              <button type="button" onClick={() => void toggle(question.id)} disabled={busyId === question.id} aria-label={hidden ? 'Restore question to tests' : 'Hide question from all tests'} title={hidden ? 'Restore to tests' : 'Hide from all tests'} className={`mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition disabled:opacity-50 ${hidden ? 'border-amber-400 bg-amber-500/20 text-amber-300' : 'border-slate-700 text-slate-400 hover:border-amber-400 hover:text-amber-300'}`}>
                <Star className={`h-5 w-5 ${hidden ? 'fill-current' : ''}`} />
              </button>
              <div className="min-w-0">
                <p className="font-medium text-white">{question.question}</p>
                <p className="mt-1 text-xs text-slate-400">{question.category} · {question.difficulty} · {question.id}{hidden ? ' · Hidden' : ''}</p>
              </div>
            </article>
          );
        })}
        {!visibleQuestions.length && <p className="p-6 text-center text-sm text-slate-400">No matching questions.</p>}
      </div>
    </section>
  );
}
