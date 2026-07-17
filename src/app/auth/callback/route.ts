import { NextResponse } from 'next/server';
import { createClient } from '../../../lib/supabase/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const requestedNext = url.searchParams.get('next') ?? '/';
  const next = requestedNext.startsWith('/') && !requestedNext.startsWith('//') ? requestedNext : '/';

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) return NextResponse.redirect(new URL(next, url.origin));

    // Email apps often open confirmation links in a different browser. The
    // address is still verified, but that browser does not have the PKCE
    // verifier needed to create a session automatically.
    if ((next === '/' || next === '/account') && error.code === 'bad_code_verifier') {
      return NextResponse.redirect(
        new URL('/login?message=Email+verified.+Log+in+to+continue.', url.origin)
      );
    }
  }

  return NextResponse.redirect(new URL('/login?error=Could+not+verify+your+email.', url.origin));
}
