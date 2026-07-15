import type { Question } from '../../types/question';

export const saluteReport: Question[] = [
  {
    id: 'salute-01',
    category: 'SALUTE Report',
    difficulty: 'easy',
    question: 'What does the “S” in SALUTE stand for?',
    options: [
      { id: 'A', text: 'Size' },
      { id: 'B', text: 'Speed' },
      { id: 'C', text: 'Security' },
      { id: 'D', text: 'Situation' }
    ],
    correctAnswer: 'A',
    explanation: 'S in SALUTE stands for Size, the number of personnel or equipment observed.',
    sourceTopic: 'SALUTE Report'
  },
  {
    id: 'salute-02',
    category: 'SALUTE Report',
    difficulty: 'easy',
    question: 'Which element of SALUTE describes what the observed unit is doing?',
    options: [
      { id: 'A', text: 'Activity' },
      { id: 'B', text: 'Location' },
      { id: 'C', text: 'Unit' },
      { id: 'D', text: 'Time' }
    ],
    correctAnswer: 'A',
    explanation: 'Activity describes what the observed personnel or unit is doing.',
    sourceTopic: 'SALUTE Report'
  },
  {
    id: 'salute-03',
    category: 'SALUTE Report',
    difficulty: 'easy',
    question: 'What should be included under “Location” in a SALUTE report?',
    options: [
      { id: 'A', text: 'The observer’s name' },
      { id: 'B', text: 'Where the activity happened' },
      { id: 'C', text: 'The radio frequency used' },
      { id: 'D', text: 'The weather conditions' }
    ],
    correctAnswer: 'B',
    explanation: 'Location should describe where the activity occurred, preferably with a coordinate or clear reference.',
    sourceTopic: 'SALUTE Report'
  },
  {
    id: 'salute-04',
    category: 'SALUTE Report',
    difficulty: 'medium',
    question: 'Which SALUTE element describes identifying markings or unit information?',
    options: [
      { id: 'A', text: 'Time' },
      { id: 'B', text: 'Equipment' },
      { id: 'C', text: 'Unit' },
      { id: 'D', text: 'Size' }
    ],
    correctAnswer: 'C',
    explanation: 'Unit describes identifying markings, uniforms, insignia, or unit information.',
    sourceTopic: 'SALUTE Report'
  },
  {
    id: 'salute-05',
    category: 'SALUTE Report',
    difficulty: 'medium',
    question: 'Which piece of information is not included in a SALUTE report?',
    options: [
      { id: 'A', text: 'Size' },
      { id: 'B', text: 'Location' },
      { id: 'C', text: 'Weather' },
      { id: 'D', text: 'Time' }
    ],
    correctAnswer: 'C',
    explanation: 'Weather is not part of SALUTE; the acronym includes Size, Activity, Location, Unit, Time, Equipment.',
    sourceTopic: 'SALUTE Report'
  },
  {
    id: 'salute-06',
    category: 'SALUTE Report',
    difficulty: 'hard',
    question: 'In a SALUTE report, what type of detail belongs under Equipment?',
    options: [
      { id: 'A', text: 'Weapons, vehicles, or communications equipment observed' },
      { id: 'B', text: 'Instructions from the unit commander' },
      { id: 'C', text: 'Route numbers in the area' },
      { id: 'D', text: 'The observer’s equipment loadout' }
    ],
    correctAnswer: 'A',
    explanation: 'Equipment refers to weapons, vehicles, or communications equipment observed with the unit.',
    sourceTopic: 'SALUTE Report'
  },
  {
    id: 'salute-07',
    category: 'SALUTE Report',
    difficulty: 'medium',
    question: 'Which description is most appropriate for a SALUTE report activity entry?',
    options: [
      { id: 'A', text: 'The enemy moved forward in a single column' },
      { id: 'B', text: 'The unit had a large number of radios' },
      { id: 'C', text: 'The weather was clear' },
      { id: 'D', text: 'The observer saw a vehicle with no markings' }
    ],
    correctAnswer: 'A',
    explanation: 'Activity should describe what the observed personnel or unit was doing.',
    sourceTopic: 'SALUTE Report'
  },
  {
    id: 'salute-08',
    category: 'SALUTE Report',
    difficulty: 'hard',
    question: 'Why should SALUTE report information be concise and accurate?',
    options: [
      { id: 'A', text: 'To maximize transmission time on unsecured radios' },
      { id: 'B', text: 'To reduce the number of reports required' },
      { id: 'C', text: 'To ensure information is clear and actionable' },
      { id: 'D', text: 'To comply with vehicle maintenance procedures' }
    ],
    correctAnswer: 'C',
    explanation: 'Accuracy and conciseness make the report useful and actionable for decision makers.',
    sourceTopic: 'SALUTE Report'
  },
  {
    id: 'salute-09',
    category: 'SALUTE Report',
    difficulty: 'easy',
    question: 'Which element of SALUTE records the time the activity was observed?',
    options: [
      { id: 'A', text: 'Time' },
      { id: 'B', text: 'Size' },
      { id: 'C', text: 'Activity' },
      { id: 'D', text: 'Unit' }
    ],
    correctAnswer: 'A',
    explanation: 'Time records when the activity was observed in the SALUTE report.',
    sourceTopic: 'SALUTE Report'
  },
  {
    id: 'salute-10',
    category: 'SALUTE Report',
    difficulty: 'medium',
    question: 'Which information belongs under Unit in a SALUTE report?',
    options: [
      { id: 'A', text: 'A grid coordinate for the observation' },
      { id: 'B', text: 'The number of enemy combatants' },
      { id: 'C', text: 'The observed unit’s identifying markings' },
      { id: 'D', text: 'The type of smoke signal used' }
    ],
    correctAnswer: 'C',
    explanation: 'Unit describes identifying markings, uniforms, or other unit indicators observed.',
    sourceTopic: 'SALUTE Report'
  }
];
