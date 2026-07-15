import { allQuestions } from '../../data/questions';
import type { Question, AnswerId, Category, Difficulty } from '../../types/question';

const validCategorySet: Set<Category> = new Set([
  'Radio Procedures',
  'Strip Maps',
  'SALUTE Report',
  'Accident Forms',
  'PMCS',
  'DA Form 5988-E',
  'Dispatch Procedures',
  'Technical Manuals',
  'Ground Guide Procedures',
  'Hand and Arm Signals',
  'Convoy Operations',
  'Column Formations',
  'March Discipline',
  'Ground Guide',
  'Hand Signals',
  'Adverse Driving',
  'Cargo Loading'
]);

const validDifficultySet: Set<Difficulty> = new Set(['easy', 'medium', 'hard']);
const validAnswerIds: AnswerId[] = ['A', 'B', 'C', 'D'];

function normalizeText(text: string): string {
  return text.trim().toLowerCase().replace(/\s+/g, ' ');
}

function validateQuestion(question: Question, ids: Set<string>, duplicates: Map<string, string[]>): string[] {
  const errors: string[] = [];

  if (!question.id || ids.has(question.id)) {
    errors.push(`Invalid or duplicate id: ${question.id}`);
  }
  if (!question.question.trim()) {
    errors.push(`Missing question text: ${question.id}`);
  }
  if (!question.explanation.trim()) {
    errors.push(`Missing explanation: ${question.id}`);
  }
  if (!question.sourceTopic.trim()) {
    errors.push(`Missing sourceTopic: ${question.id}`);
  }
  if (!validCategorySet.has(question.category)) {
    errors.push(`Invalid category: ${question.id} (${question.category})`);
  }
  if (!validDifficultySet.has(question.difficulty)) {
    errors.push(`Invalid difficulty: ${question.id} (${question.difficulty})`);
  }
  if (!Array.isArray(question.options) || question.options.length !== 4) {
    errors.push(`Question does not have exactly 4 options: ${question.id}`);
  } else {
    const idsSeen = new Set<AnswerId>();
    const optionTextSeen = new Set<string>();
    for (const option of question.options) {
      if (!option.text.trim()) {
        errors.push(`Empty option text: ${question.id} (${option.id})`);
      }
      if (!validAnswerIds.includes(option.id)) {
        errors.push(`Invalid option id: ${question.id} (${option.id})`);
      }
      if (idsSeen.has(option.id)) {
        errors.push(`Duplicate option id: ${question.id} (${option.id})`);
      }
      const normalizedOption = normalizeText(option.text);
      if (optionTextSeen.has(normalizedOption)) {
        errors.push(`Duplicate option text: ${question.id} (${option.text})`);
      }
      if (/^(all|none) of the above[.]?$/i.test(option.text.trim())) {
        errors.push(`Uses an overly obvious all/none-of-the-above option: ${question.id}`);
      }
      idsSeen.add(option.id);
      optionTextSeen.add(normalizedOption);
    }
    if (!validAnswerIds.every((id) => idsSeen.has(id))) {
      errors.push(`Option ids must include A, B, C, D: ${question.id}`);
    }
  }
  if (!validAnswerIds.includes(question.correctAnswer)) {
    errors.push(`Invalid correctAnswer: ${question.id} (${question.correctAnswer})`);
  } else if (!question.options.find((option) => option.id === question.correctAnswer)) {
    errors.push(`correctAnswer does not match any option: ${question.id}`);
  }
  const text = normalizeText(question.question);
  const existing = duplicates.get(text) ?? [];
  existing.push(question.id);
  duplicates.set(text, existing);

  if (/night operations|night-operation|dark|nighttime/i.test(question.question + ' ' + question.explanation)) {
    errors.push(`Contains prohibited night operations language: ${question.id}`);
  }
  if (/(\.png|\.jpg|\.jpeg|\.gif|\.svg|image|diagram|figure)/i.test(question.question + ' ' + question.explanation)) {
    errors.push(`Contains prohibited image references: ${question.id}`);
  }

  ids.add(question.id);
  return errors;
}

function runValidation(): void {
  const ids = new Set<string>();
  const duplicates = new Map<string, string[]>();
  const errors: string[] = [];

  for (const question of allQuestions) {
    errors.push(...validateQuestion(question, ids, duplicates));
  }

  for (const [normalized, questionIds] of duplicates) {
    if (questionIds.length > 1) {
      errors.push(`Duplicate question text: ${questionIds.join(', ')}`);
    }
  }

  if (errors.length > 0) {
    console.error('Question validation failed with the following errors:');
    for (const message of errors) {
      console.error(`- ${message}`);
    }
    process.exit(1);
  }

  console.log(`Validated ${allQuestions.length} questions successfully.`);
}

runValidation();
