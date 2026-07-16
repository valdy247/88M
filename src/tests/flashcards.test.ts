import { describe, expect, test } from 'vitest';
import { flashcards, flashcardCategories } from '../data/flashcards';
import { stripMapSymbolCards } from '../data/strip-map-symbols';

describe('Flashcard deck', () => {
  test('contains all 200 unique flashcards', () => {
    expect(flashcards).toHaveLength(200);
    expect(new Set(flashcards.map((card) => card.id)).size).toBe(200);
    expect(new Set(flashcards.map((card) => card.question.trim().toLowerCase())).size).toBe(200);
    expect(flashcards.map((card) => card.id)).toEqual(
      Array.from({ length: 200 }, (_, index) => `fc-${String(index + 1).padStart(3, '0')}`)
    );
  });

  test('has complete questions, answers, and categories', () => {
    for (const card of flashcards) {
      expect(card.question.trim()).not.toBe('');
      expect(card.answer.trim()).not.toBe('');
      expect(card.category.trim()).not.toBe('');
      expect(flashcardCategories).toContain(card.category);
    }
  });

  test('contains a complete visual strip-map symbol deck', () => {
    expect(stripMapSymbolCards).toHaveLength(23);
    expect(new Set(stripMapSymbolCards.map((card) => card.id)).size).toBe(23);
    expect(new Set(stripMapSymbolCards.map((card) => card.name)).size).toBe(23);
  });
});
