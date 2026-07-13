import type { ExamSession } from '../../types/exam';
import type { ExamQuestion } from '../../types/exam';
import type { AnswerId } from '../../types/question';

const STORAGE_KEY = 'red-book-trainer-session';

function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

export function loadExamSession(): ExamSession | null {
  if (!isBrowser()) return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ExamSession;
  } catch {
    return null;
  }
}

export function saveExamSession(session: ExamSession): void {
  if (!isBrowser()) return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
}

export function clearExamSession(): void {
  if (!isBrowser()) return;
  window.localStorage.removeItem(STORAGE_KEY);
}

function createSessionId(): string {
  return `session-${Math.random().toString(36).slice(2, 10)}-${Date.now()}`;
}

export function createExamSession(questions: ExamQuestion[]): ExamSession {
  const startedAt = Date.now();
  const endsAt = startedAt + 40 * 60 * 1000;
  const answers = questions.reduce<Record<string, AnswerId | null>>((acc, question) => {
    acc[question.id] = null;
    return acc;
  }, {});

  return {
    sessionId: createSessionId(),
    questions,
    answers,
    currentQuestionIndex: 0,
    startedAt,
    endsAt,
    submittedAt: null,
    submissionReason: null,
    status: 'active'
  };
}
