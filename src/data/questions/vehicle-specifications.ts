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
  },
  {
    id: 'vehicle-spec-03',
    category: 'Technical Manuals',
    difficulty: 'medium',
    question: 'Under the stated M1120 HEMTT LHS fording limit, how long may the vehicle remain in 48-inch-deep water?',
    options: [
      { id: 'A', text: '1 minute' },
      { id: 'B', text: '5 minutes' },
      { id: 'C', text: '15 minutes' },
      { id: 'D', text: 'There is no time limit' }
    ],
    correctAnswer: 'B',
    explanation: 'The M1120 study specification pairs the 48-inch fording depth with a maximum duration of 5 minutes.',
    sourceTopic: 'M1120 HEMTT LHS Fording'
  },
  {
    id: 'vehicle-spec-04',
    category: 'Technical Manuals',
    difficulty: 'medium',
    question: 'Which range-and-fuel combination is associated with normal M1120 HEMTT LHS operation?',
    options: [
      { id: 'A', text: 'Approximately 150 miles using 75 gallons' },
      { id: 'B', text: 'Approximately 200 miles using 100 gallons' },
      { id: 'C', text: 'Approximately 300 miles using 154 gallons' },
      { id: 'D', text: 'Approximately 400 miles using 200 gallons' }
    ],
    correctAnswer: 'C',
    explanation: 'The M1120 study specification lists a normal operating range of approximately 300 miles based on about 154 gallons of fuel.',
    sourceTopic: 'M1120 HEMTT LHS Operating Range'
  },
  {
    id: 'vehicle-spec-05',
    category: 'Technical Manuals',
    difficulty: 'medium',
    question: 'What does an illuminated amber low-fuel indicator on the M1120 HEMTT LHS mean?',
    options: [
      { id: 'A', text: 'Fuel quantity is below approximately one-eighth of a full tank' },
      { id: 'B', text: 'Water has entered the fuel tank' },
      { id: 'C', text: 'The fuel tank is completely empty' },
      { id: 'D', text: 'The engine is using the reserve hydraulic supply' }
    ],
    correctAnswer: 'A',
    explanation: 'The amber low-fuel indicator illuminates when fuel quantity falls below approximately one-eighth of a full tank.',
    sourceTopic: 'M1120 HEMTT LHS Indicators'
  },
  {
    id: 'vehicle-spec-06',
    category: 'Technical Manuals',
    difficulty: 'medium',
    question: 'What is the function of the M1120 fuel/water separator?',
    options: [
      { id: 'A', text: 'Remove water from the fuel before it reaches the engine' },
      { id: 'B', text: 'Cool the transmission oil during loading operations' },
      { id: 'C', text: 'Store reserve hydraulic fluid for the hook arm' },
      { id: 'D', text: 'Measure the vehicle payload' }
    ],
    correctAnswer: 'A',
    explanation: 'The fuel/water separator serves as a primary fuel filter and removes water before fuel enters the engine.',
    sourceTopic: 'M1120 HEMTT LHS Fuel System'
  },
  {
    id: 'vehicle-spec-07',
    category: 'Technical Manuals',
    difficulty: 'medium',
    question: 'What is the primary purpose of the M1120 hydraulic reservoir?',
    options: [
      { id: 'A', text: 'Store, cool, and filter oil used by the hydraulic and power-steering systems' },
      { id: 'B', text: 'Store engine coolant for deep-water fording' },
      { id: 'C', text: 'Supply compressed air to the service brakes' },
      { id: 'D', text: 'Collect water removed from the fuel tank' }
    ],
    correctAnswer: 'A',
    explanation: 'The hydraulic reservoir stores, cools, and filters the oil used by the hydraulic and power-steering systems.',
    sourceTopic: 'M1120 HEMTT LHS Hydraulic System'
  },
  {
    id: 'vehicle-spec-08',
    category: 'Technical Manuals',
    difficulty: 'hard',
    question: 'Which set correctly identifies the three positions of the M1120 traction-control switch?',
    options: [
      { id: 'A', text: 'Inter-axle, center/off, and 8x8' },
      { id: 'B', text: 'Low, medium, and high range' },
      { id: 'C', text: 'Front drive, rear drive, and neutral' },
      { id: 'D', text: 'Automatic, manual, and emergency' }
    ],
    correctAnswer: 'A',
    explanation: 'The three traction-control switch positions are inter-axle, center/off for normal operation, and 8x8.',
    sourceTopic: 'M1120 HEMTT LHS Traction Control'
  }
];
