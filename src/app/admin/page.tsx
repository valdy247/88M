import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createClient } from '../../lib/supabase/server';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const { data: currentProfile } = await supabase.from('profiles').select('role').eq('id', user.id).single();
  if (currentProfile?.role !== 'admin') redirect('/account');

  const [{ data: users }, { data: attempts }] = await Promise.all([
    supabase.from('profiles').select('id, email, first_name, last_name, rank, class_number, role, created_at').order('created_at', { ascending: false }),
    supabase.from('exam_attempts').select('id, user_id, exam_type, score, correct_answers, total_questions, completed_at').gt('score', 0).order('completed_at', { ascending: false }).limit(100)
  ]);
  const average = attempts?.length ? Math.round(attempts.reduce((sum, item) => sum + item.score, 0) / attempts.length) : 0;
  const userMap = new Map(users?.map((profile) => [profile.id, profile]));

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex items-center justify-between"><div><p className="text-sm uppercase tracking-[0.25em] text-amber-300">Admin</p><h1 className="text-3xl font-semibold">Dashboard</h1></div><Link href="/" className="rounded-2xl border border-slate-700 px-4 py-2 text-sm font-semibold">Home</Link></div>
        <div className="grid grid-cols-3 gap-3">
          {[['Users', users?.length ?? 0], ['Tests', attempts?.length ?? 0], ['Average', `${average}%`]].map(([label, value]) => <div key={label} className="rounded-3xl border border-slate-800 bg-[#111214] p-5"><p className="text-xs text-slate-400">{label}</p><p className="mt-2 text-2xl font-semibold">{value}</p></div>)}
        </div>
        <section className="overflow-hidden rounded-3xl border border-slate-800 bg-[#111214]">
          <h2 className="p-5 text-lg font-semibold">Users</h2>
          <div className="divide-y divide-slate-800">{users?.map((profile) => <div key={profile.id} className="p-4 text-sm sm:flex sm:items-center sm:justify-between"><div><strong>{profile.rank} {profile.first_name} {profile.last_name}</strong><p className="text-slate-400">{profile.email}</p></div><span className="mt-2 block text-slate-300 sm:mt-0">Class {profile.class_number}{profile.role === 'admin' ? ' · Admin' : ''}</span></div>)}</div>
        </section>
        <section className="overflow-hidden rounded-3xl border border-slate-800 bg-[#111214]">
          <h2 className="p-5 text-lg font-semibold">Test results</h2>
          <div className="divide-y divide-slate-800">{attempts?.map((attempt) => { const profile = userMap.get(attempt.user_id); return <div key={attempt.id} className="flex items-center justify-between gap-4 p-4 text-sm"><div><strong>{profile ? `${profile.rank} ${profile.first_name} ${profile.last_name}` : 'User'}</strong><p className="text-slate-400">{attempt.exam_type === 'big' ? 'Big test' : 'Regular test'} · {attempt.correct_answers}/{attempt.total_questions}</p></div><span className="text-xl font-semibold text-amber-300">{attempt.score}%</span></div>; })}</div>
          {!attempts?.length && <p className="p-5 text-sm text-slate-400">No tests saved yet.</p>}
        </section>
      </div>
    </main>
  );
}
