import type { SupabaseClient } from '@supabase/supabase-js';

export async function getHiddenQuestionIds(supabase: SupabaseClient): Promise<string[]> {
  const { data, error } = await supabase.from('hidden_questions').select('question_id');
  if (error) {
    console.error('Could not load hidden questions:', error.message);
    return [];
  }
  return data.map((row) => row.question_id);
}

