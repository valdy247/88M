import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createClient } from '../../lib/supabase/server';
import { CadenceLibrary } from '../../components/cadences/CadenceLibrary';

export default async function CadencesPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login?message=Log+in+to+continue.');

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="font-semibold text-amber-300">← Home</Link>
        <div className="mt-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">Study & listen</p>
          <h1 className="mt-2 text-3xl font-bold">Cadences</h1>
          <p className="mt-2 text-sm text-slate-400">Choose a cadence to open its original lyrics, history, and listening links.</p>
        </div>
        <CadenceLibrary />
        <p className="mt-6 text-center text-xs text-slate-500">
          Catalog and links sourced from Jonathan Michael Fleming. Lyrics remain on the original website.
        </p>
      </div>
    </main>
  );
}
