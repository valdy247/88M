import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { ResumeTestCard } from '../components/landing/ResumeTestCard';
import { HomeAuthLink } from '../components/auth/HomeAuthLink';

export default function HomePage() {
  return (
    <main
      className="relative min-h-screen bg-slate-950 bg-cover bg-top bg-no-repeat px-4 py-8 text-slate-100 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('/images/blackjacks-home-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-slate-950/65" aria-hidden="true" />
      <section className="relative mx-auto max-w-4xl space-y-8">
        <div className="flex w-full">
          <HomeAuthLink />
        </div>
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
        <Link
          href="/competition"
          aria-label="Open the daily 88M Hall of Fame competition"
          className="group mx-auto block w-full max-w-md rounded-[2rem] focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400/80"
        >
          <Image
            src="/images/hall-of-fame-card.jpg"
            alt="88M Hall of Fame daily competition"
            width={1536}
            height={1024}
            sizes="(max-width: 480px) 92vw, 448px"
            className="h-auto w-full rounded-[2rem] drop-shadow-2xl transition duration-200 group-hover:scale-[1.02] group-active:scale-[0.98]"
          />
        </Link>
        <Link
          href="/exam"
          aria-label="Start the 25-question Red Book practice test"
          className="group mx-auto block w-full max-w-md rounded-[2rem] focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400/80"
        >
          <Image
            src="/images/practice-test-card.png"
            alt="Red Book Practice Test — 25 questions, 40 minutes"
            width={924}
            height={1296}
            sizes="(max-width: 480px) 92vw, 448px"
            className="h-auto w-full drop-shadow-2xl transition duration-200 group-hover:scale-[1.02] group-active:scale-[0.98]"
          />
        </Link>
        <Link
          href="/flashcards"
          aria-label="Open the Red Book flashcards"
          className="group mx-auto block w-full max-w-md rounded-[2rem] focus:outline-none focus-visible:ring-4 focus-visible:ring-red-500/80"
        >
          <Image
            src="/images/flashcards-card.png"
            alt="Red Book Flash Cards — study anytime, win every mission"
            width={1046}
            height={1408}
            sizes="(max-width: 480px) 92vw, 448px"
            className="h-auto w-full drop-shadow-2xl transition duration-200 group-hover:scale-[1.02] group-active:scale-[0.98]"
          />
        </Link>
        <Link
          href="/exam?mode=big"
          aria-label="Start the 50-question Big Ass Test"
          className="group mx-auto block w-full max-w-md rounded-[2rem] focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-500/80"
        >
          <Image
            src="/images/big-test-card.png"
            alt="Big Ass Test — 50 randomized questions, full-length test"
            width={1054}
            height={1492}
            sizes="(max-width: 480px) 92vw, 448px"
            className="h-auto w-full drop-shadow-2xl transition duration-200 group-hover:scale-[1.02] group-active:scale-[0.98]"
          />
        </Link>
        <ResumeTestCard />
        <div className="rounded-3xl border border-slate-800 bg-[#111214] p-6 text-sm text-slate-300 shadow-glow">
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
