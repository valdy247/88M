'use client';

import { Printer } from 'lucide-react';

export function PrintResultsButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
    >
      <Printer className="h-4 w-4" />
      Print / Save as PDF
    </button>
  );
}
