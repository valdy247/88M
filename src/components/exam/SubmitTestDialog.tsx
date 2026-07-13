'use client';

import type { TimeRemaining } from '../../types/exam';

interface SubmitTestDialogProps {
  open: boolean;
  answeredCount: number;
  unansweredCount: number;
  timeRemaining: TimeRemaining;
  onCancel: () => void;
  onConfirm: () => void;
  onReview?: () => void;
}

function formatRemaining(endsAt: number): string {
  const ms = Math.max(0, endsAt - Date.now());
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

export function SubmitTestDialog({ open, answeredCount, unansweredCount, timeRemaining, onCancel, onConfirm }: SubmitTestDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4">
      <div className="w-full max-w-xl rounded-3xl border border-slate-700 bg-[#0f1317] p-6 shadow-glow">
        <h2 className="text-xl font-semibold text-white">Submit Test</h2>
        <p className="mt-3 text-slate-300">You are about to submit your exam. Review the current status before continuing.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-sm text-slate-300">
            <p className="text-slate-100">Answered</p>
            <p className="mt-2 text-2xl font-semibold text-white">{answeredCount}</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-sm text-slate-300">
            <p className="text-slate-100">Unanswered</p>
            <p className="mt-2 text-2xl font-semibold text-white">{unansweredCount}</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-sm text-slate-300">
            <p className="text-slate-100">Time remaining</p>
            <p className="mt-2 text-2xl font-semibold text-white">{formatRemaining(timeRemaining.endsAt)}</p>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-2xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
          >
            Continue Test
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Submit Test
          </button>
          {/* Optional review button (shown when handler provided) */}
          {typeof (onReview) === 'function' && (
            <button
              type="button"
              onClick={onReview}
              className="rounded-2xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
            >
              Review Answers
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
