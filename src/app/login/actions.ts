'use server';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { createClient } from '../../lib/supabase/server';

function value(formData: FormData, key: string) {
  return String(formData.get(key) ?? '').trim();
}

function loginUrl(type: 'error' | 'message', message: string, mode?: 'login' | 'register') {
  const params = new URLSearchParams({ [type]: message });
  if (mode) params.set('mode', mode);
  return `/login?${params.toString()}`;
}

export async function signIn(formData: FormData) {
  const email = value(formData, 'email').toLowerCase();
  const password = value(formData, 'password');
  if (!email || !password) redirect(loginUrl('error', 'Enter your email and password.'));

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) redirect(loginUrl('error', error.message));
  redirect('/account');
}

export async function signUp(formData: FormData) {
  const firstName = value(formData, 'first_name');
  const lastName = value(formData, 'last_name');
  const rank = value(formData, 'rank');
  const classNumber = value(formData, 'class_number');
  const email = value(formData, 'email').toLowerCase();
  const password = value(formData, 'password');

  if (!firstName || !lastName || !rank || !classNumber || !email || !password) {
    redirect(loginUrl('error', 'Complete every field.', 'register'));
  }
  if (password.length < 8) {
    redirect(loginUrl('error', 'Use at least 8 characters.', 'register'));
  }

  const headerStore = await headers();
  const origin = headerStore.get('origin') ?? process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
  const supabase = await createClient();
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback?next=/account`,
      data: {
        first_name: firstName,
        last_name: lastName,
        rank,
        class_number: classNumber
      }
    }
  });

  if (error) redirect(loginUrl('error', error.message, 'register'));
  redirect(loginUrl('message', 'Check your email to verify your account.'));
}

export async function requestPasswordReset(formData: FormData) {
  const email = value(formData, 'email').toLowerCase();
  if (!email) redirect(loginUrl('error', 'Enter your email.'));

  const headerStore = await headers();
  const origin = headerStore.get('origin') ?? process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
  const supabase = await createClient();
  await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?next=/update-password`
  });

  redirect(loginUrl('message', 'If the account exists, check your email.'));
}
