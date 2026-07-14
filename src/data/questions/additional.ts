import type { Question } from '../../types/question';

export const additionalQuestions: Question[] = [
  {
    id: 'additional-01',
    category: 'Convoy Operations',
    difficulty: 'medium',
    question: 'What is the primary means of communication in a convoy?',
    options: [
      { id: 'A', text: 'Visual signals' },
      { id: 'B', text: 'Radio' },
      { id: 'C', text: 'Sound signals' },
      { id: 'D', text: 'Messenger' }
    ],
    correctAnswer: 'B',
    explanation: 'Radio is the primary means of communication in a convoy.',
    sourceTopic: 'Convoy Operations'
  },
  {
    id: 'additional-02',
    category: 'Convoy Operations',
    difficulty: 'medium',
    question: 'Which communication method is considered the contingency method?',
    options: [
      { id: 'A', text: 'Radio' },
      { id: 'B', text: 'Sound signals' },
      { id: 'C', text: 'Visual signals' },
      { id: 'D', text: 'Cell phone' }
    ],
    correctAnswer: 'C',
    explanation: 'Visual signals are the contingency method when normal communications fail.',
    sourceTopic: 'Convoy Operations'
  },
  {
    id: 'additional-03',
    category: 'Column Formations',
    difficulty: 'medium',
    question: 'Which column formation is primarily used during daylight operations?',
    options: [
      { id: 'A', text: 'Close Column' },
      { id: 'B', text: 'Infiltration Column' },
      { id: 'C', text: 'Open Column' },
      { id: 'D', text: 'Combat Column' }
    ],
    correctAnswer: 'C',
    explanation: 'Open Column is primarily used during daylight operations for dispersion and visibility.',
    sourceTopic: 'Column Formations'
  },
  {
    id: 'additional-04',
    category: 'Column Formations',
    difficulty: 'medium',
    question: 'What is the normal vehicle interval in an Open Column?',
    options: [
      { id: 'A', text: '25-50 meters' },
      { id: 'B', text: '50 meters' },
      { id: 'C', text: '100 meters' },
      { id: 'D', text: '200 meters' }
    ],
    correctAnswer: 'C',
    explanation: '100 meters is the normal vehicle interval for an Open Column.',
    sourceTopic: 'Column Formations'
  },
  {
    id: 'additional-05',
    category: 'Column Formations',
    difficulty: 'medium',
    question: 'Which column formation is normally used at night?',
    options: [
      { id: 'A', text: 'Open Column' },
      { id: 'B', text: 'Close Column' },
      { id: 'C', text: 'Infiltration Column' },
      { id: 'D', text: 'Combat Column' }
    ],
    correctAnswer: 'B',
    explanation: 'Close Column is normally used at night for better control and security.',
    sourceTopic: 'Column Formations'
  },
  {
    id: 'additional-06',
    category: 'Column Formations',
    difficulty: 'medium',
    question: 'What is the normal vehicle interval in a Close Column?',
    options: [
      { id: 'A', text: '10 meters' },
      { id: 'B', text: '25-50 meters' },
      { id: 'C', text: '75 meters' },
      { id: 'D', text: '100 meters' }
    ],
    correctAnswer: 'B',
    explanation: '25-50 meters is the normal interval for a Close Column.',
    sourceTopic: 'Column Formations'
  },
  {
    id: 'additional-07',
    category: 'Column Formations',
    difficulty: 'medium',
    question: 'What is one advantage of an Open Column?',
    options: [
      { id: 'A', text: 'Better command and control' },
      { id: 'B', text: 'Reduced chance of enemy observation' },
      { id: 'C', text: 'Requires fewer drivers' },
      { id: 'D', text: 'Easier convoy control' }
    ],
    correctAnswer: 'B',
    explanation: 'Open Column reduces the chance of enemy observation by increasing dispersion.',
    sourceTopic: 'Column Formations'
  },
  {
    id: 'additional-08',
    category: 'Column Formations',
    difficulty: 'medium',
    question: 'What is one disadvantage of an Open Column?',
    options: [
      { id: 'A', text: 'Less flexibility' },
      { id: 'B', text: 'Command and control is more difficult' },
      { id: 'C', text: 'Higher accident rate' },
      { id: 'D', text: 'Requires more route markers' }
    ],
    correctAnswer: 'B',
    explanation: 'Command and control is more difficult in an Open Column because vehicles are spread out.',
    sourceTopic: 'Column Formations'
  },
  {
    id: 'additional-09',
    category: 'Column Formations',
    difficulty: 'medium',
    question: 'Which column formation provides maximum security and deception?',
    options: [
      { id: 'A', text: 'Close Column' },
      { id: 'B', text: 'Open Column' },
      { id: 'C', text: 'Infiltration Column' },
      { id: 'D', text: 'Administrative Column' }
    ],
    correctAnswer: 'C',
    explanation: 'Infiltration Column provides maximum security and deception for stealth movement.',
    sourceTopic: 'Column Formations'
  },
  {
    id: 'additional-10',
    category: 'March Discipline',
    difficulty: 'medium',
    question: 'Which of the following is part of March Discipline?',
    options: [
      { id: 'A', text: 'Using civilian radios' },
      { id: 'B', text: 'Prompt relaying of visual signals' },
      { id: 'C', text: 'Changing routes without approval' },
      { id: 'D', text: 'Ignoring speed limits' }
    ],
    correctAnswer: 'B',
    explanation: 'Prompt relaying of visual signals is part of March Discipline.',
    sourceTopic: 'March Discipline'
  },
  {
    id: 'additional-11',
    category: 'Ground Guide',
    difficulty: 'easy',
    question: 'How far should a ground guide stay from the vehicle whenever possible?',
    options: [
      { id: 'A', text: '5 yards' },
      { id: 'B', text: '10 yards' },
      { id: 'C', text: '20 yards' },
      { id: 'D', text: '25 yards' }
    ],
    correctAnswer: 'B',
    explanation: 'Ground guides should stay about 10 yards from the vehicle whenever possible.',
    sourceTopic: 'Ground Guide'
  },
  {
    id: 'additional-12',
    category: 'Ground Guide',
    difficulty: 'easy',
    question: 'Ground guides should position themselves at what angle from the front corners of the vehicle?',
    options: [
      { id: 'A', text: '30 degrees' },
      { id: 'B', text: '45 degrees' },
      { id: 'C', text: '60 degrees' },
      { id: 'D', text: '90 degrees' }
    ],
    correctAnswer: 'B',
    explanation: 'Ground guides should position themselves at a 45-degree angle from the front corners of the vehicle.',
    sourceTopic: 'Ground Guide'
  },
  {
    id: 'additional-13',
    category: 'Ground Guide',
    difficulty: 'easy',
    question: 'What should the driver do if the ground guide is no longer visible?',
    options: [
      { id: 'A', text: 'Continue slowly' },
      { id: 'B', text: 'Stop immediately' },
      { id: 'C', text: 'Sound the horn' },
      { id: 'D', text: 'Back up' }
    ],
    correctAnswer: 'B',
    explanation: 'The driver should stop immediately if the ground guide is no longer visible.',
    sourceTopic: 'Ground Guide'
  },
  {
    id: 'additional-14',
    category: 'Ground Guide',
    difficulty: 'easy',
    question: 'Which area normally requires a ground guide?',
    options: [
      { id: 'A', text: 'Fuel point' },
      { id: 'B', text: 'Motor pool' },
      { id: 'C', text: 'Railhead' },
      { id: 'D', text: 'All of the above' }
    ],
    correctAnswer: 'D',
    explanation: 'Fuel points, motor pools, and railheads normally require a ground guide.',
    sourceTopic: 'Ground Guide'
  },
  {
    id: 'additional-15',
    category: 'Hand Signals',
    difficulty: 'easy',
    question: 'What hand signal tells the driver to start the engine?',
    options: [
      { id: 'A', text: 'Circular motion with fist' },
      { id: 'B', text: 'Arm raised overhead' },
      { id: 'C', text: 'Palm facing forward' },
      { id: 'D', text: 'Arms crossed' }
    ],
    correctAnswer: 'A',
    explanation: 'Circular motion with the fist tells the driver to start the engine.',
    sourceTopic: 'Hand Signals'
  },
  {
    id: 'additional-16',
    category: 'Hand Signals',
    difficulty: 'easy',
    question: 'What hand signal tells the driver to stop the engine?',
    options: [
      { id: 'A', text: 'Cutting motion across the body' },
      { id: 'B', text: 'Thumbs up' },
      { id: 'C', text: 'Palm down' },
      { id: 'D', text: 'Wave both arms' }
    ],
    correctAnswer: 'A',
    explanation: 'A cutting motion across the body tells the driver to stop the engine.',
    sourceTopic: 'Hand Signals'
  },
  {
    id: 'additional-17',
    category: 'Hand Signals',
    difficulty: 'easy',
    question: 'What hand signal is used to increase vehicle speed?',
    options: [
      { id: 'A', text: 'Raise fist repeatedly' },
      { id: 'B', text: 'Wave arm downward' },
      { id: 'C', text: 'Circular arm motion' },
      { id: 'D', text: 'Point forward' }
    ],
    correctAnswer: 'A',
    explanation: 'Raising the fist repeatedly signals the driver to increase speed.',
    sourceTopic: 'Hand Signals'
  },
  {
    id: 'additional-18',
    category: 'Hand Signals',
    difficulty: 'easy',
    question: 'What hand signal is used to slow down?',
    options: [
      { id: 'A', text: 'Wave arm downward' },
      { id: 'B', text: 'Raise both arms' },
      { id: 'C', text: 'Circular fist motion' },
      { id: 'D', text: 'Point left' }
    ],
    correctAnswer: 'A',
    explanation: 'Waving the arm downward is the signal used to slow down.',
    sourceTopic: 'Hand Signals'
  },
  {
    id: 'additional-19',
    category: 'Hand Signals',
    difficulty: 'easy',
    question: 'What signal directs the vehicle to move in reverse?',
    options: [
      { id: 'A', text: 'Palms pushing backward' },
      { id: 'B', text: 'Circular motion' },
      { id: 'C', text: 'Wave forward' },
      { id: 'D', text: 'Raise fist' }
    ],
    correctAnswer: 'A',
    explanation: 'Palms pushing backward indicates the vehicle should move in reverse.',
    sourceTopic: 'Hand Signals'
  },
  {
    id: 'additional-20',
    category: 'Hand Signals',
    difficulty: 'easy',
    question: 'What signal tells the driver to move forward?',
    options: [
      { id: 'A', text: 'Palms pulling toward the body' },
      { id: 'B', text: 'Wave overhead' },
      { id: 'C', text: 'Thumbs up' },
      { id: 'D', text: 'Point down' }
    ],
    correctAnswer: 'A',
    explanation: 'Palms pulling toward the body tell the driver to move forward.',
    sourceTopic: 'Hand Signals'
  },
  {
    id: 'additional-21',
    category: 'Adverse Driving',
    difficulty: 'medium',
    question: 'What should you do before entering a flooded road?',
    options: [
      { id: 'A', text: 'Accelerate immediately' },
      { id: 'B', text: 'Check water depth and bottom firmness' },
      { id: 'C', text: 'Turn around' },
      { id: 'D', text: 'Shift into reverse' }
    ],
    correctAnswer: 'B',
    explanation: 'You should check water depth and bottom firmness before entering a flooded road.',
    sourceTopic: 'Adverse Driving'
  },
  {
    id: 'additional-22',
    category: 'Adverse Driving',
    difficulty: 'medium',
    question: 'When driving in fog, what should you do?',
    options: [
      { id: 'A', text: 'Increase speed' },
      { id: 'B', text: 'Reduce following distance' },
      { id: 'C', text: 'Maintain a safe following distance' },
      { id: 'D', text: 'Use high beams' }
    ],
    correctAnswer: 'C',
    explanation: 'Maintain a safe following distance when driving in fog.',
    sourceTopic: 'Adverse Driving'
  },
  {
    id: 'additional-23',
    category: 'Adverse Driving',
    difficulty: 'medium',
    question: 'When driving in mud, what should you avoid?',
    options: [
      { id: 'A', text: 'Maintaining momentum' },
      { id: 'B', text: 'Sudden acceleration and hard braking' },
      { id: 'C', text: 'Low speeds' },
      { id: 'D', text: 'Wide turns' }
    ],
    correctAnswer: 'B',
    explanation: 'Avoid sudden acceleration and hard braking when driving in mud.',
    sourceTopic: 'Adverse Driving'
  },
  {
    id: 'additional-24',
    category: 'PMCS',
    difficulty: 'medium',
    question: 'What is the primary purpose of DA Form 5987-E?',
    options: [
      { id: 'A', text: 'Record fuel usage' },
      { id: 'B', text: 'Equipment Maintenance and Inspection Worksheet' },
      { id: 'C', text: 'Dispatch form' },
      { id: 'D', text: 'Accident report' }
    ],
    correctAnswer: 'B',
    explanation: 'DA Form 5987-E is used as an Equipment Maintenance and Inspection Worksheet.',
    sourceTopic: 'PMCS'
  },
  {
    id: 'additional-25',
    category: 'PMCS',
    difficulty: 'medium',
    question: 'Which section of DA Form 5987-E contains faults and corrective actions?',
    options: [
      { id: 'A', text: 'Header' },
      { id: 'B', text: 'Maintenance Faults' },
      { id: 'C', text: 'Dispatch Information' },
      { id: 'D', text: 'Operator Information' }
    ],
    correctAnswer: 'B',
    explanation: 'The Maintenance Faults section contains faults and corrective actions on DA Form 5987-E.',
    sourceTopic: 'PMCS'
  }
];
