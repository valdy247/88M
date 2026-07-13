'use client';

import type { ExamSession } from '../../types/exam';
import type { CategoryResult } from '../../types/exam';

interface ResultsSummaryProps {
  session: ExamSession;
  results: {
    correctCount: number;
    incorrectCount: number;
    unansweredCount: number;
    percentage: number;
    timeUsed: string;
    categoryPerformance: CategoryResult[];
    practiceResult: string;
  };
}

export function ResultsSummary({ session, results }: ResultsSummaryProps) {
  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 text-slate-300 shadow-glow">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-[#111214] p-4">
            <p className="text-sm uppercase tracking-[0.25em] text-olive-300">Score</p>
            <p className="mt-2 text-3xl font-semibold text-white">{results.correctCount} / {session.questions.length}</p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-[#111214] p-4">
            <p className="text-sm uppercase tracking-[0.25em] text-olive-300">Percentage</p>
            <p className="mt-2 text-3xl font-semibold text-white">{results.percentage}%</p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-[#111214] p-4">
            <p className="text-sm uppercase tracking-[0.25em] text-olive-300">Correct</p>
            <p className="mt-2 text-xl font-semibold text-white">{results.correctCount}</p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-[#111214] p-4">
            <p className="text-sm uppercase tracking-[0.25em] text-olive-300">Incorrect</p>
            <p className="mt-2 text-xl font-semibold text-white">{results.incorrectCount}</p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-[#111214] p-4">
            <p className="text-sm uppercase tracking-[0.25em] text-olive-300">Unanswered</p>
            <p className="mt-2 text-xl font-semibold text-white">{results.unansweredCount}</p>
          </div>
        </div>
      </div>
      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 text-slate-300 shadow-glow">
        <p className="text-sm uppercase tracking-[0.25em] text-olive-300">Summary</p>
        <dl className="mt-4 space-y-4 text-sm">
          <div>
            <dt className="text-slate-400">Time used</dt>
            <dd className="mt-1 text-white">{results.timeUsed}</dd>
          </div>
          <div>
            <dt className="text-slate-400">Submission reason</dt>
            <dd className="mt-1 text-white">{session.submissionReason ?? 'Unknown'}</dd>
          </div>
          <div>
            <dt className="text-slate-400">Practice benchmark</dt>
            <dd className="mt-1 text-white">{results.practiceResult} ({results.percentage >= 80 ? '80% threshold met' : '80% threshold not met'})</dd>
          </div>
        </dl>
        <div className="mt-6 rounded-3xl border border-slate-800 bg-[#111214] p-4">
          <p className="text-sm uppercase tracking-[0.25em] text-olive-300">Category performance</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {results.categoryPerformance.map((category) => (
              <li key={category.category} className="flex justify-between gap-3 border-b border-slate-800 pb-3 last:border-none">
                <span>{category.category}</span>
                <span>{category.correct}/{category.total}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
