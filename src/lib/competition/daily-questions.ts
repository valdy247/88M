import { allQuestions } from '../../data/questions';

function seedFromDate(date: string) {
  return Array.from(date).reduce((seed, character) => Math.imul(seed ^ character.charCodeAt(0), 16777619), 2166136261) >>> 0;
}

function seededShuffle<T>(items: T[], seed: number) {
  const result = [...items];
  let state = seed || 1;
  const random = () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

export function competitionDate() {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(new Date());
}

export function getDailyCompetitionQuestions(date = competitionDate()) {
  const seed = seedFromDate(date);
  const hard = seededShuffle(allQuestions.filter((question) => question.difficulty === 'hard'), seed);
  const medium = seededShuffle(allQuestions.filter((question) => question.difficulty === 'medium'), seed ^ 0x9e3779b9);
  return seededShuffle([...hard, ...medium.slice(0, 50 - hard.length)], seed ^ 0x85ebca6b);
}

export type CompetitionQuestion = {
  id: string;
  category: string;
  question: string;
  options: { id: 'A' | 'B' | 'C' | 'D'; text: string }[];
};

export function getPublicCompetitionQuestions(date = competitionDate()): CompetitionQuestion[] {
  return getDailyCompetitionQuestions(date).map(({ id, category, question, options }) => ({ id, category, question, options }));
}
