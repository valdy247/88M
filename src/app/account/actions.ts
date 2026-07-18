'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '../../lib/supabase/server';

export async function updateProfile(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const classDigits = String(formData.get('class_number') ?? '').replace(/\D/g, '');
  const profile = {
    first_name: String(formData.get('first_name') ?? '').trim(),
    last_name: String(formData.get('last_name') ?? '').trim(),
    rank: String(formData.get('rank') ?? '').trim(),
    class_number: classDigits ? `${classDigits}T` : '',
    updated_at: new Date().toISOString()
  };

  if (Object.values(profile).some((item) => !item)) redirect('/account?error=Complete+every+field.');
  const { error } = await supabase.from('profiles').update(profile).eq('id', user.id);
  if (error) redirect(`/account?error=${encodeURIComponent(error.message)}`);
  revalidatePath('/account');
  revalidatePath('/');
  redirect('/account?message=Profile+updated.');
}
