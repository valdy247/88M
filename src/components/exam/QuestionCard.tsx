'use client';

import type { ExamQuestion } from '../../types/exam';
import type { AnswerId } from '../../types/question';

interface QuestionCardProps {
  question: ExamQuestion;
  selectedAnswer: AnswerId | null;
  onSelect: (answerId: AnswerId) => void;
}

export function QuestionCard({ question, selectedAnswer, onSelect }: QuestionCardProps) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-[#111214] p-6 shadow-glow">
      <div className="mb-4 text-sm uppercase tracking-[0.3em] text-olive-300">{question.difficulty} • {question.category}</div>
      <p className="text-lg font-semibold text-white">{question.question}</p>
      <div className="mt-6 grid gap-3">
        {question.shuffledOptions.map((option) => {
          const active = selectedAnswer === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelect(option.id)}
              className={`w-full rounded-3xl border px-5 py-4 text-left transition ${
                active
                  ? 'border-amber-400 bg-amber-500/15 text-white'
                  : 'border-slate-700 bg-slate-900/80 text-slate-200 hover:border-slate-500 hover:bg-slate-900'
              } focus:outline-none focus:ring-2 focus:ring-amber-400`}
              aria-pressed={active}
            >
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-base font-semibold text-slate-100">{option.id}</span>
                <span>{option.text}</span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
