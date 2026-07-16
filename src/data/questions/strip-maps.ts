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
  },
  {
    id: 'strip-14',
    category: 'Strip Maps',
    difficulty: 'medium',
    question: 'In the strip-map road convention used for this course, what indicates a dirt road?',
    options: [
      { id: 'A', text: 'A single solid line' },
      { id: 'B', text: 'Two parallel dotted lines' },
      { id: 'C', text: 'A wavy line' },
      { id: 'D', text: 'A red line' }
    ],
    correctAnswer: 'B',
    explanation: 'In the course strip-map convention, two parallel dotted lines identify a dirt road.',
    sourceTopic: 'Strip Maps'
  },
  {
    id: 'strip-15',
    category: 'Strip Maps',
    difficulty: 'medium',
    question: 'What does a circle containing a unit designation identify on a strip map?',
    options: [
      { id: 'A', text: 'Assembly area' },
      { id: 'B', text: 'Release point' },
      { id: 'C', text: 'Road crossing' },
      { id: 'D', text: 'Bridge classification' }
    ],
    correctAnswer: 'A',
    explanation: 'The course strip-map legend uses a circle containing the unit designation to identify an assembly area.',
    sourceTopic: 'Strip Map Symbols'
  },
  {
    id: 'strip-16',
    category: 'Strip Maps',
    difficulty: 'medium',
    question: 'How are halt or rest areas commonly identified on the course strip map?',
    options: [
      { id: 'A', text: 'As designated checkpoints' },
      { id: 'B', text: 'As release points only' },
      { id: 'C', text: 'With a railroad symbol' },
      { id: 'D', text: 'With an assembly-area circle' }
    ],
    correctAnswer: 'A',
    explanation: 'The legend notes that halt or rest areas are often designated as checkpoints.',
    sourceTopic: 'Strip Map Symbols'
  },
  {
    id: 'strip-17',
    category: 'Strip Maps',
    difficulty: 'medium',
    question: 'Which road type is represented by the alternating black-and-white road symbol in the course strip-map legend?',
    options: [
      { id: 'A', text: 'Primary road' },
      { id: 'B', text: 'Secondary road' },
      { id: 'C', text: 'Dirt road' },
      { id: 'D', text: 'Trail' }
    ],
    correctAnswer: 'B',
    explanation: 'The alternating black-and-white road symbol is labeled Secondary road in the supplied legend.',
    sourceTopic: 'Strip Map Road Symbols'
  },
  {
    id: 'strip-18',
    category: 'Strip Maps',
    difficulty: 'medium',
    question: 'What do two continuous parallel lines identify in the course strip-map road legend?',
    options: [
      { id: 'A', text: 'Other surfaced road' },
      { id: 'B', text: 'Dirt road' },
      { id: 'C', text: 'Single-track railroad' },
      { id: 'D', text: 'Impassable road section' }
    ],
    correctAnswer: 'A',
    explanation: 'Two continuous parallel lines identify an other surfaced road in the supplied strip-map legend.',
    sourceTopic: 'Strip Map Road Symbols'
  },
  {
    id: 'strip-19',
    category: 'Strip Maps',
    difficulty: 'medium',
    question: 'What does a single dotted line represent in the course strip-map legend?',
    options: [
      { id: 'A', text: 'Trail' },
      { id: 'B', text: 'Primary road' },
      { id: 'C', text: 'Railroad bridge' },
      { id: 'D', text: 'Main supply route' }
    ],
    correctAnswer: 'A',
    explanation: 'A single dotted line is the symbol for a trail in the supplied strip-map legend.',
    sourceTopic: 'Strip Map Road Symbols'
  },
  {
    id: 'strip-20',
    category: 'Strip Maps',
    difficulty: 'hard',
    question: 'What do diagonal obstruction marks drawn across a road segment indicate on a strip map?',
    options: [
      { id: 'A', text: 'An impassable section of road' },
      { id: 'B', text: 'A halt or rest area' },
      { id: 'C', text: 'A secondary road' },
      { id: 'D', text: 'A change in route number' }
    ],
    correctAnswer: 'A',
    explanation: 'Diagonal obstruction marks across the route identify an impassable section of road.',
    sourceTopic: 'Strip Map Road Symbols'
  },
  {
    id: 'strip-21',
    category: 'Strip Maps',
    difficulty: 'hard',
    question: 'Which railroad details can the strip-map legend distinguish?',
    options: [
      { id: 'A', text: 'Single or double track and broad or narrow gauge' },
      { id: 'B', text: 'Passenger or freight schedules only' },
      { id: 'C', text: 'Electric or diesel locomotives only' },
      { id: 'D', text: 'Military or civilian ownership only' }
    ],
    correctAnswer: 'A',
    explanation: 'The legend includes separate symbols for single-track broad gauge, single-track narrow gauge, and double-track standard gauge railroads.',
    sourceTopic: 'Strip Map Railroad Symbols'
  },
  {
    id: 'strip-22',
    category: 'Strip Maps',
    difficulty: 'hard',
    question: 'What relationship can a strip-map crossing symbol show between two routes?',
    options: [
      { id: 'A', text: 'Whether one passes above, below, or at grade' },
      { id: 'B', text: 'Which route has the higher speed limit' },
      { id: 'C', text: 'Which route was built first' },
      { id: 'D', text: 'Whether both routes have checkpoints' }
    ],
    correctAnswer: 'A',
    explanation: 'Crossing symbols can indicate that one route passes above, below, or at grade with the other route.',
    sourceTopic: 'Strip Map Crossing Symbols'
  },
  {
    id: 'strip-23',
    category: 'Strip Maps',
    difficulty: 'medium',
    question: 'Which two bridge types are distinguished in the supplied strip-map legend?',
    options: [
      { id: 'A', text: 'Highway bridge and railroad bridge' },
      { id: 'B', text: 'Temporary bridge and permanent bridge' },
      { id: 'C', text: 'One-way bridge and two-way bridge' },
      { id: 'D', text: 'Wood bridge and steel bridge' }
    ],
    correctAnswer: 'A',
    explanation: 'The bridge symbol is identified as either a highway bridge or a railroad bridge.',
    sourceTopic: 'Strip Map Bridge Symbols'
  }
];
