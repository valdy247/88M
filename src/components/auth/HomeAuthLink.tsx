import Link from 'next/link';
import { BookOpen, GalleryHorizontal, LogIn, Menu, Music2, Shield, Trophy, UserRound } from 'lucide-react';
import { createClient } from '../../lib/supabase/server';
import { competitionStatus } from '../../lib/competition/status';

export async function HomeAuthLink() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return (
      <Link href="/login" className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg transition hover:bg-amber-400">
        <LogIn className="h-4 w-4" /> Log in
      </Link>
    );
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('first_name, role')
    .eq('id', user.id)
    .single();
  const { data: leaderboardData } = await supabase.rpc('get_daily_competition_leaderboard');
  const ownRank = (leaderboardData as { user_id: string; leaderboard_rank: number }[] | null)?.find((row) => row.user_id === user.id)?.leaderboard_rank;

  const menuItem = 'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-slate-100 transition hover:bg-slate-800';

  return (
    <div className="flex w-full items-center justify-between gap-3">
      <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-950/90 px-4 py-2.5 text-sm font-semibold text-white">
        <UserRound className="h-4 w-4 text-amber-300" /> {profile?.first_name || 'Account'}
      </div>

      <Link href="/competition" className="max-w-[9.5rem] rounded-2xl bg-slate-950/90 px-2 py-2 text-center text-[10px] font-semibold leading-tight text-amber-300 sm:max-w-none sm:px-3 sm:text-xs">
        {competitionStatus(ownRank)}
      </Link>

      <details className="group relative z-30">
        <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-2xl border border-amber-500/50 bg-slate-950/95 text-amber-300 shadow-lg marker:content-none" aria-label="Open account menu">
          <Menu className="h-5 w-5" />
        </summary>
        <nav className="absolute right-0 mt-2 w-64 rounded-2xl border border-slate-700 bg-slate-950/95 p-2 shadow-2xl backdrop-blur" aria-label="Account menu">
          <Link href="/account#profile" className={menuItem}><UserRound className="h-4 w-4 text-amber-300" /> Profile</Link>
          <Link href="/account#test-results" className={menuItem}><BookOpen className="h-4 w-4 text-amber-300" /> Test Results</Link>
          <Link href="/competition" className={menuItem}><Trophy className="h-4 w-4 text-amber-300" /> Red Book Championship</Link>
          {profile?.role === 'admin' && <Link href="/admin" className={menuItem}><Shield className="h-4 w-4 text-amber-300" /> Admin</Link>}
          <div className="my-1 border-t border-slate-800" />
          <Link href="/cadences" className={menuItem}><Music2 className="h-4 w-4 text-amber-300" /> Cadences</Link>
          <div className={`${menuItem} justify-between text-slate-400`}><span className="flex items-center gap-3"><BookOpen className="h-4 w-4" /> Important for You</span><small>Coming soon</small></div>
          <Link href="/gallery" className={menuItem}><GalleryHorizontal className="h-4 w-4 text-amber-300" /> Vehicle Gallery</Link>
          <div className="my-1 border-t border-slate-800" />
          <form action="/auth/logout" method="post">
            <button className="w-full rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-red-300 transition hover:bg-red-500/10">Log out</button>
          </form>
        </nav>
      </details>
    </div>
  );
}
