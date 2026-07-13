'use client';

import type { ExamQuestion } from '../../types/exam';

interface QuestionNavigatorProps {
  questions: ExamQuestion[];
  answers: Record<string, string | null>;
  currentIndex: number;
  onSelect: (index: number) => void;
}

export function QuestionNavigator({ questions, answers, currentIndex, onSelect }: QuestionNavigatorProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
      <p className="text-sm uppercase tracking-[0.3em] text-olive-300">Question navigator</p>
      <div className="mt-4 grid grid-cols-5 gap-3 sm:grid-cols-5">
        {questions.map((question, index) => {
          const answered = Boolean(answers[question.id]);
          const active = index === currentIndex;
          return (
            <button
              key={question.id}
              type="button"
              onClick={() => onSelect(index)}
              className={`rounded-2xl border px-3 py-3 text-sm font-semibold transition ${
                active
                  ? 'border-amber-400 bg-amber-500 text-slate-950'
                  : answered
                  ? 'border-olive-700 bg-olive-700/10 text-olive-100 hover:border-olive-500'
                  : 'border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500'
              } focus:outline-none focus:ring-2 focus:ring-amber-400`}
              aria-label={`Question ${index + 1} ${answered ? 'answered' : 'unanswered'}`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
