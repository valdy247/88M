import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createClient } from '../../lib/supabase/server';
import { updateProfile } from './actions';

type Props = { searchParams: Promise<{ error?: string; message?: string }> };
const inputClass = 'w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white';

export default async function AccountPage({ searchParams }: Props) {
  const params = await searchParams;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const [{ data: profile }, { data: attempts }] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', user.id).single(),
    supabase.from('exam_attempts').select('id, exam_type, score, total_questions, completed_at').order('completed_at', { ascending: false }).limit(5)
  ]);
  if (!profile) redirect('/login?error=Profile+not+found.');

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100">
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-semibold text-amber-300">← Home</Link>
          <form action="/auth/logout" method="post"><button className="rounded-2xl border border-slate-700 px-4 py-2 text-sm font-semibold">Log out</button></form>
        </div>
        <section className="rounded-3xl border border-slate-800 bg-[#111214] p-6 shadow-glow">
          <div className="flex items-start justify-between gap-4">
            <div><p className="text-sm uppercase tracking-[0.25em] text-amber-300">Profile</p><h1 className="mt-1 text-2xl font-semibold">{profile.rank} {profile.first_name} {profile.last_name}</h1><p className="mt-1 text-sm text-slate-400">Class {profile.class_number}</p></div>
            {profile.role === 'admin' && <Link href="/admin" className="rounded-2xl bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950">Admin</Link>}
          </div>
          {params.error && <p className="mt-4 text-sm text-red-300">{params.error}</p>}
          {params.message && <p className="mt-4 text-sm text-emerald-300">{params.message}</p>}
          <form action={updateProfile} className="mt-6 grid gap-3 sm:grid-cols-2">
            <input className={inputClass} name="first_name" defaultValue={profile.first_name} required />
            <input className={inputClass} name="last_name" defaultValue={profile.last_name} required />
            <input className={inputClass} name="rank" defaultValue={profile.rank} required />
            <input className={inputClass} name="class_number" defaultValue={profile.class_number} required />
            <button className="rounded-2xl bg-olive-600 px-5 py-3 font-semibold text-slate-950 sm:col-span-2">Save</button>
          </form>
        </section>
        <section className="rounded-3xl border border-slate-800 bg-[#111214] p-6 shadow-glow">
          <h2 className="text-lg font-semibold">Recent tests</h2>
          <div className="mt-4 space-y-2">
            {attempts?.map((attempt) => <div key={attempt.id} className="flex justify-between rounded-2xl bg-slate-900 px-4 py-3 text-sm"><span>{attempt.exam_type === 'big' ? 'Big test' : 'Regular test'}</span><strong>{attempt.score}%</strong></div>)}
            {!attempts?.length && <p className="text-sm text-slate-400">No saved tests yet.</p>}
          </div>
        </section>
      </div>
    </main>
  );
}
