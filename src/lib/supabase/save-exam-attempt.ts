import type { ExamSession } from '../../types/exam';
import { calculateResults } from '../exam/calculate-results';
import { createClient } from './client';

export async function saveExamAttempt(session: ExamSession) {
  if (session.status !== 'submitted' || !session.submittedAt) return;

  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  const results = calculateResults(session);
  const { error } = await supabase.from('exam_attempts').insert({
    user_id: user.id,
    session_id: session.sessionId,
    exam_type: session.questions.length === 50 ? 'big' : 'regular',
    score: results.percentage,
    correct_answers: results.correctCount,
    total_questions: session.questions.length,
    duration_seconds: Math.max(0, Math.round((session.submittedAt - session.startedAt) / 1000)),
    category_results: results.categoryPerformance,
    completed_at: new Date(session.submittedAt).toISOString()
  });

  if (error && error.code !== '23505') {
    console.error('Unable to save exam attempt:', error.message);
  }
}
