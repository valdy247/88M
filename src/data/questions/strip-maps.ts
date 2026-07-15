import type { Question } from '../../types/question';

export const stripMaps: Question[] = [
  {
    id: 'strip-01',
    category: 'Strip Maps',
    difficulty: 'easy',
    question: 'What is the primary purpose of a strip map?',
    options: [
      { id: 'A', text: 'To record field maintenance checks' },
      { id: 'B', text: 'To sketch a route with key information' },
      { id: 'C', text: 'To show enemy positions in detail' },
      { id: 'D', text: 'To display unit command structure' }
    ],
    correctAnswer: 'B',
    explanation: 'A strip map is a sketch of a route that includes key route information.',
    sourceTopic: 'Strip Maps'
  },
  {
    id: 'strip-02',
    category: 'Strip Maps',
    difficulty: 'easy',
    question: 'Which item is commonly included on a strip map?',
    options: [
      { id: 'A', text: 'Driver medical history' },
      { id: 'B', text: 'Route number' },
      { id: 'C', text: 'Weapon serial numbers' },
      { id: 'D', text: 'Radio frequency code words' }
    ],
    correctAnswer: 'B',
    explanation: 'Strip maps often include a route number to identify the planned path.',
    sourceTopic: 'Strip Maps'
  },
  {
    id: 'strip-03',
    category: 'Strip Maps',
    difficulty: 'medium',
    question: 'What is a checkpoint on a strip map?',
    options: [
      { id: 'A', text: 'A point used as a reference or control point' },
      { id: 'B', text: 'A station for refueling only' },
      { id: 'C', text: 'The final destination of a route' },
      { id: 'D', text: 'A list of required equipment' }
    ],
    correctAnswer: 'A',
    explanation: 'A checkpoint is a predetermined reference point used for navigation and control.',
    sourceTopic: 'Strip Maps'
  },
  {
    id: 'strip-04',
    category: 'Strip Maps',
    difficulty: 'medium',
    question: 'Which feature may be shown on a strip map to help follow the route?',
    options: [
      { id: 'A', text: 'Equipment serial numbers' },
      { id: 'B', text: 'Landmarks and distances' },
      { id: 'C', text: 'Individual service records' },
      { id: 'D', text: 'Emergency medical procedures' }
    ],
    correctAnswer: 'B',
    explanation: 'Landmarks and distances help the user follow the route depicted on a strip map.',
    sourceTopic: 'Strip Maps'
  },
  {
    id: 'strip-05',
    category: 'Strip Maps',
    difficulty: 'hard',
    question: 'How should a strip map indicate direction of movement?',
    options: [
      { id: 'A', text: 'By including a directional indicator or north arrow' },
      { id: 'B', text: 'By labeling enemy positions only' },
      { id: 'C', text: 'By using a heavy black border around the route' },
      { id: 'D', text: 'By writing the route number in large text' }
    ],
    correctAnswer: 'A',
    explanation: 'Strip maps should show a directional indicator or north arrow to clarify movement.',
    sourceTopic: 'Strip Maps'
  },
  {
    id: 'strip-06',
    category: 'Strip Maps',
    difficulty: 'easy',
    question: 'Which term describes the starting point of a route on a strip map?',
    options: [
      { id: 'A', text: 'Release Point' },
      { id: 'B', text: 'Start Point' },
      { id: 'C', text: 'Checkpoint' },
      { id: 'D', text: 'Halt Area' }
    ],
    correctAnswer: 'B',
    explanation: 'The start point is the beginning of the route on a strip map.',
    sourceTopic: 'Strip Maps'
  },
  {
    id: 'strip-07',
    category: 'Strip Maps',
    difficulty: 'medium',
    question: 'What does “release point” mean on a strip map?',
    options: [
      { id: 'A', text: 'The area where elements are released from convoy control' },
      { id: 'B', text: 'The first fuel stop on a route' },
      { id: 'C', text: 'The destination of the movement' },
      { id: 'D', text: 'The point where the map is no longer needed' }
    ],
    correctAnswer: 'A',
    explanation: 'A release point is where elements are released from convoy control.',
    sourceTopic: 'Strip Maps'
  },
  {
    id: 'strip-08',
    category: 'Strip Maps',
    difficulty: 'hard',
    question: 'Which statement is not true for a strip map?',
    options: [
      { id: 'A', text: 'It shows landmarks' },
      { id: 'B', text: 'It must be drawn to scale' },
      { id: 'C', text: 'It shows North orientation' },
      { id: 'D', text: 'It lists the distance between points' }
    ],
    correctAnswer: 'B',
    explanation: 'A strip map should show useful route information, but it is not required to be drawn to scale.',
    sourceTopic: 'Strip Maps'
  },
  {
    id: 'strip-09',
    category: 'Strip Maps',
    difficulty: 'medium',
    question: 'Which feature is appropriate to include on a strip map for route navigation?',
    options: [
      { id: 'A', text: 'A detailed equipment list' },
      { id: 'B', text: 'Major bridges and crossings' },
      { id: 'C', text: 'The names of every soldier' },
      { id: 'D', text: 'A list of standard operating procedures' }
    ],
    correctAnswer: 'B',
    explanation: 'Bridges and crossings are useful features on a strip map for navigation.',
    sourceTopic: 'Strip Maps'
  },
  {
    id: 'strip-10',
    category: 'Strip Maps',
    difficulty: 'easy',
    question: 'What is a main supply route on a strip map?',
    options: [
      { id: 'A', text: 'A primary route used to support operations' },
      { id: 'B', text: 'A route only used during training' },
      { id: 'C', text: 'A route that bypasses all checkpoints' },
      { id: 'D', text: 'A path drawn to scale' }
    ],
    correctAnswer: 'A',
    explanation: 'A main supply route is a primary route used to support operations.',
    sourceTopic: 'Strip Maps'
  },
  {
    id: 'strip-11',
    category: 'Strip Maps',
    difficulty: 'hard',
    question: 'Which item on a strip map helps identify unique locations along the route?',
    options: [
      { id: 'A', text: 'Unit commander names' },
      { id: 'B', text: 'Landmarks and bridges' },
      { id: 'C', text: 'Serial numbers of vehicles' },
      { id: 'D', text: 'Radio call signs' }
    ],
    correctAnswer: 'B',
    explanation: 'Landmarks and bridges help identify locations and route features on the map.',
    sourceTopic: 'Strip Maps'
  },
  {
    id: 'strip-12',
    category: 'Strip Maps',
    difficulty: 'easy',
    question: 'What should a strip map show to help orient the user?',
    options: [
      { id: 'A', text: 'Distance between points' },
      { id: 'B', text: 'Unit insignia' },
      { id: 'C', text: 'Personal names' },
      { id: 'D', text: 'Vehicle load weights' }
    ],
    correctAnswer: 'A',
    explanation: 'Distance between points is a useful orientation detail on a strip map.',
    sourceTopic: 'Strip Maps'
  },
  {
    id: 'strip-13',
    category: 'Strip Maps',
    difficulty: 'medium',
    question: 'On a strip map, a solid-line road indicates what type of road?',
    options: [
      { id: 'A', text: 'Secondary road' },
      { id: 'B', text: 'Primary road' },
      { id: 'C', text: 'Dirt road' },
      { id: 'D', text: 'Railroad' }
    ],
    correctAnswer: 'B',
    explanation: 'In the provided strip-map material, a solid-line road represents a primary road.',
    sourceTopic: 'Strip Maps'
  }
];
