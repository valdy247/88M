'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
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
  const [showAllFocusAreas, setShowAllFocusAreas] = useState(false);
  const focusAreas = [...results.categoryPerformance]
    .filter((category) => results.weakCategories.includes(category.category))
    .sort((a, b) => (a.correct / a.total) - (b.correct / b.total))
  const visibleFocusAreas = showAllFocusAreas ? focusAreas : focusAreas.slice(0, 1);

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
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-[#111214] p-6 text-slate-300 shadow-glow">
        <p className="text-sm uppercase tracking-[0.25em] text-amber-300">Focus areas</p>
        <p className="mt-3 text-xl font-semibold text-white">{results.weakCategories.length} categories to review</p>
        <div className="mt-4 space-y-3 text-sm text-slate-300">
          {visibleFocusAreas.map((category) => (
            <div key={category.category} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3">
              <span>{category.category}</span>
              <span className="font-semibold text-white">{category.correct}/{category.total}</span>
            </div>
          ))}
          {focusAreas.length === 0 && (
            <p className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-emerald-200">No focus areas needed.</p>
          )}
          {focusAreas.length > 1 && (
            <button
              type="button"
              onClick={() => setShowAllFocusAreas((current) => !current)}
              aria-expanded={showAllFocusAreas}
              className="flex w-full items-center justify-between rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-left font-semibold text-slate-200 transition hover:border-slate-500"
            >
              <span>{showAllFocusAreas ? 'Hide other areas' : `Show ${focusAreas.length - 1} more areas`}</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${showAllFocusAreas ? 'rotate-180' : ''}`} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
