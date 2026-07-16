'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Home, Map as MapIcon, RotateCcw, Shuffle } from 'lucide-react';
import { flashcards, flashcardCategories } from '../../data/flashcards';

export default function FlashcardsPage() {
  const [category, setCategory] = useState('All topics');
  const [order, setOrder] = useState(() => flashcards.map((card) => card.id));
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const cards = useMemo(() => {
    const byId = new Map(flashcards.map((card) => [card.id, card]));
    return order
      .map((id) => byId.get(id))
      .filter((card): card is (typeof flashcards)[number] => Boolean(card))
      .filter((card) => category === 'All topics' || card.category === category);
  }, [category, order]);

  const currentCard = cards[index] ?? cards[0];

  const selectCategory = (nextCategory: string) => {
    setCategory(nextCategory);
    setIndex(0);
    setShowAnswer(false);
  };

  const move = (direction: number) => {
    if (!cards.length) return;
    setIndex((current) => (current + direction + cards.length) % cards.length);
    setShowAnswer(false);
  };

  const shuffleCards = () => {
    setOrder((current) => {
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
    <main className="min-h-screen bg-slate-950 px-4 py-6 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <header className="rounded-3xl border border-slate-800 bg-[#111214] p-6 shadow-glow">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Study deck</p>
              <h1 className="mt-2 text-3xl font-semibold text-white">88M Flashcards</h1>
              <p className="mt-2 text-sm text-slate-300">Tap the card to reveal the answer.</p>
            </div>
            <Link href="/" aria-label="Return home" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 hover:border-slate-500">
              <Home className="h-5 w-5" />
            </Link>
          </div>
        </header>

        <Link
          href="/flashcards/strip-map"
          className="flex items-center justify-between rounded-3xl border border-amber-700/60 bg-amber-500/10 p-5 transition hover:border-amber-400"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">New visual deck</p>
            <h2 className="mt-1 text-xl font-semibold text-white">Strip Map Symbols</h2>
            <p className="mt-1 text-sm text-slate-300">Study 19 symbols by looking at the drawing first.</p>
          </div>
          <MapIcon className="h-7 w-7 shrink-0 text-amber-300" />
        </Link>

        <div className="flex gap-2 overflow-x-auto pb-2" aria-label="Flashcard topics">
          {['All topics', ...flashcardCategories].map((topic) => (
            <button
              key={topic}
              type="button"
              onClick={() => selectCategory(topic)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${category === topic ? 'bg-amber-500 text-slate-950' : 'border border-slate-700 bg-slate-900 text-slate-200 hover:border-slate-500'}`}
            >
              {topic}
            </button>
          ))}
        </div>

        {currentCard && (
          <>
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>{currentCard.category}</span>
              <span>{index + 1} of {cards.length}</span>
            </div>
            <button
              type="button"
              onClick={() => setShowAnswer((current) => !current)}
              aria-label={showAnswer ? 'Show question' : 'Show answer'}
              className={`flex min-h-[340px] w-full flex-col items-center justify-center rounded-3xl border p-8 text-center shadow-glow transition sm:min-h-[400px] ${showAnswer ? 'border-amber-600 bg-amber-500/10' : 'border-slate-700 bg-[#111214] hover:border-slate-500'}`}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">{showAnswer ? 'Answer' : 'Question'}</span>
              <span className="mt-6 text-2xl font-semibold leading-relaxed text-white sm:text-3xl">{showAnswer ? currentCard.answer : currentCard.question}</span>
              <span className="mt-8 inline-flex items-center gap-2 text-sm text-slate-400"><RotateCcw className="h-4 w-4" /> Tap to flip</span>
            </button>
          </>
        )}

        <div className="grid grid-cols-3 gap-3">
          <button type="button" onClick={() => move(-1)} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 font-semibold hover:border-slate-500">
            <ArrowLeft className="h-4 w-4" /> <span className="hidden sm:inline">Previous</span>
          </button>
          <button type="button" onClick={shuffleCards} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 font-semibold hover:border-slate-500">
            <Shuffle className="h-4 w-4" /> <span className="hidden sm:inline">Shuffle</span>
          </button>
          <button type="button" onClick={() => move(1)} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-olive-600 px-4 py-3 font-semibold text-slate-950 hover:bg-olive-500">
            <span className="hidden sm:inline">Next</span> <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <p className="text-center text-xs leading-5 text-slate-500">Unofficial study material. Verify procedures and measurements with current authorized course references and instructor guidance.</p>
      </div>
    </main>
  );
}
