'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Home, RotateCcw, Shuffle } from 'lucide-react';
import { useState } from 'react';
import { StripMapSymbol } from '../../../components/flashcards/StripMapSymbol';
import { stripMapSymbolCards } from '../../../data/strip-map-symbols';

export default function StripMapFlashcardsPage() {
  const [cards, setCards] = useState(stripMapSymbolCards);
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const card = cards[index];

  const move = (direction: number) => {
    setIndex((current) => (current + direction + cards.length) % cards.length);
    setShowAnswer(false);
  };

  const shuffle = () => {
    setCards((current) => {
      const copy = [...current];
      for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    });
    setIndex(0);
    setShowAnswer(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-6 text-slate-100 sm:px-6">
      <section className="mx-auto flex max-w-3xl flex-col gap-5">
        <header className="flex items-center justify-between rounded-3xl border border-slate-800 bg-[#111214] p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">Visual deck</p>
            <h1 className="mt-2 text-2xl font-semibold text-white">Strip Map Symbols</h1>
          </div>
          <Link href="/" aria-label="Return home" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900">
            <Home className="h-5 w-5" />
          </Link>
        </header>

        <div className="flex items-center justify-between text-sm text-slate-400">
          <Link href="/flashcards" className="inline-flex items-center gap-2 hover:text-white"><ArrowLeft className="h-4 w-4" /> All flashcards</Link>
          <span>{index + 1} of {cards.length}</span>
        </div>

        <button
          type="button"
          onClick={() => setShowAnswer((current) => !current)}
          aria-label={showAnswer ? 'Show symbol only' : 'Reveal symbol name'}
          className={`flex min-h-[430px] flex-col items-center justify-center rounded-3xl border p-6 text-center shadow-glow transition ${showAnswer ? 'border-amber-600 bg-amber-500/10' : 'border-slate-700 bg-[#111214] hover:border-slate-500'}`}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
            {showAnswer ? 'Answer' : 'Identify this symbol'}
          </span>
          <div className="my-6 flex min-h-52 items-center justify-center rounded-3xl border border-slate-700/70 bg-slate-950/80 p-4">
            <StripMapSymbol card={card} />
          </div>
          {showAnswer && (
            <>
              <span className="text-2xl font-semibold text-white">{card.name}</span>
              <span className="mt-3 max-w-xl text-base leading-relaxed text-slate-300">{card.description}</span>
            </>
          )}
          <span className="mt-6 inline-flex items-center gap-2 text-sm text-slate-400"><RotateCcw className="h-4 w-4" /> Tap to flip</span>
        </button>

        <div className="grid grid-cols-3 gap-3">
          <button type="button" onClick={() => move(-1)} className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 p-3"><ArrowLeft className="h-5 w-5" /></button>
          <button type="button" onClick={shuffle} className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 p-3"><Shuffle className="h-5 w-5" /></button>
          <button type="button" onClick={() => move(1)} className="inline-flex items-center justify-center rounded-2xl bg-olive-600 p-3 text-slate-950"><ArrowRight className="h-5 w-5" /></button>
        </div>
      </section>
    </main>
  );
}
