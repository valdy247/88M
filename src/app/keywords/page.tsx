'use client';

import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { allQuestions } from '../../data/questions';

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export default function KeyWordsPage() {
  const [query, setQuery] = useState('');
  const normalizedQuery = normalize(query);

  const matches = useMemo(() => {
    if (!normalizedQuery) return [];

    return allQuestions.filter((question) => {
      const correctAnswer =
        question.options.find((option) => option.id === question.correctAnswer)?.text ?? '';
      const searchableText = [question.question, correctAnswer].join(' ');

      return normalize(searchableText).includes(normalizedQuery);
    });
  }, [normalizedQuery]);

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-6 text-slate-100 sm:px-6">
      <section className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-center gap-3">
          <Link
            href="/"
            aria-label="Return home"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 transition hover:border-slate-500"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div className="relative flex-1">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            />
            <input
              autoFocus
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search the question bank..."
              aria-label="Search the question bank"
              className="h-12 w-full rounded-2xl border border-slate-700 bg-[#111214] pl-12 pr-4 text-base text-white shadow-glow placeholder:text-slate-500 focus:border-amber-400"
            />
          </div>
        </div>

        {normalizedQuery && (
          <div aria-live="polite" className="space-y-4">
            <p className="px-1 text-sm text-slate-400">
              {matches.length} {matches.length === 1 ? 'question' : 'questions'} found
            </p>

            {matches.map((question) => {
              const correctAnswer = question.options.find(
                (option) => option.id === question.correctAnswer
              );

              return (
                <article
                  key={question.id}
                  className="rounded-3xl border border-slate-800 bg-[#111214] p-5 shadow-glow"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                    {question.category}
                  </p>
                  <h2 className="mt-3 text-lg font-semibold leading-relaxed text-white">
                    {question.question}
                  </h2>
                  <div className="mt-4 rounded-2xl border border-olive-700/60 bg-olive-500/10 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-olive-300">
                      Correct answer
                    </p>
                    <p className="mt-2 font-semibold text-white">
                      {correctAnswer?.id}) {correctAnswer?.text}
                    </p>
                  </div>
                </article>
              );
            })}

            {matches.length === 0 && (
              <div className="rounded-3xl border border-slate-800 bg-[#111214] p-6 text-center text-slate-400">
                No matching questions found.
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
