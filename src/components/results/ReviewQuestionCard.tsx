'use client';

import type { ExamQuestion } from '../../types/exam';
import type { AnswerId } from '../../types/question';

interface ReviewQuestionCardProps {
  question: ExamQuestion;
  questionIndex: number;
  selectedAnswer: AnswerId | null;
}

export function ReviewQuestionCard({ question, questionIndex, selectedAnswer }: ReviewQuestionCardProps) {
  const selectedOption = question.shuffledOptions.find((option) => option.id === selectedAnswer);
  const correctOption = question.shuffledOptions.find((option) => option.id === question.correctAnswer);
  const wasCorrect = selectedAnswer !== null && selectedAnswer === question.correctAnswer;

  return (
    <article className="rounded-3xl border border-slate-800 bg-[#111214] p-6 shadow-glow print:shadow-none print:border print:border-slate-300">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-olive-300">Question {questionIndex}</p>
          <h3 className="mt-2 text-lg font-semibold text-white">{question.question}</h3>
          <p className="mt-2 text-sm text-slate-400">{question.category} • {question.difficulty}</p>
        </div>
        <div className={`rounded-2xl px-4 py-2 text-sm font-semibold ${wasCorrect ? 'bg-emerald-600/20 text-emerald-200' : 'bg-red-600/20 text-red-200'}`}>
          {wasCorrect ? 'Correct' : 'Missed'}
        </div>
      </div>
      <div className="mt-4 space-y-3 border-t border-slate-800 pt-4 text-sm text-slate-300">
        <div>
          <p className="font-semibold text-slate-100">Your answer</p>
          <p>{selectedOption ? `${selectedOption.id}. ${selectedOption.text}` : 'No answer selected'}</p>
        </div>
        <div>
          <p className="font-semibold text-slate-100">Correct answer</p>
          <p>{correctOption ? `${correctOption.id}. ${correctOption.text}` : question.correctAnswer}</p>
        </div>
        <div>
          <p className="font-semibold text-slate-100">Explanation</p>
          <p>{question.explanation}</p>
        </div>
      </div>
    </article>
  );
}
