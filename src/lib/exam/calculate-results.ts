import type { ExamSession, CategoryResult } from '../../types/exam';
import type { ExamQuestion } from '../../types/exam';

export function getCorrectCount(session: ExamSession): number {
  return session.questions.reduce((count, question) => {
    const answer = session.answers[question.id];
    return count + (answer === question.correctAnswer ? 1 : 0);
  }, 0);
}

export function getIncorrectCount(session: ExamSession): number {
  return session.questions.reduce((count, question) => {
    const answer = session.answers[question.id];
    return count + (answer && answer !== question.correctAnswer ? 1 : 0);
  }, 0);
}

export function getUnansweredCount(session: ExamSession): number {
  return session.questions.reduce((count, question) => (question.id in session.answers && session.answers[question.id] ? count : count + 1), 0);
}

export function getPercentage(session: ExamSession): number {
  return Math.round((getCorrectCount(session) / session.questions.length) * 100);
}

export function getTimeUsed(session: ExamSession): string {
  const end = session.submittedAt ?? Date.now();
  const duration = Math.max(0, end - session.startedAt);
  const minutes = Math.floor(duration / 60000);
  const seconds = Math.floor((duration % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

export function getCategoryPerformance(session: ExamSession): CategoryResult[] {
  const categoryMap = session.questions.reduce<Record<string, { total: number; correct: number }>>((result, question) => {
    const existing = result[question.category] ?? { total: 0, correct: 0 };
    const answer = session.answers[question.id];
    return {
      ...result,
      [question.category]: {
        total: existing.total + 1,
        correct: existing.correct + (answer === question.correctAnswer ? 1 : 0)
      }
    };
  }, {});

  return Object.entries(categoryMap).map(([category, stats]) => ({
    category,
    total: stats.total,
    correct: stats.correct
  }));
}

export function calculateResults(session: ExamSession) {
  const correctCount = getCorrectCount(session);
  const incorrectCount = getIncorrectCount(session);
  const unansweredCount = getUnansweredCount(session);
  const percentage = getPercentage(session);
  const passed = percentage >= 80;
  const categoryPerformance = getCategoryPerformance(session);
  const weakCategories = categoryPerformance
    .filter((item) => item.total > 0 && item.correct / item.total < 0.6)
    .map((item) => item.category);

  return {
    correctCount,
    incorrectCount,
    unansweredCount,
    percentage,
    timeUsed: getTimeUsed(session),
    categoryPerformance,
    practiceResult: passed ? 'Pass' : 'Needs review',
    passed,
    weakCategories
  };
}
