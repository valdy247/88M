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
    difficulty: 'medium',
    question: 'Which position best allows a ground guide to control a vehicle safely?',
    options: [
      { id: 'A', text: 'Close enough to touch the vehicle while it moves' },
      { id: 'B', text: 'Visible to the driver, clear of the vehicle path, and able to observe hazards' },
      { id: 'C', text: 'Directly behind the vehicle where the driver cannot see them' },
      { id: 'D', text: 'Beside a wheel so small movements are easier to judge' }
    ],
    correctAnswer: 'B',
    explanation: 'The guide must remain visible to the driver, stay outside the vehicle path, and maintain a position from which hazards can be observed.',
    sourceTopic: 'Ground Guide Safety'
  },
  {
    id: 'additional-12',
    category: 'Ground Guide',
    difficulty: 'medium',
    question: 'Before vehicle movement begins, what coordination is most important between the driver and ground guide?',
    options: [
      { id: 'A', text: 'Agree only on the destination' },
      { id: 'B', text: 'Confirm the signals, route, hazards, and stop procedure' },
      { id: 'C', text: 'Let the guide choose signals after movement starts' },
      { id: 'D', text: 'Use horn signals instead of visual signals' }
    ],
    correctAnswer: 'B',
    explanation: 'The driver and guide must share a clear understanding of signals and the movement plan before the vehicle moves.',
    sourceTopic: 'Ground Guide Coordination'
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
    difficulty: 'medium',
    question: 'Which situation most clearly calls for a ground guide?',
    options: [
      { id: 'A', text: 'Traveling on an unobstructed highway with normal visibility' },
      { id: 'B', text: 'Backing in a congested motor pool with restricted visibility' },
      { id: 'C', text: 'Operating a parked vehicle during a radio check' },
      { id: 'D', text: 'Driving forward on an empty, marked training lane' }
    ],
    correctAnswer: 'B',
    explanation: 'Congested or confined areas and situations with restricted visibility are primary conditions for using a ground guide.',
    sourceTopic: 'Ground Guide Safety'
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
    category: 'DA Form 5988-E',
    difficulty: 'medium',
    question: 'During PMCS, which form should the operator use to record an equipment fault for maintenance action?',
    options: [
      { id: 'A', text: 'DD Form 518' },
      { id: 'B', text: 'DA Form 5988-E' },
      { id: 'C', text: 'DA Form 5987-E' },
      { id: 'D', text: 'SF 91' }
    ],
    correctAnswer: 'B',
    explanation: 'DA Form 5988-E is the Equipment Maintenance and Inspection Worksheet used to document faults; DA Form 5987-E is associated with dispatch and equipment-use records.',
    sourceTopic: 'DA Form 5988-E and dispatch records'
  },
  {
    id: 'additional-25',
    category: 'Dispatch Procedures',
    difficulty: 'medium',
    question: 'Which pairing correctly matches the form to its primary operator-level use?',
    options: [
      { id: 'A', text: 'DA Form 5987-E — accident report' },
      { id: 'B', text: 'DA Form 5987-E — dispatch and equipment-use record' },
      { id: 'C', text: 'DA Form 5988-E — accident identification card' },
      { id: 'D', text: 'SF 91 — maintenance inspection worksheet' }
    ],
    correctAnswer: 'B',
    explanation: 'DA Form 5987-E supports equipment dispatch and usage; maintenance faults and corrective actions belong on DA Form 5988-E.',
    sourceTopic: 'Dispatch and maintenance forms'
  }
];
