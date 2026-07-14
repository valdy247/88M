import { describe, expect, test } from 'vitest';
import { flashcards, flashcardCategories } from '../data/flashcards';

describe('Flashcard deck', () => {
  test('contains 150 unique flashcards from the submitted batches', () => {
    expect(flashcards).toHaveLength(150);
    expect(new Set(flashcards.map((card) => card.id)).size).toBe(150);
    expect(new Set(flashcards.map((card) => card.question.trim().toLowerCase())).size).toBe(150);
  });

  test('has complete questions, answers, and categories', () => {
    for (const card of flashcards) {
      expect(card.question.trim()).not.toBe('');
      expect(card.answer.trim()).not.toBe('');
      expect(card.category.trim()).not.toBe('');
      expect(flashcardCategories).toContain(card.category);
    }
  });
});
