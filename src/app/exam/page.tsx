'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Home, Menu, Send, X } from 'lucide-react';
import { ExamHeader } from '../../components/exam/ExamHeader';
import { CountdownTimer } from '../../components/exam/CountdownTimer';
import { QuestionCard } from '../../components/exam/QuestionCard';

import { SubmitTestDialog } from '../../components/exam/SubmitTestDialog';
import { loadExamSession, saveExamSession, clearExamSession, createExamSession } from '../../lib/storage/exam-storage';
import { generateExam } from '../../lib/exam/generate-exam';
import { ExamSession } from '../../types/exam';
import type { AnswerId } from '../../types/question';
import { allQuestions } from '../../data/questions';

export default function ExamPage() {
  const router = useRouter();
  const [session, setSession] = useState<ExamSession | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMode, setDialogMode] = useState<'manual' | 'last'>('manual');
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [hiddenQuestionIds, setHiddenQuestionIds] = useState<string[]>([]);
  const [visibilityError, setVisibilityError] = useState('');

  useEffect(() => {
    const load = async () => {
      const requestedQuestionCount = new URLSearchParams(window.location.search).get('mode') === 'big' ? 50 : 25;
      const response = await fetch('/api/questions/visibility', { cache: 'no-store' });
      const visibility = response.ok ? await response.json() as { hiddenQuestionIds: string[]; isAdmin: boolean } : { hiddenQuestionIds: [], isAdmin: false };
      const hidden = new Set(visibility.hiddenQuestionIds);
      const stored = loadExamSession();
      const filteredStored = stored ? { ...stored, questions: stored.questions.filter((question) => !hidden.has(question.id)) } : null;
      setIsAdmin(visibility.isAdmin);
      setHiddenQuestionIds(visibility.hiddenQuestionIds);
      if (filteredStored && filteredStored.status === 'active' && filteredStored.questions.length === requestedQuestionCount) {
        setSession(filteredStored);
      } else {
        const nextSession = createExamSession(generateExam(allQuestions.filter((question) => !hidden.has(question.id)), requestedQuestionCount));
        saveExamSession(nextSession);
        setSession(nextSession);
      }
      setLoading(false);
    };
    void load();
  }, []);

  useEffect(() => {
    if (!session) return;
    saveExamSession(session);
  }, [session]);

  const currentQuestion = useMemo(
    () => session?.questions[session.currentQuestionIndex] ?? null,
    [session]
  );

  if (loading) {
    return <div className="min-h-screen bg-slate-950 text-slate-100">Loading...</div>;
  }

  if (!session || !currentQuestion) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 p-6">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-800 bg-[#111214] p-8 text-center shadow-glow">
          <p>Unable to load the exam session. Please return to the landing page.</p>
          <button
            type="button"
            onClick={() => router.push('/')}
            className="mt-6 rounded-2xl bg-olive-600 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-olive-500"
          >
            Home
          </button>
        </div>
      </div>
    );
  }

  const handleAnswer = (questionId: string, answerId: AnswerId) => {
    if (!session) return;
    const isLast = session.currentQuestionIndex === session.questions.length - 1;
    setSession((current) => {
      if (!current) return current;
      const answers = { ...current.answers, [questionId]: answerId };
      if (isLast) {
        // on last question, save answer but do not advance — show submit dialog
        return { ...current, answers };
      }
      const nextIndex = Math.min(current.questions.length - 1, current.currentQuestionIndex + 1);
      return {
        ...current,
        answers,
        currentQuestionIndex: nextIndex
      };
    });
    if (isLast) {
      setDialogMode('last');
      setShowDialog(true);
    }
  };

  const moveQuestion = (index: number) => {
    setSession((current) => {
      if (!current) return current;
      return { ...current, currentQuestionIndex: index };
    });
  };

  const changeIndex = (delta: number) => {
    setSession((current) => {
      if (!current) return current;
      const nextIndex = Math.min(current.questions.length - 1, Math.max(0, current.currentQuestionIndex + delta));
      return { ...current, currentQuestionIndex: nextIndex };
    });
  };

  const unansweredCount = session.questions.filter((question) => !session.answers[question.id]).length;
  const answeredCount = session.questions.length - unansweredCount;

  const handleSubmit = () => {
    setDialogMode('manual');
    setShowDialog(true);
  };

  const confirmSubmit = () => {
    const now = Date.now();
    const submittedSession: ExamSession = {
      ...session,
      status: 'submitted' as const,
      submittedAt: now,
    };
    saveExamSession(submittedSession);
    // Replace current exam entry with home so browser Back goes to home
    router.replace('/');
    router.push('/results');
  };

  const discardAndRestart = () => {
    clearExamSession();
    const hidden = new Set(hiddenQuestionIds);
    const nextSession = createExamSession(generateExam(allQuestions.filter((question) => !hidden.has(question.id)), session.questions.length));
    saveExamSession(nextSession);
    setSession(nextSession);
  };

  const hideCurrentQuestion = async () => {
    if (!currentQuestion || !session) return;
    if (!window.confirm('Hide this question from every test? It will remain in the system and can be restored from Admin.')) return;
    setVisibilityError('');
    const response = await fetch('/api/questions/visibility', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questionId: currentQuestion.id, hidden: true })
    });
    const result = await response.json();
    if (!response.ok) {
      setVisibilityError(result.error ?? 'Could not hide the question.');
      return;
    }
    setHiddenQuestionIds((current) => [...current, currentQuestion.id]);
    setSession((current) => {
      if (!current) return current;
      const questions = current.questions.filter((question) => question.id !== currentQuestion.id);
      return { ...current, questions, currentQuestionIndex: Math.min(current.currentQuestionIndex, Math.max(0, questions.length - 1)) };
    });
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="relative rounded-3xl border border-slate-800 bg-[#111214] p-5 shadow-glow">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Exam mode</p>
              <h1 className="text-lg font-semibold text-white">Built by PV2 MENA for my battle buddies</h1>
            </div>
            <div className="relative">
              <button
                type="button"
                onClick={() => setMenuOpen((current) => !current)}
                aria-label="Open menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-slate-100 transition hover:border-slate-500"
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
              {menuOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 rounded-3xl border border-slate-800 bg-[#0f1317] p-3 shadow-glow">
                  <Link
                    href="/"
                    className="flex items-center gap-2 rounded-2xl px-3 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-900"
                    onClick={() => setMenuOpen(false)}
                  >
                    <Home className="h-4 w-4" />
                    Home
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <ExamHeader
          totalQuestions={session.questions.length}
          answeredCount={answeredCount}
        />
        <div className="space-y-6">
          <QuestionCard
            question={currentQuestion}
            selectedAnswer={session.answers[currentQuestion.id] ?? null}
            onSelect={(answerId) => handleAnswer(currentQuestion.id, answerId)}
            isAdmin={isAdmin}
            onHide={() => void hideCurrentQuestion()}
          />
          {visibilityError && <p className="rounded-2xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">{visibilityError}</p>}
          <CountdownTimer
            startedAt={session.startedAt}
            endsAt={session.endsAt}
            onExpire={() => {
              const now = Date.now();
              const expired = {
                ...session,
                status: 'submitted' as const,
                submittedAt: now,
              };
              saveExamSession(expired);
              // Ensure Back goes to home after forced submit
              router.replace('/');
              router.push('/results');
            }}
          />
          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => changeIndex(-1)}
                    disabled={session.currentQuestionIndex === 0}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-[#101214] px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ArrowLeft className="h-4 w-4" /> Previous
                  </button>
                  <button
                    type="button"
                    onClick={() => changeIndex(1)}
                    disabled={session.currentQuestionIndex === session.questions.length - 1}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-[#101214] px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Next <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
                >
                  <Send className="h-4 w-4" /> Submit Test
                </button>
              </div>
            </div>
            <aside className="space-y-6 rounded-3xl border border-slate-800 bg-[#111214] p-6 shadow-glow">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 text-sm leading-6 text-slate-300">
                <p className="font-semibold text-white">Session controls</p>
                <p className="mt-3">You can refresh the page and resume this exam without losing progress.</p>
                <button
                  type="button"
                  onClick={discardAndRestart}
                  className="mt-4 w-full rounded-2xl border border-slate-700 bg-[#101214] px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
                >
                  Discard and start new test
                </button>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <SubmitTestDialog
        open={showDialog}
        answeredCount={answeredCount}
        unansweredCount={unansweredCount}
        timeRemaining={{ startedAt: session.startedAt, endsAt: session.endsAt }}
        onCancel={() => setShowDialog(false)}
        onConfirm={confirmSubmit}
        onReview={() => {
          setShowDialog(false);
          router.push('/review');
        }}
        showReview={dialogMode === 'manual'}
      />
    </main>
  );
}
