import { AnswerId, Question } from './question';

export interface ExamQuestion extends Question {
  shuffledOptions: [
    { id: 'A'; text: string } | { id: 'B'; text: string } | { id: 'C'; text: string } | { id: 'D'; text: string },
    { id: 'A'; text: string } | { id: 'B'; text: string } | { id: 'C'; text: string } | { id: 'D'; text: string },
    { id: 'A'; text: string } | { id: 'B'; text: string } | { id: 'C'; text: string } | { id: 'D'; text: string },
    { id: 'A'; text: string } | { id: 'B'; text: string } | { id: 'C'; text: string } | { id: 'D'; text: string }
  ];
  answerMap: Record<'A' | 'B' | 'C' | 'D', 'A' | 'B' | 'C' | 'D'>;
}

export interface ExamSession {
  sessionId: string;
  questions: ExamQuestion[];
  answers: Record<string, AnswerId | null>;
  currentQuestionIndex: number;
  startedAt: number;
  endsAt: number;
  submittedAt: number | null;
  status: 'active' | 'submitted';
}

export interface TimeRemaining {
  startedAt: number;
  endsAt: number;
}

export interface CategoryResult {
  category: string;
  total: number;
  correct: number;
}
