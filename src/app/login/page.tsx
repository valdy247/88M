import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createClient } from '../../lib/supabase/server';
import { requestPasswordReset, signIn, signUp } from './actions';

const ranks = ['PVT', 'PV2', 'PFC', 'SPC', 'CPL', 'SGT', 'SSG', 'SFC', 'MSG', '1SG', 'SGM', 'CSM', 'WO1', 'CW2', 'CW3', 'CW4', 'CW5', '2LT', '1LT', 'CPT', 'MAJ'];

type Props = { searchParams: Promise<{ mode?: string; error?: string; message?: string }> };

const inputClass = 'w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none';

export default async function LoginPage({ searchParams }: Props) {
  const params = await searchParams;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (user) redirect('/account');

  const register = params.mode === 'register';

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100">
      <div className="mx-auto max-w-md">
        <Link href="/" className="text-sm font-semibold text-amber-300">← Home</Link>
        <div className="mt-6 rounded-3xl border border-slate-800 bg-[#111214] p-6 shadow-glow sm:p-8">
          <h1 className="text-2xl font-semibold text-white">{register ? 'Create account' : 'Log in'}</h1>
          <div className="mt-5 grid grid-cols-2 rounded-2xl bg-slate-950 p-1 text-center text-sm font-semibold">
            <Link href="/login" className={`rounded-xl px-3 py-2 ${!register ? 'bg-amber-500 text-slate-950' : 'text-slate-400'}`}>Log in</Link>
            <Link href="/login?mode=register" className={`rounded-xl px-3 py-2 ${register ? 'bg-amber-500 text-slate-950' : 'text-slate-400'}`}>Register</Link>
          </div>

          {params.error && <p className="mt-4 rounded-2xl bg-red-500/10 px-4 py-3 text-sm text-red-200">{params.error}</p>}
          {params.message && <p className="mt-4 rounded-2xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">{params.message}</p>}

          {register ? (
            <form action={signUp} className="mt-5 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input className={inputClass} name="first_name" placeholder="First name" autoComplete="given-name" required maxLength={60} />
                <input className={inputClass} name="last_name" placeholder="Last name" autoComplete="family-name" required maxLength={60} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <select className={inputClass} name="rank" required defaultValue="">
                  <option value="" disabled>Rank</option>
                  {ranks.map((rank) => <option key={rank} value={rank}>{rank}</option>)}
                </select>
                <input className={inputClass} name="class_number" placeholder="Class number" required maxLength={40} />
              </div>
              <input className={inputClass} type="email" name="email" placeholder="Email" autoComplete="email" required />
              <input className={inputClass} type="password" name="password" placeholder="Password (8+ characters)" autoComplete="new-password" required minLength={8} />
              <button className="w-full rounded-2xl bg-amber-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-amber-400">Create account</button>
            </form>
          ) : (
            <>
              <form action={signIn} className="mt-5 space-y-3">
                <input className={inputClass} type="email" name="email" placeholder="Email" autoComplete="email" required />
                <input className={inputClass} type="password" name="password" placeholder="Password" autoComplete="current-password" required />
                <button className="w-full rounded-2xl bg-amber-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-amber-400">Log in</button>
              </form>
              <details className="mt-5 text-sm text-slate-400">
                <summary className="cursor-pointer text-center">Forgot password?</summary>
                <form action={requestPasswordReset} className="mt-3 flex gap-2">
                  <input className={inputClass} type="email" name="email" placeholder="Email" required />
                  <button className="rounded-2xl border border-slate-700 px-4 font-semibold text-white">Send</button>
                </form>
              </details>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
