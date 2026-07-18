import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createClient } from '../../lib/supabase/server';
import { competitionDate, getPublicCompetitionQuestions } from '../../lib/competition/daily-questions';
import { competitionStatus, formatCompetitionTime } from '../../lib/competition/status';
import { CompetitionExam } from '../../components/competition/CompetitionExam';

type LeaderboardRow = { leaderboard_rank: number; user_id: string; soldier: string; score: number; duration_seconds: number };

export const dynamic = 'force-dynamic';

export default async function CompetitionPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login?message=Log+in+to+compete.');

  const date = competitionDate();
  const [{ data: leaderboardData }, { data: attempt }] = await Promise.all([
    supabase.rpc('get_daily_competition_leaderboard'),
    supabase.from('competition_attempts').select('score, correct_answers, duration_seconds').eq('user_id', user.id).eq('competition_date', date).maybeSingle()
  ]);
  const leaderboard = (leaderboardData ?? []) as LeaderboardRow[];
  const leaderboardUserIds = leaderboard.map((row) => row.user_id);
  const { data: leaderboardProfiles } = leaderboardUserIds.length
    ? await supabase.from('profiles').select('id, last_name').in('id', leaderboardUserIds)
    : { data: [] };
  const lastNameByUser = new Map(
    leaderboardProfiles?.map((profile) => [profile.id, profile.last_name?.trim().split(/\s+/)[0]])
  );
  leaderboard.forEach((row) => {
    row.soldier = lastNameByUser.get(row.user_id) || row.soldier;
  });
  const ownRank = leaderboard.find((row) => row.user_id === user.id)?.leaderboard_rank ?? null;

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="font-semibold text-amber-300">← Home</Link>
        <div className="relative mt-6 aspect-[3/2] overflow-hidden rounded-3xl">
          <Image src="/images/hall-of-fame-card.png" alt="88M Hall of Fame" fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-contain" />
        </div>

        <section className="mt-6 rounded-3xl border border-slate-800 bg-[#111214] p-6 shadow-glow">
          <p className="text-center text-sm uppercase tracking-[0.25em] text-amber-300">Your Status</p>
          <h1 className="mt-2 text-center text-2xl font-bold">{competitionStatus(ownRank)}</h1>
          {attempt && <p className="mt-2 text-center text-sm text-slate-400">{attempt.correct_answers}/50 · {attempt.score}% · {formatCompetitionTime(attempt.duration_seconds)}</p>}
        </section>

        <section className="mt-6">
          <h2 className="text-center text-2xl font-bold">🏆 88M Hall of Fame</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-amber-400/40 bg-amber-500/10 p-4 text-center"><strong>🥇 Convoy Commander</strong><p className="mt-1 text-xs text-slate-400">#1 in the world</p></div>
            <div className="rounded-2xl border border-slate-500/40 bg-slate-500/10 p-4 text-center"><strong>🥈 Elite Driver</strong><p className="mt-1 text-xs text-slate-400">Top 2–10</p></div>
            <div className="rounded-2xl border border-orange-700/40 bg-orange-700/10 p-4 text-center"><strong>🥉 Road Warrior</strong><p className="mt-1 text-xs text-slate-400">Top 11–100</p></div>
          </div>
        </section>

        <CompetitionExam questions={getPublicCompetitionQuestions(date)} hasPreviousAttempt={Boolean(attempt)} />
        {attempt && <p className="mt-4 rounded-2xl border border-emerald-600/30 bg-emerald-500/10 p-4 text-center text-sm text-emerald-200">Your latest result is on the leaderboard. Retaking the test will replace it, even if the new score is lower.</p>}

        <section className="mt-8 overflow-hidden rounded-3xl border border-slate-800 bg-[#111214] shadow-glow">
          <div className="border-b border-slate-800 p-5"><h2 className="text-xl font-bold">Top 100 Global Leaderboard</h2><p className="mt-1 text-xs text-slate-400">All-time best score · fastest time breaks ties</p></div>
          <div className="grid grid-cols-[52px_1fr_60px_60px] gap-2 border-b border-slate-800 px-4 py-3 text-xs font-semibold uppercase text-slate-500"><span>Rank</span><span>Soldier</span><span>Score</span><span>Time</span></div>
          {leaderboard.map((row) => <div key={row.user_id} className={`grid grid-cols-[52px_1fr_60px_60px] gap-2 border-b border-slate-800/70 px-4 py-3 text-sm ${row.user_id === user.id ? 'bg-amber-500/10' : ''}`}><strong>{row.leaderboard_rank === 1 ? '🥇' : row.leaderboard_rank === 2 ? '🥈' : row.leaderboard_rank === 3 ? '🥉' : `#${row.leaderboard_rank}`}</strong><span className="truncate">{row.soldier}</span><strong>{row.score}%</strong><span>{formatCompetitionTime(row.duration_seconds)}</span></div>)}
          {!leaderboard.length && <p className="p-6 text-center text-sm text-slate-400">Be the first Soldier on today’s leaderboard.</p>}
        </section>
      </div>
    </main>
  );
}
