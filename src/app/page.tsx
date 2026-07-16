import Link from 'next/link';
import Image from 'next/image';
import { Timer, BookOpen, ListChecks, Layers3, Search } from 'lucide-react';
import { ResumeTestCard } from '../components/landing/ResumeTestCard';
import { flashcards } from '../data/flashcards';

export default function HomePage() {
  return (
    <main
      className="relative min-h-screen bg-slate-950 bg-cover bg-top bg-no-repeat px-4 py-8 text-slate-100 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('/images/blackjacks-home-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-slate-950/65" aria-hidden="true" />
      <section className="relative mx-auto max-w-4xl space-y-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-amber-700/40 bg-black shadow-glow sm:aspect-[16/9]">
          <Image
            src="/images/blackjacks-home-hero.jpg"
            alt="39T Blackjacks M1120 HEMTT Load Handling System"
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover object-center"
          />
        </div>
        <div className="rounded-3xl border border-slate-800 bg-[#111214] p-8 shadow-glow">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">88M Practice Tests</h2>
              <p className="text-slate-300">25 randomized questions · 40-minute timer · review and study materials</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                <div className="flex items-center gap-2 text-amber-300"><Timer className="h-4 w-4" /> <span className="text-sm font-semibold">40-min timer</span></div>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                <div className="flex items-center gap-2 text-olive-300"><BookOpen className="h-4 w-4" /> <span className="text-sm font-semibold">25 questions</span></div>
              </div>
            </div>
            <Link
              href="/exam"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-olive-600 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-olive-500"
            >
              Start Test
            </Link>
          </div>
        </div>
        <div className="rounded-3xl border border-olive-700/60 bg-olive-500/5 p-8 shadow-glow">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-olive-300">
              <Layers3 className="h-5 w-5" />
              <h2 className="text-2xl font-semibold text-white">88M Flashcards</h2>
            </div>
            <p className="text-slate-300">Study convoy operations, PMCS, forms, radio procedures, and more with {flashcards.length} interactive cards.</p>
            <Link
              href="/flashcards"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-olive-600 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-olive-500"
            >
              Study Flashcards
            </Link>
          </div>
        </div>
        <div className="rounded-3xl border border-amber-700/60 bg-amber-500/5 p-8 shadow-glow">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-amber-300">
              <ListChecks className="h-5 w-5" />
              <h2 className="text-2xl font-semibold text-white">BIG ASS TEST</h2>
            </div>
            <p className="text-slate-300">50 randomized questions in a separate full-length test.</p>
            <Link
              href="/exam?mode=big"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              Start BIG ASS TEST
            </Link>
          </div>
        </div>
        <ResumeTestCard />
        <div className="rounded-3xl border border-slate-800 bg-[#111214] p-6 shadow-glow text-sm text-slate-300">
          <p className="font-semibold text-white">Disclaimer</p>
          <p className="mt-2">Unofficial independent study tool. Not affiliated with, endorsed by, or approved by the U.S. Army or Department of Defense. Always verify using current authorized training materials.</p>
        </div>
        <Link
          href="/keywords"
          className="flex w-full items-center justify-between rounded-3xl border border-slate-800 bg-[#111214] p-6 text-white shadow-glow transition hover:border-amber-500/70 hover:bg-slate-900"
        >
          <span className="text-lg font-semibold">Key Words</span>
          <Search className="h-5 w-5 text-amber-300" />
        </Link>
      </section>
    </main>
  );
}
