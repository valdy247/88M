'use server';

import { revalidatePath } from 'next/cache';
import { createClient } from '../../lib/supabase/server';
import { competitionDate, getDailyCompetitionQuestions } from '../../lib/competition/daily-questions';
import type { AnswerId } from '../../types/question';

export async function startCompetition() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: 'Log in to compete.' };

  const date = competitionDate();
  const { data: attempt } = await supabase.from('competition_attempts').select('id').eq('user_id', user.id).eq('competition_date', date).maybeSingle();
  if (attempt) return { error: 'You already submitted today’s competition.' };

  await supabase.from('competition_starts').upsert({ user_id: user.id, competition_date: date }, { onConflict: 'user_id,competition_date', ignoreDuplicates: true });
  const { data: start, error } = await supabase.from('competition_starts').select('started_at').eq('user_id', user.id).eq('competition_date', date).single();
  if (error || !start) return { error: 'Could not start the competition.' };
  return { startedAt: new Date(start.started_at).getTime() };
}

export async function submitCompetition(answers: Record<string, AnswerId | null>) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: 'Log in to submit.' };

  const date = competitionDate();
  const { data: start } = await supabase.from('competition_starts').select('started_at').eq('user_id', user.id).eq('competition_date', date).single();
  if (!start) return { error: 'Competition start was not found.' };

  const questions = getDailyCompetitionQuestions(date);
  const correct = questions.reduce((total, question) => total + (answers[question.id] === question.correctAnswer ? 1 : 0), 0);
  const duration = Math.min(2400, Math.max(0, Math.round((Date.now() - new Date(start.started_at).getTime()) / 1000)));
  const { data: profile } = await supabase.from('profiles').select('last_name').eq('id', user.id).single();
  const { error } = await supabase.from('competition_attempts').insert({
    user_id: user.id,
    competition_date: date,
    score: Math.round((correct / 50) * 100),
    correct_answers: correct,
    total_questions: 50,
    duration_seconds: duration,
    soldier: profile?.last_name?.trim().split(/\s+/)[0] || 'Soldier'
  });

  if (error?.code === '23505') return { error: 'You already submitted today’s competition.' };
  if (error) return { error: 'Could not submit your score.' };
  revalidatePath('/competition');
  revalidatePath('/');
  revalidatePath('/account');
  return { success: true };
}
