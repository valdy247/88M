import { accidentForms } from './accident-forms';
import { da5988e } from './da-5988e';
import { dispatchProcedures } from './dispatch';
import { groundGuides } from './ground-guides';
import { handArmSignals } from './hand-arm-signals';
import { pmcs } from './pmcs';
import { radioProcedures } from './radio-procedures';
import { saluteReport } from './salute';
import { stripMaps } from './strip-maps';
import { technicalManuals } from './technical-manuals';
import type { Question } from '../../types/question';

export const allQuestions: Question[] = [
  ...radioProcedures,
  ...stripMaps,
  ...saluteReport,
  ...accidentForms,
  ...pmcs,
  ...da5988e,
  ...dispatchProcedures,
  ...technicalManuals,
  ...groundGuides,
  ...handArmSignals
];

export const questionCategories = {
  'Radio Procedures': radioProcedures,
  'Strip Maps': stripMaps,
  'SALUTE Report': saluteReport,
  'Accident Forms': accidentForms,
  'PMCS': pmcs,
  'DA Form 5988-E': da5988e,
  'Dispatch Procedures': dispatchProcedures,
  'Technical Manuals': technicalManuals,
  'Ground Guide Procedures': groundGuides,
  'Hand and Arm Signals': handArmSignals
} as const;
