import type { Question } from '../../types/question';

export const accidentForms: Question[] = [
  {
    id: 'accident-01',
    category: 'Accident Forms',
    difficulty: 'easy',
    question: 'What form is used when involved in an accident with a Department of Defense vehicle?',
    options: [
      { id: 'A', text: 'SF 91' },
      { id: 'B', text: 'DD Form 518' },
      { id: 'C', text: 'DA Form 2404' },
      { id: 'D', text: 'DD Form 1348' }
    ],
    correctAnswer: 'A',
    explanation: 'SF 91 is the Motor Vehicle Accident Report used to document an accident involving a government vehicle.',
    sourceTopic: 'Accident Forms'
  },
  {
    id: 'accident-02',
    category: 'Accident Forms',
    difficulty: 'easy',
    question: 'Which form is used as an accident identification card?',
    options: [
      { id: 'A', text: 'DA Form 5988-E' },
      { id: 'B', text: 'DD Form 518' },
      { id: 'C', text: 'SF 91' },
      { id: 'D', text: 'DA Form 5987-E' }
    ],
    correctAnswer: 'B',
    explanation: 'DD Form 518 is the accident identification card.',
    sourceTopic: 'Accident Forms'
  },
  {
    id: 'accident-03',
    category: 'Accident Forms',
    difficulty: 'medium',
    question: 'Who completes items 73 through 83 on SF 91?',
    options: [
      { id: 'A', text: 'The operator’s supervisor' },
      { id: 'B', text: 'The other driver' },
      { id: 'C', text: 'The medical officer' },
      { id: 'D', text: 'The unit commander' }
    ],
    correctAnswer: 'A',
    explanation: 'Items 73 through 83 on SF 91 are completed by the operator’s supervisor.',
    sourceTopic: 'Accident Forms'
  },
  {
    id: 'accident-04',
    category: 'Accident Forms',
    difficulty: 'medium',
    question: 'What should the operator avoid when completing an accident report?',
    options: [
      { id: 'A', text: 'Recording known facts' },
      { id: 'B', text: 'Admitting fault' },
      { id: 'C', text: 'Listing witnesses' },
      { id: 'D', text: 'Describing road conditions' }
    ],
    correctAnswer: 'B',
    explanation: 'The operator should not admit fault when completing the report.',
    sourceTopic: 'Accident Forms'
  },
  {
    id: 'accident-05',
    category: 'Accident Forms',
    difficulty: 'easy',
    question: 'What does DD Form 518 provide at the accident scene?',
    options: [
      { id: 'A', text: 'Patient status' },
      { id: 'B', text: 'Identification information to the other party' },
      { id: 'C', text: 'Accident liability guidance' },
      { id: 'D', text: 'Maintenance inspection details' }
    ],
    correctAnswer: 'B',
    explanation: 'DD Form 518 provides required identifying information to the other party at the scene.',
    sourceTopic: 'Accident Forms'
  },
  {
    id: 'accident-06',
    category: 'Accident Forms',
    difficulty: 'hard',
    question: 'What should be done with DD Form 518 if the other vehicle is unattended?',
    options: [
      { id: 'A', text: 'Leave it securely in or on the vehicle' },
      { id: 'B', text: 'Discard it and notify the commander' },
      { id: 'C', text: 'Take it back to the unit for later use' },
      { id: 'D', text: 'Deliver it to the nearest police station' }
    ],
    correctAnswer: 'A',
    explanation: 'If the other vehicle is unattended, the card may be placed securely in or on the vehicle.',
    sourceTopic: 'Accident Forms'
  },
  {
    id: 'accident-07',
    category: 'Accident Forms',
    difficulty: 'medium',
    question: 'Which statement best explains the difference between SF 91 and DD Form 518?',
    options: [
      { id: 'A', text: 'SF 91 is a repair order and DD 518 is a warning notice' },
      { id: 'B', text: 'SF 91 is the accident report and DD 518 is the identification card' },
      { id: 'C', text: 'SF 91 records dispatch details and DD 518 records patient status' },
      { id: 'D', text: 'SF 91 is used only by supervisors and DD 518 by drivers' }
    ],
    correctAnswer: 'B',
    explanation: 'SF 91 is the accident report and DD Form 518 is the accident identification card.',
    sourceTopic: 'Accident Forms'
  },
  {
    id: 'accident-08',
    category: 'Accident Forms',
    difficulty: 'easy',
    question: 'What information should the operator record on SF 91?',
    options: [
      { id: 'A', text: 'Known facts and witness information' },
      { id: 'B', text: 'Opinions about who caused the accident' },
      { id: 'C', text: 'The weather forecast for the next day' },
      { id: 'D', text: 'Maintenance corrections made later' }
    ],
    correctAnswer: 'A',
    explanation: 'The operator should record known facts and witness information, not opinions.',
    sourceTopic: 'Accident Forms'
  },
  {
    id: 'accident-09',
    category: 'Accident Forms',
    difficulty: 'medium',
    question: 'Why is SF 91 completed?',
    options: [
      { id: 'A', text: 'To request additional vehicles' },
      { id: 'B', text: 'To protect the operator and government against claims' },
      { id: 'C', text: 'To authorize emergency leave' },
      { id: 'D', text: 'To schedule routine maintenance' }
    ],
    correctAnswer: 'B',
    explanation: 'SF 91 protects the operator and government against claims by recording accident details.',
    sourceTopic: 'Accident Forms'
  },
  {
    id: 'accident-10',
    category: 'Accident Forms',
    difficulty: 'hard',
    question: 'What should the operator not do while completing the accident report?',
    options: [
      { id: 'A', text: 'Record relevant vehicle condition' },
      { id: 'B', text: 'Express an opinion about fault' },
      { id: 'C', text: 'Note road or weather conditions' },
      { id: 'D', text: 'Record witness names if available' }
    ],
    correctAnswer: 'B',
    explanation: 'The operator should not express an opinion when completing the report.',
    sourceTopic: 'Accident Forms'
  },
  {
    id: 'accident-11',
    category: 'Accident Forms',
    difficulty: 'easy',
    question: 'Which form is completed to provide identifying information at the scene of an accident?',
    options: [
      { id: 'A', text: 'SF 91' },
      { id: 'B', text: 'DD Form 518' },
      { id: 'C', text: 'DA Form 5988-E' },
      { id: 'D', text: 'DA Form 5987-E' }
    ],
    correctAnswer: 'B',
    explanation: 'DD Form 518 is used at the accident scene to provide identifying information.',
    sourceTopic: 'Accident Forms'
  },
  {
    id: 'accident-12',
    category: 'Accident Forms',
    difficulty: 'medium',
    question: 'What should the operator include about witnesses on SF 91?',
    options: [
      { id: 'A', text: 'Only the number of witnesses' },
      { id: 'B', text: 'Witness contact and statements when available' },
      { id: 'C', text: 'A subjective opinion of their reliability' },
      { id: 'D', text: 'Their uniforms and rank' }
    ],
    correctAnswer: 'B',
    explanation: 'The operator should record witnesses and relevant facts if available.',
    sourceTopic: 'Accident Forms'
  },
  {
    id: 'accident-13',
    category: 'Accident Forms',
    difficulty: 'medium',
    question: 'When is the only time an operator is authorized to leave the scene of an accident?',
    options: [
      { id: 'A', text: 'When the operator is tired' },
      { id: 'B', text: 'When under definite orders not to stop' },
      { id: 'C', text: 'When weather conditions worsen' },
      { id: 'D', text: 'When the damage appears minor' }
    ],
    correctAnswer: 'B',
    explanation: 'The study material authorizes leaving the scene only when the operator is under definite orders not to stop.',
    sourceTopic: 'Accident Forms'
  },
  {
    id: 'accident-14',
    category: 'Accident Forms',
    difficulty: 'medium',
    question: 'Which sections of SF 91 are completed by the operator?',
    options: [
      { id: 'A', text: 'Sections I–IX' },
      { id: 'B', text: 'The entire form' },
      { id: 'C', text: 'Only the signature block' },
      { id: 'D', text: 'Section X only' }
    ],
    correctAnswer: 'A',
    explanation: 'The operator completes Sections I through IX; the supervisor completes the applicable supervisory items.',
    sourceTopic: 'Accident Forms'
  }
];
