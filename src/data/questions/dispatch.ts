import type { Question } from '../../types/question';

export const dispatchProcedures: Question[] = [
  {
    id: 'dispatch-01',
    category: 'Dispatch Procedures',
    difficulty: 'easy',
    question: 'What is DA Form 5987-E associated with?',
    options: [
      { id: 'A', text: 'MEDEVAC requests' },
      { id: 'B', text: 'Equipment dispatch and usage records' },
      { id: 'C', text: 'Accident identification cards' },
      { id: 'D', text: 'Equipment maintenance worksheets' }
    ],
    correctAnswer: 'B',
    explanation: 'DA Form 5987-E is used for equipment dispatch and usage records.',
    sourceTopic: 'Dispatch Procedures'
  },
  {
    id: 'dispatch-02',
    category: 'Dispatch Procedures',
    difficulty: 'medium',
    question: 'Which information is typically entered on DA Form 5987-E?',
    options: [
      { id: 'A', text: 'Patient nationality and status' },
      { id: 'B', text: 'Operator information and equipment identification' },
      { id: 'C', text: 'Route checkpoints and landmarks' },
      { id: 'D', text: 'Radio call signs and frequencies' }
    ],
    correctAnswer: 'B',
    explanation: 'Dispatch records include operator information and equipment identification.',
    sourceTopic: 'Dispatch Procedures'
  },
  {
    id: 'dispatch-03',
    category: 'Dispatch Procedures',
    difficulty: 'medium',
    question: 'What should be true before an operator dispatches equipment?',
    options: [
      { id: 'A', text: 'The operator is properly licensed and qualified' },
      { id: 'B', text: 'The operator has not performed any PMCS' },
      { id: 'C', text: 'The equipment is dispatched without inspection' },
      { id: 'D', text: 'The operator has no supervision' }
    ],
    correctAnswer: 'A',
    explanation: 'Operators must be properly licensed and qualified before dispatching equipment.',
    sourceTopic: 'Dispatch Procedures'
  },
  {
    id: 'dispatch-04',
    category: 'Dispatch Procedures',
    difficulty: 'easy',
    question: 'What should dispatch records be?',
    options: [
      { id: 'A', text: 'Brief and incomplete' },
      { id: 'B', text: 'Accurate and complete' },
      { id: 'C', text: 'Written only after the mission ends' },
      { id: 'D', text: 'Submitted only if there is a problem' }
    ],
    correctAnswer: 'B',
    explanation: 'Dispatch records should be accurate and complete.',
    sourceTopic: 'Dispatch Procedures'
  },
  {
    id: 'dispatch-05',
    category: 'Dispatch Procedures',
    difficulty: 'medium',
    question: 'Which condition should prevent equipment dispatch?',
    options: [
      { id: 'A', text: 'A minor administrative discrepancy' },
      { id: 'B', text: 'An unsafe condition exists' },
      { id: 'C', text: 'A delay in mission planning' },
      { id: 'D', text: 'The operator has extra time' }
    ],
    correctAnswer: 'B',
    explanation: 'Equipment should not be dispatched when an unsafe condition exists.',
    sourceTopic: 'Dispatch Procedures'
  },
  {
    id: 'dispatch-06',
    category: 'Dispatch Procedures',
    difficulty: 'hard',
    question: 'Why is “operator information” recorded on dispatch paperwork?',
    options: [
      { id: 'A', text: 'To satisfy training requirements only' },
      { id: 'B', text: 'To document who is responsible for the equipment' },
      { id: 'C', text: 'To identify the route number used' },
      { id: 'D', text: 'To note the weather conditions' }
    ],
    correctAnswer: 'B',
    explanation: 'Operator information documents who is responsible for the equipment during dispatch.',
    sourceTopic: 'Dispatch Procedures'
  },
  {
    id: 'dispatch-07',
    category: 'Dispatch Procedures',
    difficulty: 'easy',
    question: 'What is one key item included in dispatch records?',
    options: [
      { id: 'A', text: 'The list of possible evacuation sites' },
      { id: 'B', text: 'Fuel or oil information' },
      { id: 'C', text: 'The unit’s mission statement' },
      { id: 'D', text: 'Personal clothing allowances' }
    ],
    correctAnswer: 'B',
    explanation: 'Dispatch records often include fuel or oil information.',
    sourceTopic: 'Dispatch Procedures'
  },
  {
    id: 'dispatch-08',
    category: 'Dispatch Procedures',
    difficulty: 'hard',
    question: 'How should dispatch documentation be handled to support safe operation?',
    options: [
      { id: 'A', text: 'Complete it accurately before the mission begins' },
      { id: 'B', text: 'Fill it out only if the vehicle breaks down' },
      { id: 'C', text: 'Use it only for routine maintenance' },
      { id: 'D', text: 'Leave it to the next operator to complete' }
    ],
    correctAnswer: 'A',
    explanation: 'Accurate dispatch documentation should be completed before the mission begins.',
    sourceTopic: 'Dispatch Procedures'
  }
];
