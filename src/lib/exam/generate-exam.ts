import type { Question, Category } from '../../types/question';
import type { ExamQuestion } from '../../types/exam';
import { shuffleArray, shuffleQuestionOptions } from './shuffle';

const blueprint: Record<Category, number> = {
  'Radio Procedures': 3,
  'Strip Maps': 2,
  'SALUTE Report': 2,
  '9-Line MEDEVAC': 3,
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
  const copy = shuffleArray(pool);
  return copy.slice(0, Math.min(count, copy.length));
}

export function generateExam(questions: Question[]): ExamQuestion[] {
  const byCategory = questions.reduce<Record<Category, Question[]>>((result, question) => {
    const categoryQuestions = result[question.category] ?? [];
    return { ...result, [question.category]: [...categoryQuestions, question] };
  }, {} as Record<Category, Question[]>);

  let selected: Question[] = [];

  for (const category of Object.keys(blueprint) as Category[]) {
    const pool = byCategory[category] ?? [];
    const required = blueprint[category];
    selected = [...selected, ...pickFromPool(pool, required)];
  }

  const remaining = 25 - selected.length;
  if (remaining > 0) {
    const available = uniqueById(questions).filter((question) => !selected.some((item) => item.id === question.id));
    selected = [...selected, ...pickFromPool(available, remaining)];
  }

  selected = shuffleArray(uniqueById(selected)).slice(0, 25);

  return selected.map(shuffleQuestionOptions);
}
