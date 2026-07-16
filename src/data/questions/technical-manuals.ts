import type { Question } from '../../types/question';

export const technicalManuals: Question[] = [
  {
    id: 'tm-01',
    category: 'Technical Manuals',
    difficulty: 'easy',
    question: 'What do technical manuals provide for equipment?',
    options: [
      { id: 'A', text: 'Operating instructions and maintenance guidance' },
      { id: 'B', text: 'Personal promotional material' },
      { id: 'C', text: 'Unit mission orders' },
      { id: 'D', text: 'Radio frequency codes' }
    ],
    correctAnswer: 'A',
    explanation: 'Technical manuals provide operating instructions, characteristics, and maintenance information.',
    sourceTopic: 'Technical Manuals'
  },
  {
    id: 'tm-02',
    category: 'Technical Manuals',
    difficulty: 'medium',
    question: 'What should operators follow for specific equipment procedures?',
    options: [
      { id: 'A', text: 'Current authorized technical manual' },
      { id: 'B', text: 'Any older study guide' },
      { id: 'C', text: 'Verbal instructions only' },
      { id: 'D', text: 'A familiar radio transmission' }
    ],
    correctAnswer: 'A',
    explanation: 'Operators must follow the current authorized technical manual for the specific equipment.',
    sourceTopic: 'Technical Manuals'
  },
  {
    id: 'tm-03',
    category: 'Technical Manuals',
    difficulty: 'medium',
    question: 'What is a technical manual number used for?',
    options: [
      { id: 'A', text: 'To identify the publication and subject' },
      { id: 'B', text: 'To label completed training tests' },
      { id: 'C', text: 'To log fuel usage' },
      { id: 'D', text: 'To code encryption keys' }
    ],
    correctAnswer: 'A',
    explanation: 'A technical manual number identifies the publication and the equipment or subject it covers.',
    sourceTopic: 'Technical Manuals'
  },
  {
    id: 'tm-04',
    category: 'Technical Manuals',
    difficulty: 'hard',
    question: 'What is the distinction between warnings, cautions, and notes in a technical manual?',
    options: [
      { id: 'A', text: 'Warnings address injury risks, cautions protect equipment, notes clarify information' },
      { id: 'B', text: 'Warnings are optional, cautions are mandatory, notes are irrelevant' },
      { id: 'C', text: 'Notes indicate danger, cautions indicate schedules, warnings indicate budgets' },
      { id: 'D', text: 'All three are interchangeable terms' }
    ],
    correctAnswer: 'A',
    explanation: 'Warnings warn of injury or death, cautions warn of equipment damage, and notes clarify or emphasize points.',
    sourceTopic: 'Technical Manuals'
  },
  {
    id: 'tm-05',
    category: 'Technical Manuals',
    difficulty: 'medium',
    question: 'What type of information is commonly organized by intervals and item numbers in manuals?',
    options: [
      { id: 'A', text: 'Maintenance and troubleshooting instructions' },
      { id: 'B', text: 'Personnel awards' },
      { id: 'C', text: 'Radio net assignments' },
      { id: 'D', text: 'Mission command messages' }
    ],
    correctAnswer: 'A',
    explanation: 'Maintenance and troubleshooting information is commonly organized by intervals and item numbers.',
    sourceTopic: 'Technical Manuals'
  },
  {
    id: 'tm-06',
    category: 'Technical Manuals',
    difficulty: 'hard',
    question: 'Which statement is true about chapter numbers in technical manuals?',
    options: [
      { id: 'A', text: 'A chapter number should be hard-coded without checking the manual' },
      { id: 'B', text: 'Chapter numbers vary by manual and should be referenced from the correct publication' },
      { id: 'C', text: 'Every manual uses the same chapter number for PMCS' },
      { id: 'D', text: 'Chapter numbers are only for historical reference' }
    ],
    correctAnswer: 'B',
    explanation: 'Manual chapter numbers vary and operators should use the current authorized manual.',
    sourceTopic: 'Technical Manuals'
  },
  {
    id: 'tm-07',
    category: 'Technical Manuals',
    difficulty: 'medium',
    question: 'In the example TM number 9-2320-345-10, what does the first number “9” identify?',
    options: [
      { id: 'A', text: 'The Ordnance branch or subject area' },
      { id: 'B', text: 'The vehicle model year' },
      { id: 'C', text: 'The number of maintenance chapters' },
      { id: 'D', text: 'The vehicle payload class' }
    ],
    correctAnswer: 'A',
    explanation: 'In the Red Book numbering example, 9 identifies the Ordnance branch or subject area.',
    sourceTopic: 'Technical Manual Numbering'
  },
  {
    id: 'tm-08',
    category: 'Technical Manuals',
    difficulty: 'medium',
    question: 'In TM 9-2320-345-10, what does “2320” identify?',
    options: [
      { id: 'A', text: 'The Army supply category for engine-powered wheeled vehicles' },
      { id: 'B', text: 'The operator maintenance level' },
      { id: 'C', text: 'The chapter containing PMCS' },
      { id: 'D', text: 'The vehicle serial number' }
    ],
    correctAnswer: 'A',
    explanation: 'The number 2320 is the supply category for engine-powered wheeled vehicles in the supplied numbering example.',
    sourceTopic: 'Technical Manual Numbering'
  },
  {
    id: 'tm-09',
    category: 'Technical Manuals',
    difficulty: 'medium',
    question: 'What does “345” represent in the example TM 9-2320-345-10?',
    options: [
      { id: 'A', text: 'The designator for the specific vehicle model' },
      { id: 'B', text: 'The maximum vehicle speed' },
      { id: 'C', text: 'The supply branch' },
      { id: 'D', text: 'The operator maintenance level' }
    ],
    correctAnswer: 'A',
    explanation: 'In the supplied example, 345 is the designator assigned to the specific vehicle model.',
    sourceTopic: 'Technical Manual Numbering'
  },
  {
    id: 'tm-10',
    category: 'Technical Manuals',
    difficulty: 'medium',
    question: 'What does the final “10” indicate in TM 9-2320-345-10?',
    options: [
      { id: 'A', text: 'Operator-level maintenance instructions' },
      { id: 'B', text: 'Ten authorized vehicle operators' },
      { id: 'C', text: 'A ten-year service interval' },
      { id: 'D', text: 'The tenth model in the vehicle series' }
    ],
    correctAnswer: 'A',
    explanation: 'The final 10 identifies an operator-level technical manual.',
    sourceTopic: 'Technical Manual Numbering'
  },
  {
    id: 'tm-11',
    category: 'Technical Manuals',
    difficulty: 'hard',
    question: 'For the specific manual layout shown in the Red Book example, which chapter contains PMCS?',
    options: [
      { id: 'A', text: 'Chapter 2' },
      { id: 'B', text: 'Chapter 3' },
      { id: 'C', text: 'Chapter 4' },
      { id: 'D', text: 'Chapter 6' }
    ],
    correctAnswer: 'C',
    explanation: 'The supplied example places Preventive Maintenance Checks and Services in Chapter 4; chapter locations must still be verified in the applicable current TM.',
    sourceTopic: 'Technical Manual Chapters'
  }
];
