import type { Question } from '../../types/question';

export const pmcs: Question[] = [
  {
    id: 'pmcs-01',
    category: 'PMCS',
    difficulty: 'easy',
    question: 'What does PMCS stand for?',
    options: [
      { id: 'A', text: 'Preventive Maintenance Checks and Services' },
      { id: 'B', text: 'Primary Maintenance Control System' },
      { id: 'C', text: 'Personnel Mission and Command Support' },
      { id: 'D', text: 'Planned Mobility and Combat Support' }
    ],
    correctAnswer: 'A',
    explanation: 'PMCS stands for Preventive Maintenance Checks and Services.',
    sourceTopic: 'PMCS'
  },
  {
    id: 'pmcs-02',
    category: 'PMCS',
    difficulty: 'easy',
    question: 'Who is responsible for performing required PMCS checks?',
    options: [
      { id: 'A', text: 'The unit commander only' },
      { id: 'B', text: 'The maintenance officer' },
      { id: 'C', text: 'The operator' },
      { id: 'D', text: 'The driving instructor' }
    ],
    correctAnswer: 'C',
    explanation: 'The operator is responsible for performing required PMCS checks.',
    sourceTopic: 'PMCS'
  },
  {
    id: 'pmcs-03',
    category: 'PMCS',
    difficulty: 'medium',
    question: 'A vehicle is being prepared for operation, and its required weekly inspection is also due. Which PMCS checks should the operator complete?',
    options: [
      { id: 'A', text: 'Before checks only; weekly checks replace them' },
      { id: 'B', text: 'Both the required Before and Weekly checks' },
      { id: 'C', text: 'After checks followed by Monthly checks' },
      { id: 'D', text: 'Weekly checks only; no operational checks are needed' }
    ],
    correctAnswer: 'B',
    explanation: 'When equipment is being prepared for use and the weekly interval is due, the operator completes both the applicable Before and Weekly checks.',
    sourceTopic: 'PMCS'
  },
  {
    id: 'pmcs-04',
    category: 'PMCS',
    difficulty: 'medium',
    question: 'What should the operator do if a deficiency cannot be corrected at the operator level?',
    options: [
      { id: 'A', text: 'Continue operating the equipment' },
      { id: 'B', text: 'Report the fault to maintenance' },
      { id: 'C', text: 'Remove the equipment from service immediately' },
      { id: 'D', text: 'Ignore it if it seems minor' }
    ],
    correctAnswer: 'B',
    explanation: 'The operator must report faults that cannot be corrected at operator level.',
    sourceTopic: 'PMCS'
  },
  {
    id: 'pmcs-05',
    category: 'PMCS',
    difficulty: 'hard',
    question: 'Which statement best describes a warning on a technical manual?',
    options: [
      { id: 'A', text: 'It clarifies an optional procedure' },
      { id: 'B', text: 'It indicates conditions that may cause injury or death' },
      { id: 'C', text: 'It highlights minor maintenance notes' },
      { id: 'D', text: 'It records service intervals only' }
    ],
    correctAnswer: 'B',
    explanation: 'Warnings identify conditions that may cause injury or death.',
    sourceTopic: 'PMCS'
  },
  {
    id: 'pmcs-06',
    category: 'PMCS',
    difficulty: 'medium',
    question: 'While the vehicle is moving, a gauge enters an abnormal range. Which PMCS responsibility applies at that moment?',
    options: [
      { id: 'A', text: 'Wait for the After check before observing the gauge again' },
      { id: 'B', text: 'Treat it only as a Weekly inspection item' },
      { id: 'C', text: 'Apply the During checks and respond according to the TM' },
      { id: 'D', text: 'Continue normally because Before checks were completed' }
    ],
    correctAnswer: 'C',
    explanation: 'During checks include monitoring equipment while it operates and responding to abnormal indications according to the current TM.',
    sourceTopic: 'PMCS'
  },
  {
    id: 'pmcs-07',
    category: 'PMCS',
    difficulty: 'easy',
    question: 'What does a note in PMCS documentation usually do?',
    options: [
      { id: 'A', text: 'Present a warning of danger' },
      { id: 'B', text: 'Record a corrective action taken' },
      { id: 'C', text: 'Clarify or emphasize information' },
      { id: 'D', text: 'Indicate equipment status' }
    ],
    correctAnswer: 'C',
    explanation: 'A note clarifies or emphasizes important information.',
    sourceTopic: 'PMCS'
  },
  {
    id: 'pmcs-08',
    category: 'PMCS',
    difficulty: 'medium',
    question: 'What does a Class III leak usually indicate?',
    options: [
      { id: 'A', text: 'Seepage without drops' },
      { id: 'B', text: 'Leakage enough to form drops but not fall' },
      { id: 'C', text: 'Leakage enough for drops to fall' },
      { id: 'D', text: 'An acceptable condition for all equipment' }
    ],
    correctAnswer: 'C',
    explanation: 'Class III leakage is enough for drops to fall and is generally not allowable.',
    sourceTopic: 'PMCS'
  },
  {
    id: 'pmcs-09',
    category: 'PMCS',
    difficulty: 'hard',
    question: 'Which statement is correct about equipment condition during PMCS?',
    options: [
      { id: 'A', text: 'Minor Class III leakage is acceptable' },
      { id: 'B', text: 'Class II leakage forms drops but not enough to fall' },
      { id: 'C', text: 'Class I leakage is enough for drops to fall' },
      { id: 'D', text: 'All leakage is automatically allowed' }
    ],
    correctAnswer: 'B',
    explanation: 'Class II leakage forms drops but not enough for drops to fall.',
    sourceTopic: 'PMCS'
  },
  {
    id: 'pmcs-10',
    category: 'PMCS',
    difficulty: 'easy',
    question: 'What should an operator do when a fault is detected during PMCS?',
    options: [
      { id: 'A', text: 'Record the fault and take corrective action if able' },
      { id: 'B', text: 'Continue operating until maintenance arrives' },
      { id: 'C', text: 'Discard the technical manual' },
      { id: 'D', text: 'Ignore it if the equipment still operates' }
    ],
    correctAnswer: 'A',
    explanation: 'The operator should record the fault and correct it if possible within authorization.',
    sourceTopic: 'PMCS'
  },
  {
    id: 'pmcs-11',
    category: 'PMCS',
    difficulty: 'medium',
    question: 'An operator identifies a Class II leak during PMCS. What determines whether the equipment may continue to operate?',
    options: [
      { id: 'A', text: 'Class II leaks are always allowed' },
      { id: 'B', text: 'The limits and instructions in the applicable technical manual' },
      { id: 'C', text: 'The operator’s personal judgment only' },
      { id: 'D', text: 'Whether the leak appeared during a Weekly check' }
    ],
    correctAnswer: 'B',
    explanation: 'Leak classification alone does not authorize operation; the applicable TM defines allowable limits and equipment status.',
    sourceTopic: 'PMCS'
  },
  {
    id: 'pmcs-12',
    category: 'PMCS',
    difficulty: 'hard',
    question: 'What is the operator’s responsibility when a PMCS item cannot be opened or serviced?',
    options: [
      { id: 'A', text: 'Mark it as normal and continue' },
      { id: 'B', text: 'Report the condition and stop if unsafe' },
      { id: 'C', text: 'Operate the equipment at reduced speed' },
      { id: 'D', text: 'Complete a separate dispatch form only' }
    ],
    correctAnswer: 'B',
    explanation: 'The operator must report faults and stop if the equipment is unsafe to operate.',
    sourceTopic: 'PMCS'
  },
  {
    id: 'pmcs-13',
    category: 'PMCS',
    difficulty: 'easy',
    question: 'What is the purpose of preventive maintenance checks and services?',
    options: [
      { id: 'A', text: 'To detect faults and deficiencies early' },
      { id: 'B', text: 'To delay routine servicing' },
      { id: 'C', text: 'To document operator training only' },
      { id: 'D', text: 'To maximize fuel consumption' }
    ],
    correctAnswer: 'A',
    explanation: 'PMCS is intended to detect faults and deficiencies before they become serious problems.',
    sourceTopic: 'PMCS'
  },
  {
    id: 'pmcs-14',
    category: 'PMCS',
    difficulty: 'medium',
    question: 'Which of the following is not a common PMCS interval?',
    options: [
      { id: 'A', text: 'Before' },
      { id: 'B', text: 'After' },
      { id: 'C', text: 'Annual' },
      { id: 'D', text: 'Weekly' }
    ],
    correctAnswer: 'C',
    explanation: 'Annual is not typically listed as a common PMCS interval; before, during, after, weekly, and monthly are.',
    sourceTopic: 'PMCS'
  },
  {
    id: 'pmcs-15',
    category: 'PMCS',
    difficulty: 'medium',
    question: 'Which description identifies a Class I fluid leak?',
    options: [
      { id: 'A', text: 'Wetness or discoloration without drops forming' },
      { id: 'B', text: 'Drops forming but not falling' },
      { id: 'C', text: 'Drops falling from the checked item' },
      { id: 'D', text: 'A dry stain with no current seepage' }
    ],
    correctAnswer: 'A',
    explanation: 'Class I leakage is seepage shown by wetness or discoloration that is not great enough to form drops.',
    sourceTopic: 'PMCS Leak Classes'
  },
  {
    id: 'pmcs-16',
    category: 'PMCS',
    difficulty: 'hard',
    question: 'Which statement correctly applies the Red Book guidance for minor Class I or Class II leakage?',
    options: [
      { id: 'A', text: 'Operation may be allowed within TM limits, except fuel leakage is not treated as allowable minor leakage' },
      { id: 'B', text: 'Every Class I or Class II leak automatically permits operation' },
      { id: 'C', text: 'Fuel leaks are acceptable if no drops fall' },
      { id: 'D', text: 'Leak class never affects equipment status' }
    ],
    correctAnswer: 'A',
    explanation: 'Minor Class I or II leakage may be permitted only within applicable TM limits; fuel leakage is an exception and must be treated as a fault.',
    sourceTopic: 'PMCS Leak Classes'
  },
  {
    id: 'pmcs-17',
    category: 'PMCS',
    difficulty: 'medium',
    question: 'Which list best describes the operator-level PMCS process shown in the Red Book?',
    options: [
      { id: 'A', text: 'Inspect, record faults, clean, service, and perform authorized repairs' },
      { id: 'B', text: 'Inspect only and leave all documentation to maintenance' },
      { id: 'C', text: 'Dispatch, load cargo, and prepare accident reports' },
      { id: 'D', text: 'Replace every component showing normal wear' }
    ],
    correctAnswer: 'A',
    explanation: 'Operator PMCS includes inspecting, recording maintenance faults, cleaning, servicing, and performing repairs authorized at operator level.',
    sourceTopic: 'PMCS Process'
  }
];
