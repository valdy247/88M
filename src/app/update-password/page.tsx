import { updatePassword } from './actions';

type Props = { searchParams: Promise<{ error?: string }> };

export default async function UpdatePasswordPage({ searchParams }: Props) {
  const params = await searchParams;
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100">
      <form action={updatePassword} className="mx-auto max-w-md rounded-3xl border border-slate-800 bg-[#111214] p-8 shadow-glow">
        <h1 className="text-2xl font-semibold">New password</h1>
        {params.error && <p className="mt-4 text-sm text-red-300">{params.error}</p>}
        <input className="mt-5 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3" type="password" name="password" placeholder="8+ characters" minLength={8} required />
        <button className="mt-3 w-full rounded-2xl bg-amber-500 px-5 py-3 font-semibold text-slate-950">Save password</button>
      </form>
    </main>
  );
}
