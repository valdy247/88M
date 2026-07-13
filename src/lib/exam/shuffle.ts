import type { AnswerId, Question, QuestionOption } from '../../types/question';
import type { ExamQuestion } from '../../types/exam';

export function shuffleArray<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function shuffleQuestionOptions(question: Question): ExamQuestion {
  const originalOptions = [...question.options];
  const shuffled = shuffleArray(originalOptions);
  const answerMap = shuffled.reduce<Record<AnswerId, AnswerId>>((map, option, index) => {
    const label = (['A', 'B', 'C', 'D'] as AnswerId[])[index];
    map[label] = option.id;
    return map;
  }, {} as Record<AnswerId, AnswerId>);

  const correctAnswer = (Object.entries(answerMap).find(([, originalId]) => originalId === question.correctAnswer)?.[0] ?? 'A') as AnswerId;

  return {
    ...question,
    shuffledOptions: shuffled.map((option, index) => ({
      id: (['A', 'B', 'C', 'D'] as AnswerId[])[index],
      text: option.text
    })) as [QuestionOption, QuestionOption, QuestionOption, QuestionOption],
    answerMap,
    correctAnswer
  };
}
