import type { Question } from '../../types/question';

export const vehicleSpecifications: Question[] = [
  {
    id: 'vehicle-spec-01',
    category: 'Technical Manuals',
    difficulty: 'medium',
    question: 'What is the maximum water-fording depth for the M1120 HEMTT LHS?',
    options: [
      { id: 'A', text: '12 inches' },
      { id: 'B', text: '24 inches' },
      { id: 'C', text: '48 inches' },
      { id: 'D', text: '60 inches' }
    ],
    correctAnswer: 'C',
    explanation: 'The M1120 HEMTT LHS is rated to ford water up to 48 inches deep under the prescribed operating conditions.',
    sourceTopic: 'M1120 HEMTT LHS'
  },
  {
    id: 'vehicle-spec-02',
    category: 'Technical Manuals',
    difficulty: 'medium',
    question: 'What is the approximate cruising range of the M915A3/A5 truck tractor?',
    options: [
      { id: 'A', text: '200 miles' },
      { id: 'B', text: '300 miles' },
      { id: 'C', text: '400 miles' },
      { id: 'D', text: '500 miles' }
    ],
    correctAnswer: 'C',
    explanation: 'The M915A3/A5 study specification lists an approximate cruising range of 400 miles.',
    sourceTopic: 'M915A3/A5 Vehicle Specifications'
  }
];
