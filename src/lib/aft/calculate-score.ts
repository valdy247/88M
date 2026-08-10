import {
  AFT_AGE_BANDS,
  getAftScoreRows,
  getAftThreshold,
  type AftEventKey,
  type AftStandard,
} from '../../data/aft';

export type AftInput = {
  age: number;
  standard: AftStandard;
  deadlift: number;
  pushups: number;
  sdcSeconds: number;
  plankSeconds: number;
  runSeconds: number;
};

export type AftEventScore = {
  key: AftEventKey;
  label: string;
  score: number;
};

export type AftScoreResult = {
  total: number;
  ageBand: string;
  events: AftEventScore[];
};

const HIGHER_IS_BETTER = new Set<AftEventKey>(['deadlift', 'pushups', 'plank']);

export function getAftAgeBandIndex(age: number): number {
  if (!Number.isInteger(age) || age < 17) {
    throw new Error('Age must be a whole number of 17 or older.');
  }

  return AFT_AGE_BANDS.findIndex((band) => age <= band.maxAge);
}

export function parseAftTime(value: string): number | null {
  const trimmed = value.trim();
  const match = /^(\d{1,2}):([0-5]\d)$/.exec(trimmed);
  if (!match) return null;

  const minutes = Number(match[1]);
  const seconds = Number(match[2]);
  return minutes * 60 + seconds;
}

export function formatAftTime(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

export function scoreAftEvent(
  event: AftEventKey,
  age: number,
  standard: AftStandard,
  rawValue: number,
): number {
  if (!Number.isFinite(rawValue) || rawValue < 0) {
    throw new Error('Event result must be a non-negative number.');
  }

  const ageBandIndex = getAftAgeBandIndex(age);
  const sexOffset = standard === 'female' ? 1 : 0;
  const valueColumn = ageBandIndex * 2 + sexOffset;
  const higherIsBetter = HIGHER_IS_BETTER.has(event);
  const scoreRows = getAftScoreRows(event);

  for (let rowIndex = 0; rowIndex < scoreRows.length; rowIndex += 1) {
    const threshold = getAftThreshold(event, rowIndex, valueColumn);
    if (threshold === null) continue;

    const qualifies = higherIsBetter ? rawValue >= threshold : rawValue <= threshold;
    if (qualifies) return scoreRows[rowIndex];
  }

  return 0;
}

export function calculateAftScore(input: AftInput): AftScoreResult {
  const events: AftEventScore[] = [
    {
      key: 'deadlift',
      label: 'Deadlift',
      score: scoreAftEvent('deadlift', input.age, input.standard, input.deadlift),
    },
    {
      key: 'pushups',
      label: 'Push-ups',
      score: scoreAftEvent('pushups', input.age, input.standard, input.pushups),
    },
    {
      key: 'sdc',
      label: 'SDC',
      score: scoreAftEvent('sdc', input.age, input.standard, input.sdcSeconds),
    },
    {
      key: 'plank',
      label: 'Plank',
      score: scoreAftEvent('plank', input.age, input.standard, input.plankSeconds),
    },
    {
      key: 'run',
      label: '2-Mile',
      score: scoreAftEvent('run', input.age, input.standard, input.runSeconds),
    },
  ];

  const ageBandIndex = getAftAgeBandIndex(input.age);

  return {
    total: events.reduce((sum, event) => sum + event.score, 0),
    ageBand: AFT_AGE_BANDS[ageBandIndex].label,
    events,
  };
}
