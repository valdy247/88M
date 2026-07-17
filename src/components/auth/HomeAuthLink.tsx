import Link from 'next/link';
import { LogIn, Shield, UserRound } from 'lucide-react';
import { createClient } from '../../lib/supabase/server';

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

  return (
    <div className="flex items-center gap-2">
      {profile?.role === 'admin' && (
        <Link href="/admin" className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-amber-500/50 bg-slate-950/90 text-amber-300" aria-label="Admin">
          <Shield className="h-4 w-4" />
        </Link>
      )}
      <Link href="/account" className="inline-flex items-center gap-2 rounded-2xl bg-slate-950/90 px-4 py-2.5 text-sm font-semibold text-white">
        <UserRound className="h-4 w-4" /> {profile?.first_name || 'Account'}
      </Link>
    </div>
  );
}
