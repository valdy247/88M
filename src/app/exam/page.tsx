'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Circle, Clock3, ListChecks, Send } from 'lucide-react';
import { ExamHeader } from '../../components/exam/ExamHeader';
import { CountdownTimer } from '../../components/exam/CountdownTimer';
import { QuestionCard } from '../../components/exam/QuestionCard';
import { QuestionNavigator } from '../../components/exam/QuestionNavigator';
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = loadExamSession();
    if (stored && stored.status === 'active') {
      setSession(stored);
    } else {
      const nextSession = createExamSession(generateExam(allQuestions));
      saveExamSession(nextSession);
      setSession(nextSession);
    }
    setLoading(false);
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
      const nextIndex = Math.min(24, Math.max(0, current.currentQuestionIndex + delta));
      return { ...current, currentQuestionIndex: nextIndex };
    });
  };

  const unansweredCount = session.questions.filter((question) => !session.answers[question.id]).length;
  const answeredCount = 25 - unansweredCount;

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
      submissionReason: 'manual' as const
    };
    saveExamSession(submittedSession);
    router.push('/results');
  };

  const discardAndRestart = () => {
    clearExamSession();
    const nextSession = createExamSession(generateExam(allQuestions));
    saveExamSession(nextSession);
    setSession(nextSession);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <ExamHeader
          questionNumber={session.currentQuestionIndex + 1}
          totalQuestions={session.questions.length}
          category={currentQuestion.category}
          answeredCount={answeredCount}
          unansweredCount={unansweredCount}
        />
        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <CountdownTimer
              startedAt={session.startedAt}
              endsAt={session.endsAt}
              onExpire={() => {
                const now = Date.now();
                const expired = {
                  ...session,
                  status: 'submitted' as const,
                  submittedAt: now,
                  submissionReason: 'time-expired' as const
                };
                saveExamSession(expired);
                router.push('/results');
              }}
            />
            <QuestionCard
              question={currentQuestion}
              selectedAnswer={session.answers[currentQuestion.id] ?? null}
              onSelect={(answerId) => handleAnswer(currentQuestion.id, answerId)}
            />
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
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
              <div className="flex items-center gap-2 text-amber-300">
                <ListChecks className="h-4 w-4" />
                <span className="text-sm font-semibold">Progress</span>
              </div>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-olive-600 transition-all"
                  style={{ width: `${((answeredCount / 25) * 100).toFixed(0)}%` }}
                />
              </div>
              <p className="mt-3 text-sm text-slate-300">Answered {answeredCount} of 25 questions.</p>
            </div>
            <QuestionNavigator
              questions={session.questions}
              answers={session.answers}
              currentIndex={session.currentQuestionIndex}
              onSelect={moveQuestion}
            />
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
