'use client';

import Link from 'next/link';

export function StartNewTestButton() {
  return (
    <Link
      href="/exam"
      className="inline-flex items-center justify-center rounded-2xl bg-olive-600 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-olive-500"
    >
      Start New Test
    </Link>
  );
}
