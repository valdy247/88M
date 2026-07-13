'use client';

import Link from 'next/link';
import type { Category } from '../../types/question';

interface ExamHeaderProps {
  questionNumber: number;
  totalQuestions: number;
  category: Category;
  answeredCount: number;
  unansweredCount: number;
}

export function ExamHeader({ questionNumber, totalQuestions, category, answeredCount, unansweredCount }: ExamHeaderProps) {
  return (
    <header className="rounded-3xl border border-slate-800 bg-[#111214] p-6 shadow-glow">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Exam in progress</p>
          <h1 className="text-2xl font-semibold text-white">Question {questionNumber} of {totalQuestions}</h1>
          <p className="text-sm text-slate-300">Category: {category}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
          >
            Home
          </Link>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-slate-300">
              <p className="text-slate-100">Answered</p>
              <p className="font-semibold">{answeredCount}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-slate-300">
              <p className="text-slate-100">Unanswered</p>
              <p className="font-semibold">{unansweredCount}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
