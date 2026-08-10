import { DEADLIFT_PACKED, DEADLIFT_SCORES } from './deadlift';
import { PUSHUPS_PACKED, PUSHUPS_SCORES } from './pushups';
import { SDC_PACKED, SDC_SCORES } from './sdc';
import { PLANK_PACKED, PLANK_SCORES } from './plank';
import { RUN_PACKED, RUN_SCORES } from './run';

export type AftEventKey = 'deadlift' | 'pushups' | 'sdc' | 'plank' | 'run';
export type AftStandard = 'male' | 'female';

export const AFT_AGE_BANDS = [
  { label: '17-21', maxAge: 21 },
  { label: '22-26', maxAge: 26 },
  { label: '27-31', maxAge: 31 },
  { label: '32-36', maxAge: 36 },
  { label: '37-41', maxAge: 41 },
  { label: '42-46', maxAge: 46 },
  { label: '47-51', maxAge: 51 },
  { label: '52-56', maxAge: 56 },
  { label: '57-61', maxAge: 61 },
  { label: 'Over 62', maxAge: Number.POSITIVE_INFINITY },
] as const;

const PACKED_TABLES = {
  deadlift: DEADLIFT_PACKED,
  pushups: PUSHUPS_PACKED,
  sdc: SDC_PACKED,
  plank: PLANK_PACKED,
  run: RUN_PACKED,
} as const;

const SCORE_ROWS: Record<AftEventKey, readonly number[]> = {
  deadlift: DEADLIFT_SCORES,
  pushups: PUSHUPS_SCORES,
  sdc: SDC_SCORES,
  plank: PLANK_SCORES,
  run: RUN_SCORES,
};

const COLUMN_COUNT = 20;
const NULL_SENTINEL = 65535;

function decodeTable(encoded: string): Uint16Array {
  const binary = globalThis.atob(encoded);
  const values = new Uint16Array(binary.length / 2);

  for (let index = 0; index < values.length; index += 1) {
    const low = binary.charCodeAt(index * 2);
    const high = binary.charCodeAt(index * 2 + 1);
    values[index] = low | (high << 8);
  }

  return values;
}

const DECODED_TABLES: Record<AftEventKey, Uint16Array> = {
  deadlift: decodeTable(PACKED_TABLES.deadlift),
  pushups: decodeTable(PACKED_TABLES.pushups),
  sdc: decodeTable(PACKED_TABLES.sdc),
  plank: decodeTable(PACKED_TABLES.plank),
  run: decodeTable(PACKED_TABLES.run),
};

export function getAftScoreRows(event: AftEventKey): readonly number[] {
  return SCORE_ROWS[event];
}

export function getAftThreshold(
  event: AftEventKey,
  rowIndex: number,
  valueColumn: number,
): number | null {
  const value = DECODED_TABLES[event][rowIndex * COLUMN_COUNT + valueColumn];
  return value === NULL_SENTINEL ? null : value;
}
