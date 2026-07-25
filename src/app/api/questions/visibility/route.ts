import { NextResponse } from 'next/server';
import { allQuestions } from '../../../../data/questions';
import { getHiddenQuestionIds } from '../../../../lib/questions/visibility';
import { createClient } from '../../../../lib/supabase/server';

export async function GET() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const [{ data: profile }, hiddenQuestionIds] = await Promise.all([
    user
      ? supabase.from('profiles').select('role').eq('id', user.id).maybeSingle()
      : Promise.resolve({ data: null }),
    getHiddenQuestionIds(supabase)
  ]);
  return NextResponse.json({ hiddenQuestionIds, isAdmin: profile?.role === 'admin' });
}

export async function POST(request: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Authentication required.' }, { status: 401 });

  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).maybeSingle();
  if (profile?.role !== 'admin') {
    return NextResponse.json({ error: 'Administrator access required.' }, { status: 403 });
  }

  const body = await request.json().catch(() => null) as { questionId?: string; hidden?: boolean } | null;
  const questionId = body?.questionId;
  if (!questionId || typeof body?.hidden !== 'boolean' || !allQuestions.some((question) => question.id === questionId)) {
    return NextResponse.json({ error: 'Invalid question.' }, { status: 400 });
  }

  const result = body.hidden
    ? await supabase.from('hidden_questions').upsert(
        { question_id: questionId, hidden_by: user.id, hidden_at: new Date().toISOString() },
        { onConflict: 'question_id' }
      )
    : await supabase.from('hidden_questions').delete().eq('question_id', questionId);

  if (result.error) {
    return NextResponse.json({ error: 'Could not update the question. Apply the hidden_questions migration first.' }, { status: 500 });
  }
  return NextResponse.json({ questionId, hidden: body.hidden });
}

