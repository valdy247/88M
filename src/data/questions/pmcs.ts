import type { Question } from '../../types/question';

export const pmcs: Question[] = [
  {
    id: 'pmcs-01',
    category: 'PMCS',
    difficulty: 'easy',
    question: 'What does PMCS stand for?',
    options: [
      { id: 'A', text: 'Preventive Maintenance Checks and Services' },
      { id: 'B', text: 'Primary Maintenance Control System' },
      { id: 'C', text: 'Personnel Mission and Command Support' },
      { id: 'D', text: 'Planned Mobility and Combat Support' }
    ],
    correctAnswer: 'A',
    explanation: 'PMCS stands for Preventive Maintenance Checks and Services.',
    sourceTopic: 'PMCS'
  },
  {
    id: 'pmcs-02',
    category: 'PMCS',
    difficulty: 'easy',
    question: 'Who is responsible for performing required PMCS checks?',
    options: [
      { id: 'A', text: 'The unit commander only' },
      { id: 'B', text: 'The maintenance officer' },
      { id: 'C', text: 'The operator' },
      { id: 'D', text: 'The driving instructor' }
    ],
    correctAnswer: 'C',
    explanation: 'The operator is responsible for performing required PMCS checks.',
    sourceTopic: 'PMCS'
  },
  {
    id: 'pmcs-03',
    category: 'PMCS',
    difficulty: 'medium',
    question: 'Which PMCS interval is performed before operating equipment?',
    options: [
      { id: 'A', text: 'Weekly' },
      { id: 'B', text: 'Before' },
      { id: 'C', text: 'Monthly' },
      { id: 'D', text: 'After' }
    ],
    correctAnswer: 'B',
    explanation: 'A before check is performed before operating equipment.',
    sourceTopic: 'PMCS'
  },
  {
    id: 'pmcs-04',
    category: 'PMCS',
    difficulty: 'medium',
    question: 'What should the operator do if a deficiency cannot be corrected at the operator level?',
    options: [
      { id: 'A', text: 'Continue operating the equipment' },
      { id: 'B', text: 'Report the fault to maintenance' },
      { id: 'C', text: 'Remove the equipment from service immediately' },
      { id: 'D', text: 'Ignore it if it seems minor' }
    ],
    correctAnswer: 'B',
    explanation: 'The operator must report faults that cannot be corrected at operator level.',
    sourceTopic: 'PMCS'
  },
  {
    id: 'pmcs-05',
    category: 'PMCS',
    difficulty: 'hard',
    question: 'Which statement best describes a warning on a technical manual?',
    options: [
      { id: 'A', text: 'It clarifies an optional procedure' },
      { id: 'B', text: 'It indicates conditions that may cause injury or death' },
      { id: 'C', text: 'It highlights minor maintenance notes' },
      { id: 'D', text: 'It records service intervals only' }
    ],
    correctAnswer: 'B',
    explanation: 'Warnings identify conditions that may cause injury or death.',
    sourceTopic: 'PMCS'
  },
  {
    id: 'pmcs-06',
    category: 'PMCS',
    difficulty: 'medium',
    question: 'Which check should be performed during equipment operation?',
    options: [
      { id: 'A', text: 'After' },
      { id: 'B', text: 'Before' },
      { id: 'C', text: 'During' },
      { id: 'D', text: 'Weekly' }
    ],
    correctAnswer: 'C',
    explanation: 'A during check is performed while operating the equipment.',
    sourceTopic: 'PMCS'
  },
  {
    id: 'pmcs-07',
    category: 'PMCS',
    difficulty: 'easy',
    question: 'What does a note in PMCS documentation usually do?',
    options: [
      { id: 'A', text: 'Present a warning of danger' },
      { id: 'B', text: 'Record a corrective action taken' },
      { id: 'C', text: 'Clarify or emphasize information' },
      { id: 'D', text: 'Indicate equipment status' }
    ],
    correctAnswer: 'C',
    explanation: 'A note clarifies or emphasizes important information.',
    sourceTopic: 'PMCS'
  },
  {
    id: 'pmcs-08',
    category: 'PMCS',
    difficulty: 'medium',
    question: 'What does a Class III leak usually indicate?',
    options: [
      { id: 'A', text: 'Seepage without drops' },
      { id: 'B', text: 'Leakage enough to form drops but not fall' },
      { id: 'C', text: 'Leakage enough for drops to fall' },
      { id: 'D', text: 'An acceptable condition for all equipment' }
    ],
    correctAnswer: 'C',
    explanation: 'Class III leakage is enough for drops to fall and is generally not allowable.',
    sourceTopic: 'PMCS'
  },
  {
    id: 'pmcs-09',
    category: 'PMCS',
    difficulty: 'hard',
    question: 'Which statement is correct about equipment condition during PMCS?',
    options: [
      { id: 'A', text: 'Minor Class III leakage is acceptable' },
      { id: 'B', text: 'Class II leakage forms drops but not enough to fall' },
      { id: 'C', text: 'Class I leakage is enough for drops to fall' },
      { id: 'D', text: 'All leakage is automatically allowed' }
    ],
    correctAnswer: 'B',
    explanation: 'Class II leakage forms drops but not enough for drops to fall.',
    sourceTopic: 'PMCS'
  },
  {
    id: 'pmcs-10',
    category: 'PMCS',
    difficulty: 'easy',
    question: 'What should an operator do when a fault is detected during PMCS?',
    options: [
      { id: 'A', text: 'Record the fault and take corrective action if able' },
      { id: 'B', text: 'Continue operating until maintenance arrives' },
      { id: 'C', text: 'Discard the technical manual' },
      { id: 'D', text: 'Ignore it if the equipment still operates' }
    ],
    correctAnswer: 'A',
    explanation: 'The operator should record the fault and correct it if possible within authorization.',
    sourceTopic: 'PMCS'
  },
  {
    id: 'pmcs-11',
    category: 'PMCS',
    difficulty: 'medium',
    question: 'When operating equipment for the first time, which checks are performed?',
    options: [
      { id: 'A', text: 'After and monthly' },
      { id: 'B', text: 'Before and weekly' },
      { id: 'C', text: 'Daily and annual' },
      { id: 'D', text: 'Only weekly' }
    ],
    correctAnswer: 'B',
    explanation: 'First-time operation requires both before and weekly checks as appropriate.',
    sourceTopic: 'PMCS'
  },
  {
    id: 'pmcs-12',
    category: 'PMCS',
    difficulty: 'hard',
    question: 'What is the operator’s responsibility when a PMCS item cannot be opened or serviced?',
    options: [
      { id: 'A', text: 'Mark it as normal and continue' },
      { id: 'B', text: 'Report the condition and stop if unsafe' },
      { id: 'C', text: 'Operate the equipment at reduced speed' },
      { id: 'D', text: 'Complete a separate dispatch form only' }
    ],
    correctAnswer: 'B',
    explanation: 'The operator must report faults and stop if the equipment is unsafe to operate.',
    sourceTopic: 'PMCS'
  },
  {
    id: 'pmcs-13',
    category: 'PMCS',
    difficulty: 'easy',
    question: 'What is the purpose of preventive maintenance checks and services?',
    options: [
      { id: 'A', text: 'To detect faults and deficiencies early' },
      { id: 'B', text: 'To delay routine servicing' },
      { id: 'C', text: 'To document operator training only' },
      { id: 'D', text: 'To maximize fuel consumption' }
    ],
    correctAnswer: 'A',
    explanation: 'PMCS is intended to detect faults and deficiencies before they become serious problems.',
    sourceTopic: 'PMCS'
  },
  {
    id: 'pmcs-14',
    category: 'PMCS',
    difficulty: 'medium',
    question: 'Which of the following is not a common PMCS interval?',
    options: [
      { id: 'A', text: 'Before' },
      { id: 'B', text: 'After' },
      { id: 'C', text: 'Annual' },
      { id: 'D', text: 'Weekly' }
    ],
    correctAnswer: 'C',
    explanation: 'Annual is not typically listed as a common PMCS interval; before, during, after, weekly, and monthly are.',
    sourceTopic: 'PMCS'
  }
];
