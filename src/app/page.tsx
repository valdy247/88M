import Link from 'next/link';
import { ShieldAlert, Timer, BookOpen, MapPin } from 'lucide-react';
import { ResumeTestCard } from '../components/landing/ResumeTestCard';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-8 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-5xl space-y-10">
        <div className="rounded-3xl border border-slate-800 bg-[#111214] p-8 shadow-glow">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-olive-700 bg-olive-700/10 px-4 py-2 text-sm text-olive-100">
                <ShieldAlert className="h-4 w-4" />
                Unofficial independent study tool
              </div>
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.25em] text-amber-300">Red Book Trainer</p>
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  88M Practice Test Simulator
                </h1>
                <p className="max-w-2xl text-slate-300 sm:text-lg">
                  Prepare with a mobile-first mock exam that uses 25 randomized questions, a 40-minute timer, and a review summary after submission.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5">
                  <div className="flex items-center gap-3 text-amber-300"><Timer className="h-5 w-5" /> <span>40-minute timer</span></div>
                  <p className="mt-3 text-sm text-slate-300">Progress through one question at a time and finish before time expires.</p>
                </div>
                <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5">
                  <div className="flex items-center gap-3 text-olive-300"><BookOpen className="h-5 w-5" /> <span>25 randomized questions</span></div>
                  <p className="mt-3 text-sm text-slate-300">Balanced category selection with no repeated questions and shuffled answer options.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-slate-200 shadow-glow">
              <div className="flex items-center gap-3 text-olive-100">
                <MapPin className="h-5 w-5" />
                <span className="text-sm uppercase tracking-[0.25em]">Practice format</span>
              </div>
              <ul className="space-y-4 text-sm leading-6 text-slate-300">
                <li>One correct answer per question</li>
                <li>Backward and forward navigation</li>
                <li>Save progress in browser storage</li>
                <li>Review missed and unanswered questions</li>
              </ul>
              <Link
                href="/exam"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-olive-600 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-olive-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                Start Test
              </Link>
            </div>
          </div>
        </div>
        <ResumeTestCard />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-800 bg-[#111214] p-8 shadow-glow">
            <h2 className="text-2xl font-semibold text-white">What to expect</h2>
            <div className="mt-6 space-y-4 text-slate-300">
              <p>Red Book Trainer is an unofficial study platform focused on core 88M knowledge. Use it to build confidence, track progress, and review missed material.</p>
              <ul className="grid gap-3 text-sm sm:grid-cols-2">
                <li className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">25 questions per exam</li>
                <li className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">One answer per question</li>
                <li className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">Review answers after submission</li>
                <li className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">Print or copy results</li>
                <li className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">Export missed questions as a study PDF</li>
              </ul>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-[#111214] p-8 shadow-glow">
            <h2 className="text-xl font-semibold text-white">Disclaimer</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">Unofficial independent study tool. Not affiliated with, sponsored by, or endorsed by the U.S. Army or the Department of Defense. Always verify information using your current authorized training materials and instructor guidance.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
