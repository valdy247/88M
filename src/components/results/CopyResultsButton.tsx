'use client';

import { useState } from 'react';
import { Clipboard } from 'lucide-react';
import type { ExamSession } from '../../types/exam';
import { calculateResults } from '../../lib/exam/calculate-results';

interface CopyResultsButtonProps {
  session: ExamSession;
  results: ReturnType<typeof calculateResults>;
}

export function CopyResultsButton({ session, results }: CopyResultsButtonProps) {
  const [copied, setCopied] = useState(false);

  const copyText = async () => {
    const categories = results.categoryPerformance
      .filter((item) => item.correct < item.total)
      .map((item) => `- ${item.category}`)
      .join('\n');
    const text = `RED BOOK TRAINER RESULTS\n\nScore: ${results.correctCount}/${session.questions.length}\nPercentage: ${results.percentage}%\nTime Used: ${results.timeUsed}\n\nCategories to Review:\n${categories || '- None noted'}\n\nPractice benchmark: ${results.practiceResult}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
    }
  };

  return (
    <button
      type="button"
      onClick={copyText}
      className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
    >
      <Clipboard className="h-4 w-4" />
      {copied ? 'Copied' : 'Copy Results'}
    </button>
  );
}
