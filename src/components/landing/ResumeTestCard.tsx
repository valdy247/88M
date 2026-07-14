'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, RefreshCcw } from 'lucide-react';
import { loadExamSession, clearExamSession } from '../../lib/storage/exam-storage';
import type { ExamSession } from '../../types/exam';

export function ResumeTestCard() {
  const [session, setSession] = useState<ExamSession | null>(null);

  useEffect(() => {
    const loaded = loadExamSession();
    if (loaded?.status === 'active') {
      setSession(loaded);
    }
  }, []);

  if (!session) return null;

  const examHref = session.questions.length === 100 ? '/exam?mode=big' : '/exam';

  const timeRemainingMs = Math.max(0, session.endsAt - Date.now());
  const minutes = Math.floor(timeRemainingMs / 60000);
  const seconds = Math.floor((timeRemainingMs % 60000) / 1000)
    .toString()
    .padStart(2, '0');

  return (
    <div className="rounded-3xl border border-olive-700 bg-olive-700/10 p-6 text-slate-100 shadow-glow">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-olive-200">Resume saved exam</p>
          <p className="mt-1 text-lg font-semibold">Unfinished session found</p>
          <p className="mt-2 text-sm text-slate-300">Time remaining: {minutes}:{seconds}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href={examHref} className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">
            Resume Test <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() => {
              clearExamSession();
              window.location.reload();
            }}
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
          >
            <RefreshCcw className="h-4 w-4" /> Discard
          </button>
        </div>
      </div>
    </div>
  );
}
