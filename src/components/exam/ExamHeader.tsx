'use client';

interface ExamHeaderProps {
  totalQuestions: number;
  answeredCount: number;
}

export function ExamHeader({ totalQuestions, answeredCount }: ExamHeaderProps) {
  return (
    <header className="rounded-3xl border border-slate-800 bg-[#111214] p-6 shadow-glow">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Progress</p>
            <p className="text-lg font-semibold text-white">Answered {answeredCount} of {totalQuestions} questions.</p>
          </div>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-olive-600 transition-all"
            style={{ width: `${((answeredCount / totalQuestions) * 100).toFixed(0)}%` }}
          />
        </div>
      </div>
    </header>
  );
}
