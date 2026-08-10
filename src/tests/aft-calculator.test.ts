import { describe, expect, it } from 'vitest';
import { calculateAftScore, parseAftTime, scoreAftEvent } from '../lib/aft/calculate-score';

describe('AFT calculator', () => {
  it('matches the supplied-table example for age 27 male', () => {
    const result = calculateAftScore({
      age: 27,
      standard: 'male',
      deadlift: 320,
      pushups: 52,
      sdcSeconds: 1 * 60 + 42,
      plankSeconds: 3 * 60 + 40,
      runSeconds: 14 * 60 + 12,
    });

    expect(result.events.map((event) => event.score)).toEqual([95, 93, 92, 100, 97]);
    expect(result.total).toBe(477);
  });

  it('matches the supplied-table example for age 28 male', () => {
    const result = calculateAftScore({
      age: 28,
      standard: 'male',
      deadlift: 300,
      pushups: 44,
      sdcSeconds: 1 * 60 + 44,
      plankSeconds: 3 * 60 + 40,
      runSeconds: 17 * 60 + 20,
    });

    expect(result.events.map((event) => event.score)).toEqual([91, 86, 90, 100, 80]);
    expect(result.total).toBe(447);
  });

  it('matches the supplied-table example for age 24 male', () => {
    const result = calculateAftScore({
      age: 24,
      standard: 'male',
      deadlift: 240,
      pushups: 53,
      sdcSeconds: 1 * 60 + 50,
      plankSeconds: 3 * 60 + 40,
      runSeconds: 14 * 60 + 20,
    });

    expect(result.events.map((event) => event.score)).toEqual([79, 95, 83, 100, 96]);
    expect(result.total).toBe(453);
  });

  it('matches the female 17-21 maximum thresholds from the supplied table', () => {
    const result = calculateAftScore({
      age: 20,
      standard: 'female',
      deadlift: 220,
      pushups: 53,
      sdcSeconds: 1 * 60 + 55,
      plankSeconds: 3 * 60 + 40,
      runSeconds: 16 * 60,
    });

    expect(result.events.map((event) => event.score)).toEqual([100, 100, 100, 100, 100]);
    expect(result.total).toBe(500);
  });

  it('skips official dash rows instead of inventing intermediate scores', () => {
    expect(scoreAftEvent('deadlift', 28, 'male', 325)).toBe(95);
  });

  it('uses the next lower official point threshold when a raw result falls between rows', () => {
    expect(scoreAftEvent('sdc', 28, 'male', 1 * 60 + 44)).toBe(90);
  });

  it('parses MM:SS strictly', () => {
    expect(parseAftTime('3:40')).toBe(220);
    expect(parseAftTime('14:20')).toBe(860);
    expect(parseAftTime('1:60')).toBeNull();
    expect(parseAftTime('1400')).toBeNull();
  });
});
