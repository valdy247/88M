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
  }
];
