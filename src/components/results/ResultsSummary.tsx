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
  const lowPerformance = [...results.categoryPerformance]
    .sort((a, b) => (a.correct / a.total) - (b.correct / b.total))
    .slice(0, 3);

  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 text-slate-300 shadow-glow">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-[#111214] p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-olive-300">Score</p>
            <p className="mt-3 text-4xl font-semibold text-white">{results.correctCount}/{session.questions.length}</p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-[#111214] p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-olive-300">Accuracy</p>
            <p className="mt-3 text-4xl font-semibold text-white">{results.percentage}%</p>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-[#111214] p-4 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Correct</p>
            <p className="mt-2 text-2xl font-semibold text-white">{results.correctCount}</p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-[#111214] p-4 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Missed</p>
            <p className="mt-2 text-2xl font-semibold text-white">{results.incorrectCount + results.unansweredCount}</p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-[#111214] p-4 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Time</p>
            <p className="mt-2 text-2xl font-semibold text-white">{results.timeUsed}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] ${results.passed ? 'bg-emerald-500/10 text-emerald-200' : 'bg-amber-500/10 text-amber-200'}`}>
            {results.passed ? 'Passed' : 'Needs review'}
          </span>
          <span className="rounded-full bg-slate-800 px-3 py-2 text-xs uppercase tracking-[0.18em] text-slate-300">
            {results.practiceResult}
          </span>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-[#111214] p-6 text-slate-300 shadow-glow">
        <p className="text-sm uppercase tracking-[0.25em] text-amber-300">Focus areas</p>
        <p className="mt-3 text-xl font-semibold text-white">{results.weakCategories.length} categories to review</p>
        <div className="mt-4 space-y-3 text-sm text-slate-300">
          {lowPerformance.map((category) => (
            <div key={category.category} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3">
              <span>{category.category}</span>
              <span className="font-semibold text-white">{category.correct}/{category.total}</span>
            </div>
          ))}
          {results.weakCategories.length > lowPerformance.length && (
            <p className="text-slate-400">+{results.weakCategories.length - lowPerformance.length} more categories</p>
          )}
        </div>
      </div>
    </div>
  );
}
