"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { loadExamSession, saveExamSession, clearExamSession } from '../../lib/storage/exam-storage';
import { ReviewQuestionCard } from '../../components/results/ReviewQuestionCard';
import { ExamSession } from '../../types/exam';
import { calculateResults } from '../../lib/exam/calculate-results';

export default function ReviewPage() {
  const router = useRouter();
  const [session, setSession] = useState<ExamSession | null>(null);
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    const loaded = loadExamSession();
    if (loaded) setSession(loaded);
  }, []);

  if (!session) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-800 bg-[#111214] p-8 text-center shadow-glow">
          <p className="text-slate-300">No active exam found. Please start a new test.</p>
          <Link href="/exam" className="mt-6 inline-flex rounded-2xl bg-olive-600 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-olive-500">
            Resume exam
          </Link>
        </div>
      </main>
    );
  }

  const missedOrUnanswered = session.questions.filter((question) => {
    const answer = session.answers[question.id];
    return !answer || answer !== question.correctAnswer;
  });

  const submitFromReview = () => {
    const now = Date.now();
    const submittedSession: ExamSession = { ...session, status: 'submitted' as const, submittedAt: now, submissionReason: 'manual' as const };
    saveExamSession(submittedSession);
    // Replace review/exam history entry with home so Back navigates to home
    router.replace('/');
    router.push('/results');
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="rounded-3xl border border-slate-800 bg-[#111214] p-8 shadow-glow">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Review</p>
              <h1 className="text-3xl font-semibold text-white">Review current answers</h1>
            </div>
            <div className="flex gap-3">
              <Link href="/exam" className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800">
                <ArrowLeft className="h-4 w-4" /> Back to test
              </Link>
              <button
                type="button"
                onClick={submitFromReview}
                className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                Submit Test
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-[#111214] p-6 shadow-glow">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">Review Questions</h2>
              <p className="mt-2 text-sm text-slate-300">Toggle between missed only and all questions.</p>
            </div>
            <button
              type="button"
              onClick={() => setShowAll((c) => !c)}
              className="rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
            >
              {showAll ? 'Show Missed Only' : 'Review All Questions'}
            </button>
          </div>
          <div className="mt-6 space-y-6">
            {(showAll ? session.questions : missedOrUnanswered).map((question, index) => (
              <ReviewQuestionCard
                key={question.id}
                question={question}
                questionIndex={index + 1}
                selectedAnswer={session.answers[question.id] ?? null}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
