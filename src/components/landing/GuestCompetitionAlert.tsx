import Image from 'next/image';
import Link from 'next/link';
import { createClient } from '../../lib/supabase/server';

export async function GuestCompetitionAlert() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (user) return null;

  return (
    <aside className="overflow-hidden rounded-3xl border border-amber-500/40 bg-slate-950/95 shadow-2xl">
      <div className="grid grid-cols-[110px_1fr] items-center gap-4 p-4 sm:grid-cols-[160px_1fr] sm:p-5">
        <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-black">
          <Image src="/images/hall-of-fame-card.png" alt="88M Hall of Fame" fill sizes="160px" className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-bold text-white sm:text-lg">Join the Red Book Championship</p>
          <p className="mt-1 text-xs leading-relaxed text-slate-300 sm:text-sm">Create an account to compete and earn your place in the Hall of Fame.</p>
          <Link href="/login" className="mt-3 inline-flex rounded-xl bg-amber-500 px-4 py-2 text-xs font-bold text-slate-950 transition hover:bg-amber-400 sm:text-sm">Log in or create account</Link>
        </div>
      </div>
    </aside>
  );
}
