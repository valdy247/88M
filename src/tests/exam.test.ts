import { expect, test, describe, beforeEach } from 'vitest';
import { allQuestions } from '../data/questions';
import { generateExam } from '../lib/exam/generate-exam';
import { shuffleQuestionOptions, shuffleArray } from '../lib/exam/shuffle';
import { calculateResults, getCorrectCount, getIncorrectCount, getUnansweredCount, getCategoryPerformance } from '../lib/exam/calculate-results';
import { formatTimer, getTimeRemaining } from '../lib/exam/timer';
import { loadExamSession, saveExamSession, clearExamSession, createExamSession } from '../lib/storage/exam-storage';
import type { ExamSession } from '../types/exam';

describe('Exam utilities', () => {
  test('selects exactly 25 unique questions', () => {
    const exam = generateExam(allQuestions);
    expect(exam).toHaveLength(25);
    const ids = new Set(exam.map((question) => question.id));
    expect(ids.size).toBe(25);
  });

  test('selects exactly 50 unique questions for BIG ASS TEST', () => {
    const exam = generateExam(allQuestions, 50);
    expect(exam).toHaveLength(50);
    const ids = new Set(exam.map((question) => question.id));
    expect(ids.size).toBe(50);
  });

  test('selects a balanced category set with no duplicates', () => {
    const exam = generateExam(allQuestions);
    const categoryCounts = exam.reduce<Record<string, number>>((acc, question) => {
      acc[question.category] = (acc[question.category] ?? 0) + 1;
      return acc;
    }, {});
    expect(Object.values(categoryCounts).reduce((sum, value) => sum + value, 0)).toBe(25);
    expect(new Set(exam.map((question) => question.id)).size).toBe(25);
  });

  test.each([25, 50])('favors medium questions without making a %i-question exam too easy or too hard', (size) => {
    const exam = generateExam(allQuestions, size);
    const counts = exam.reduce<Record<string, number>>((acc, question) => {
      acc[question.difficulty] = (acc[question.difficulty] ?? 0) + 1;
      return acc;
    }, {});

    expect(counts.medium ?? 0).toBeGreaterThan(size / 2);
    expect(counts.easy ?? 0).toBeLessThanOrEqual(Math.ceil(size * 0.3));
    expect(counts.hard ?? 0).toBeLessThanOrEqual(Math.ceil(size * 0.2));
  });

  test('regular exams always cover the operational topics represented in flashcards', () => {
    const categories = generateExam(allQuestions).reduce<Record<string, number>>((acc, question) => {
      acc[question.category] = (acc[question.category] ?? 0) + 1;
      return acc;
    }, {});

    expect(categories['Convoy Operations']).toBe(3);
    expect(categories['Column Formations']).toBe(3);
    expect(categories['March Discipline']).toBe(1);
    expect(categories['Adverse Driving']).toBe(2);
    expect(categories['Accident Forms']).toBe(2);
    expect(categories['9-Line MEDEVAC']).toBeUndefined();
    expect(categories['Cargo Loading']).toBe(1);
  });

  test('uses the official convoy flag colors', () => {
    const flagQuestion = allQuestions.find((question) => question.id === 'convoy-review-07');

    expect(flagQuestion).toBeDefined();
    expect(flagQuestion?.options.find((option) => option.id === flagQuestion.correctAnswer)?.text).toBe(
      'Lead blue; trail green'
    );
  });

  test('contains no 9-Line MEDEVAC material in the test question bank', () => {
    const serializedQuestionBank = JSON.stringify(allQuestions);

    expect(serializedQuestionBank).not.toMatch(/9[ -]?line|medevac|patient nationality and status/i);
  });

  test('includes the reviewed vehicle and operational questions with corrected answers', () => {
    const expectedAnswers: Record<string, string> = {
      'ground-06': '10 yards',
      'vehicle-spec-01': '48 inches',
      'signal-11': 'Extend both arms and move them up and down with open hands toward the ground',
      'vehicle-spec-02': '400 miles',
      'formation-review-07': 'Close column',
      'strip-14': 'Two parallel dotted lines',
      'weapons-status-review-01': 'Ammunition is in the magazine but no round is chambered',
      'halt-review-01': 'Herringbone'
    };

    for (const [questionId, expectedAnswer] of Object.entries(expectedAnswers)) {
      const question = allQuestions.find((item) => item.id === questionId);
      expect(question).toBeDefined();
      expect(question?.options.find((option) => option.id === question.correctAnswer)?.text).toBe(expectedAnswer);
    }
  });

  test('includes the supplied strip-map legend topics', () => {
    const stripMapLegendIds = [
      'strip-15',
      'strip-16',
      'strip-17',
      'strip-18',
      'strip-19',
      'strip-20',
      'strip-21',
      'strip-22',
      'strip-23'
    ];

    for (const questionId of stripMapLegendIds) {
      expect(allQuestions.some((question) => question.id === questionId)).toBe(true);
    }
  });

  test('shuffling preserves the correct answer mapping', () => {
    const original = allQuestions[0];
    const shuffled = shuffleQuestionOptions(original);
    const correctLabel = shuffled.correctAnswer;
    expect(['A', 'B', 'C', 'D']).toContain(correctLabel);
    const correctOption = shuffled.shuffledOptions.find((option) => option.id === correctLabel);
    expect(correctOption).toBeDefined();
    expect(correctOption?.text).toBe(original.options.find((option) => option.id === original.correctAnswer)?.text);
  });

  test('question bank contains no duplicate IDs or duplicate text', () => {
    const ids = allQuestions.map((question) => question.id);
    expect(new Set(ids).size).toBe(ids.length);

    const normalizedText = allQuestions.map((question) =>
      question.question.trim().toLowerCase().replace(/\s+/g, ' ')
    );
    expect(new Set(normalizedText).size).toBe(normalizedText.length);
  });

  test('questions have exactly four options and valid answer IDs', () => {
    for (const question of allQuestions) {
      expect(question.options).toHaveLength(4);
      const optionIds = question.options.map((option) => option.id);
      expect(new Set(optionIds)).toEqual(new Set(['A', 'B', 'C', 'D']));
      expect(optionIds).toContain(question.correctAnswer);
      expect(question.question.trim()).not.toBe('');
      expect(question.explanation.trim()).not.toBe('');
    }
  });
});

describe('Result calculations and timer', () => {
  const session: ExamSession = {
    sessionId: 'test-session',
    questions: allQuestions.slice(0, 3).map(shuffleQuestionOptions),
    answers: {},
    currentQuestionIndex: 0,
    startedAt: Date.now() - 10000,
    endsAt: Date.now() + 100000,
    submittedAt: Date.now(),
    status: 'submitted'
  };

  beforeEach(() => {
    session.answers = Object.fromEntries(session.questions.map((question) => [question.id, null]));
  });

  test('calculates correct, incorrect, and unanswered counts', () => {
    session.answers[session.questions[0].id] = session.questions[0].correctAnswer;
    session.answers[session.questions[1].id] = (['A', 'B', 'C', 'D'] as const).find(
      (answer) => answer !== session.questions[1].correctAnswer
    ) ?? 'A';
    const correct = getCorrectCount(session);
    const incorrect = getIncorrectCount(session);
    const unanswered = getUnansweredCount(session);
    expect(correct).toBe(1);
    expect(incorrect).toBe(1);
    expect(unanswered).toBe(1);
  });

  test('calculates category performance', () => {
    const performance = getCategoryPerformance(session);
    expect(performance.length).toBeGreaterThan(0);
    performance.forEach((item) => {
      expect(item.total).toBeGreaterThanOrEqual(1);
    });
  });

  test('formats timer and status correctly', () => {
    const future = Date.now() + 3 * 60000;
    const remaining = getTimeRemaining(future);
    expect(remaining.status).toBe('critical');
    expect(formatTimer(remaining.remainingMs)).toMatch(/\d{2}:\d{2}/);
  });
});

describe('Local storage session persistence', () => {
  beforeEach(() => {
    clearExamSession();
    globalThis.localStorage.clear();
  });

  test('saves and loads exam session from localStorage', () => {
    const examSession = createExamSession(generateExam(allQuestions));
    saveExamSession(examSession);
    const loaded = loadExamSession();
    expect(loaded).not.toBeNull();
    expect(loaded?.sessionId).toBe(examSession.sessionId);
    expect(loaded?.questions).toHaveLength(25);
  });
});
