'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clipboard, Printer, RefreshCcw } from 'lucide-react';
import { loadExamSession, clearExamSession } from '../../lib/storage/exam-storage';
import { calculateResults } from '../../lib/exam/calculate-results';
import { ReviewQuestionCard } from '../../components/results/ReviewQuestionCard';
import { ResultsSummary } from '../../components/results/ResultsSummary';
import { CopyResultsButton } from '../../components/results/CopyResultsButton';
import { PrintResultsButton } from '../../components/results/PrintResultsButton';
import { StartNewTestButton } from '../../components/results/StartNewTestButton';
import { ExamSession } from '../../types/exam';
import { saveExamAttempt } from '../../lib/supabase/save-exam-attempt';

export default function ResultsPage() {
  const [session, setSession] = useState<ExamSession | null>(null);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const loaded = loadExamSession();
    if (loaded?.status === 'submitted') {
      setSession(loaded);
      void saveExamAttempt(loaded);
    }
    setLoading(false);
  }, []);

  const startNewExam = () => {
    clearExamSession();
    window.location.assign('/exam');
  };

  if (loading) {
    return <main className="min-h-screen bg-slate-950" aria-label="Loading results" />;
  }

  if (!session) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-800 bg-[#111214] p-8 text-center shadow-glow">
          <p className="text-slate-300">No completed exam found. Please start a new test.</p>
          <button
            type="button"
            onClick={startNewExam}
            className="mt-6 inline-flex rounded-2xl bg-olive-600 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-olive-500"
          >
            Start New Test
          </button>
        </div>
      </main>
    );
  }

  const results = calculateResults(session);
  const missedOrUnanswered = session.questions.filter((question, index) => {
    const answer = session.answers[question.id];
    return !answer || answer !== question.correctAnswer;
  });

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-8 sm:px-6 lg:px-8 print:bg-white print:text-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="rounded-3xl border border-slate-800 bg-[#111214] p-8 shadow-glow">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Results</p>
              <h1 className="text-3xl font-semibold text-white">Exam complete</h1>
            </div>
            <Link href="/exam" className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800">
              <ArrowLeft className="h-4 w-4" /> Start New Test
            </Link>
          </div>
          <ResultsSummary session={session} results={results} />
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-3">
              <CopyResultsButton session={session} results={results} />
              <PrintResultsButton />
            </div>
            <button
              type="button"
              onClick={() => {
                clearExamSession();
                window.location.href = '/exam';
              }}
              className="inline-flex items-center gap-2 rounded-2xl bg-olive-600 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-olive-500"
            >
              <RefreshCcw className="h-4 w-4" /> New Test
            </button>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-[#111214] p-6 shadow-glow">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">Review Questions</h2>
            </div>
            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              className="rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
            >
              {showAll ? 'Missed Only' : 'All Questions'}
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
