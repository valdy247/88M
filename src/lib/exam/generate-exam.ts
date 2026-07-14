import type { Question, Category } from '../../types/question';
import type { ExamQuestion } from '../../types/exam';
import { shuffleArray, shuffleQuestionOptions } from './shuffle';

const blueprint: Partial<Record<Category, number>> = {
  'Radio Procedures': 3,
  'Strip Maps': 2,
  'SALUTE Report': 2,
  'Accident Forms': 3,
  'PMCS': 3,
  'DA Form 5988-E': 2,
  'Dispatch Procedures': 1,
  'Technical Manuals': 1,
  'Ground Guide Procedures': 3,
  'Hand and Arm Signals': 2
};

function uniqueById(items: Question[]): Question[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

function pickFromPool(pool: Question[], count: number): Question[] {
  const targetCount = Math.min(count, pool.length);
  const hardTarget = Math.min(
    targetCount >= 3 ? Math.max(1, Math.round(targetCount * 0.15)) : 0,
    pool.filter((question) => question.difficulty === 'hard').length
  );
  const mediumTarget = Math.min(
    Math.round(targetCount * 0.55),
    pool.filter((question) => question.difficulty === 'medium').length
  );
  const easyTarget = Math.min(
    Math.max(0, targetCount - hardTarget - mediumTarget),
    pool.filter((question) => question.difficulty === 'easy').length
  );
  const selected = [
    ...shuffleArray(pool.filter((question) => question.difficulty === 'medium')).slice(0, mediumTarget),
    ...shuffleArray(pool.filter((question) => question.difficulty === 'easy')).slice(0, easyTarget),
    ...shuffleArray(pool.filter((question) => question.difficulty === 'hard')).slice(0, hardTarget)
  ];
  const remaining = shuffleArray(pool.filter((question) => !selected.some((item) => item.id === question.id)));

  return shuffleArray([...selected, ...remaining.slice(0, targetCount - selected.length)]);
}

export function generateExam(questions: Question[], totalQuestions = 25): ExamQuestion[] {
  const byCategory = questions.reduce<Record<Category, Question[]>>((result, question) => {
    const categoryQuestions = result[question.category] ?? [];
    return { ...result, [question.category]: [...categoryQuestions, question] };
  }, {} as Record<Category, Question[]>);

  const availableQuestionCount = uniqueById(questions).length;
  const targetCount = Math.min(totalQuestions, availableQuestionCount);

  let selected: Question[] = [];

  for (const category of Object.keys(blueprint) as Category[]) {
    const pool = byCategory[category] ?? [];
    const required = blueprint[category] ?? 0;
    selected = [...selected, ...pickFromPool(pool, required)];
  }

  const remaining = targetCount - selected.length;
  if (remaining > 0) {
    const available = uniqueById(questions).filter((question) => !selected.some((item) => item.id === question.id));
    selected = [...selected, ...pickFromPool(available, remaining)];
  }

  selected = shuffleArray(uniqueById(selected)).slice(0, targetCount);

  return selected.map(shuffleQuestionOptions);
}
