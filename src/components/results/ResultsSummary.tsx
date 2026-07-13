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
    passed: boolean;
    weakCategories: string[];
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
        <div className={`rounded-3xl border p-4 ${results.passed ? 'border-emerald-500 bg-emerald-500/10 text-emerald-200' : 'border-amber-500 bg-amber-500/10 text-amber-200'}`}>
          <p className="text-sm uppercase tracking-[0.25em]">{results.passed ? 'Passed' : 'Needs review'}</p>
          <p className="mt-2 text-2xl font-semibold">{results.percentage}%</p>
        </div>
        <p className="mt-4 text-sm text-slate-300">{results.passed ? 'Great job — keep reviewing to stay sharp.' : 'Focus on the missed questions below and export them to study.'}</p>
        <dl className="mt-4 space-y-4 text-sm">
          <div>
            <dt className="text-slate-400">Time used</dt>
            <dd className="mt-1 text-white">{results.timeUsed}</dd>
          </div>
          <div>
            <dt className="text-slate-400">Practice benchmark</dt>
            <dd className="mt-1 text-white">{results.practiceResult} ({results.percentage >= 80 ? '80% threshold met' : '80% threshold not met'})</dd>
          </div>
        </dl>
        {results.weakCategories.length > 0 && (
          <div className="mt-4 rounded-3xl border border-amber-500 bg-amber-500/5 p-4 text-sm text-amber-100">
            <p className="font-semibold">Review these categories:</p>
            <p className="mt-2">{results.weakCategories.join(', ')}</p>
          </div>
        )}
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
