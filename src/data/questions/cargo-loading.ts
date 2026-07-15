import type { Question } from '../../types/question';

export const cargoLoadingQuestions: Question[] = [
  {
    id: 'cargo-01',
    category: 'Cargo Loading',
    difficulty: 'medium',
    question: 'Where should the heaviest items be placed on a vehicle platform?',
    options: [
      { id: 'A', text: 'On top of the lighter cargo' },
      { id: 'B', text: 'At the front regardless of weight distribution' },
      { id: 'C', text: 'On the bottom' },
      { id: 'D', text: 'At the rear edge of the platform' }
    ],
    correctAnswer: 'C',
    explanation: 'The heaviest items belong on the bottom to help maintain a low center of gravity and cargo stability.',
    sourceTopic: 'Cargo Loading'
  }
];
