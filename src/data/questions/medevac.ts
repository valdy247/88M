import type { Question } from '../../types/question';

export const medevac: Question[] = [
  {
    id: 'medevac-01',
    category: '9-Line MEDEVAC',
    difficulty: 'easy',
    question: 'What does Line 1 of a 9-Line MEDEVAC request provide?',
    options: [
      { id: 'A', text: 'Patient nationality and status' },
      { id: 'B', text: 'Location of the pickup site' },
      { id: 'C', text: 'Security at the pickup site' },
      { id: 'D', text: 'Special equipment required' }
    ],
    correctAnswer: 'B',
    explanation: 'Line 1 indicates the location of the pickup site.',
    sourceTopic: '9-Line MEDEVAC'
  },
  {
    id: 'medevac-02',
    category: '9-Line MEDEVAC',
    difficulty: 'easy',
    question: 'What should Line 2 of the MEDEVAC request include?',
    options: [
      { id: 'A', text: 'Patient type and number' },
      { id: 'B', text: 'Security situation' },
      { id: 'C', text: 'Radio frequency, call sign, and suffix' },
      { id: 'D', text: 'Terrain description' }
    ],
    correctAnswer: 'C',
    explanation: 'Line 2 includes the radio frequency, call sign, and suffix for pickup coordination.',
    sourceTopic: '9-Line MEDEVAC'
  },
  {
    id: 'medevac-03',
    category: '9-Line MEDEVAC',
    difficulty: 'medium',
    question: 'Which line of the 9-Line MEDEVAC request describes the number of patients by precedence?',
    options: [
      { id: 'A', text: 'Line 3' },
      { id: 'B', text: 'Line 4' },
      { id: 'C', text: 'Line 5' },
      { id: 'D', text: 'Line 6' }
    ],
    correctAnswer: 'A',
    explanation: 'Line 3 provides the number of patients by precedence.',
    sourceTopic: '9-Line MEDEVAC'
  },
  {
    id: 'medevac-04',
    category: '9-Line MEDEVAC',
    difficulty: 'medium',
    question: 'What information does Line 4 provide on a 9-Line MEDEVAC?',
    options: [
      { id: 'A', text: 'Methods to mark the pickup site' },
      { id: 'B', text: 'Special equipment required' },
      { id: 'C', text: 'Patient nationality and status' },
      { id: 'D', text: 'Location of the pickup site' }
    ],
    correctAnswer: 'B',
    explanation: 'Line 4 identifies any special equipment required for the evacuation.',
    sourceTopic: '9-Line MEDEVAC'
  },
  {
    id: 'medevac-05',
    category: '9-Line MEDEVAC',
    difficulty: 'easy',
    question: 'What does Line 5 of the MEDEVAC form specify?',
    options: [
      { id: 'A', text: 'Number of patients by type' },
      { id: 'B', text: 'Security at the pickup site' },
      { id: 'C', text: 'Patient nationality and status' },
      { id: 'D', text: 'Terrain description' }
    ],
    correctAnswer: 'A',
    explanation: 'Line 5 lists the number of patients by type, such as litter or ambulatory.',
    sourceTopic: '9-Line MEDEVAC'
  },
  {
    id: 'medevac-06',
    category: '9-Line MEDEVAC',
    difficulty: 'hard',
    question: 'Which line details pickup-site security in a 9-Line MEDEVAC request?',
    options: [
      { id: 'A', text: 'Line 4' },
      { id: 'B', text: 'Line 6' },
      { id: 'C', text: 'Line 8' },
      { id: 'D', text: 'Line 9' }
    ],
    correctAnswer: 'B',
    explanation: 'Line 6 provides information about the security situation at the pickup site.',
    sourceTopic: '9-Line MEDEVAC'
  },
  {
    id: 'medevac-07',
    category: '9-Line MEDEVAC',
    difficulty: 'medium',
    question: 'What does Line 7 of the 9-Line request describe?',
    options: [
      { id: 'A', text: 'Method of marking the pickup site' },
      { id: 'B', text: 'Number of patients by precedence' },
      { id: 'C', text: 'Patient nationality and status' },
      { id: 'D', text: 'Special equipment required' }
    ],
    correctAnswer: 'A',
    explanation: 'Line 7 identifies how the pickup site will be marked.',
    sourceTopic: '9-Line MEDEVAC'
  },
  {
    id: 'medevac-08',
    category: '9-Line MEDEVAC',
    difficulty: 'medium',
    question: 'Which line reports patient nationality and status?',
    options: [
      { id: 'A', text: 'Line 8' },
      { id: 'B', text: 'Line 3' },
      { id: 'C', text: 'Line 5' },
      { id: 'D', text: 'Line 9' }
    ],
    correctAnswer: 'A',
    explanation: 'Line 8 includes patient nationality and status information.',
    sourceTopic: '9-Line MEDEVAC'
  },
  {
    id: 'medevac-09',
    category: '9-Line MEDEVAC',
    difficulty: 'hard',
    question: 'If NBC contamination is present, which line of the 9-Line is used?',
    options: [
      { id: 'A', text: 'Line 4' },
      { id: 'B', text: 'Line 6' },
      { id: 'C', text: 'Line 9' },
      { id: 'D', text: 'Line 2' }
    ],
    correctAnswer: 'C',
    explanation: 'Line 9 is used for NBC contamination information when it exists.',
    sourceTopic: '9-Line MEDEVAC'
  },
  {
    id: 'medevac-10',
    category: '9-Line MEDEVAC',
    difficulty: 'easy',
    question: 'What is an example of patient precedence?',
    options: [
      { id: 'A', text: 'Urgent Surgical' },
      { id: 'B', text: 'Covert' },
      { id: 'C', text: 'Hazardous' },
      { id: 'D', text: 'Routine Only' }
    ],
    correctAnswer: 'A',
    explanation: 'Urgent Surgical is an example of patient precedence used in MEDEVAC requests.',
    sourceTopic: '9-Line MEDEVAC'
  },
  {
    id: 'medevac-11',
    category: '9-Line MEDEVAC',
    difficulty: 'medium',
    question: 'What type of patient is listed under Line 5 if they are walking and able to move?',
    options: [
      { id: 'A', text: 'Litter' },
      { id: 'B', text: 'Ambulatory' },
      { id: 'C', text: 'Medical' },
      { id: 'D', text: 'Critical' }
    ],
    correctAnswer: 'B',
    explanation: 'Ambulatory describes a patient who is able to move and walk.',
    sourceTopic: '9-Line MEDEVAC'
  },
  {
    id: 'medevac-12',
    category: '9-Line MEDEVAC',
    difficulty: 'medium',
    question: 'Which of these describes pickup-site security for Line 6?',
    options: [
      { id: 'A', text: 'No enemy troops in area' },
      { id: 'B', text: 'Patient nationality is U.S. civilian' },
      { id: 'C', text: 'Use smoke to mark site' },
      { id: 'D', text: 'Terrain is wooded' }
    ],
    correctAnswer: 'A',
    explanation: 'Line 6 can include a description like no enemy troops in area for security.',
    sourceTopic: '9-Line MEDEVAC'
  },
  {
    id: 'medevac-13',
    category: '9-Line MEDEVAC',
    difficulty: 'hard',
    question: 'Which pickup-site marking method may be used for Line 7?',
    options: [
      { id: 'A', text: 'Panels' },
      { id: 'B', text: 'Radio frequency' },
      { id: 'C', text: 'Patient type' },
      { id: 'D', text: 'Priority code' }
    ],
    correctAnswer: 'A',
    explanation: 'Panels is one of the methods used to mark a pickup site for MEDEVAC.',
    sourceTopic: '9-Line MEDEVAC'
  },
  {
    id: 'medevac-14',
    category: '9-Line MEDEVAC',
    difficulty: 'easy',
    question: 'Line 8 may identify which of the following patient categories?',
    options: [
      { id: 'A', text: 'U.S. military' },
      { id: 'B', text: 'Urgent surgical' },
      { id: 'C', text: 'Hostile force' },
      { id: 'D', text: 'Green zone' }
    ],
    correctAnswer: 'A',
    explanation: 'Line 8 can state patient nationality and status such as U.S. military.',
    sourceTopic: '9-Line MEDEVAC'
  },
  {
    id: 'medevac-15',
    category: '9-Line MEDEVAC',
    difficulty: 'hard',
    question: 'If there is no NBC contamination, what may Line 9 include instead?',
    options: [
      { id: 'A', text: 'Terrain description' },
      { id: 'B', text: 'Number of patients by type' },
      { id: 'C', text: 'Method of marking site' },
      { id: 'D', text: 'Radio frequency' }
    ],
    correctAnswer: 'A',
    explanation: 'Line 9 may include terrain description when NBC contamination is not present.',
    sourceTopic: '9-Line MEDEVAC'
  },
  {
    id: 'medevac-16',
    category: '9-Line MEDEVAC',
    difficulty: 'medium',
    question: 'Which line would include “enemy troops in area” if the pickup site is not secure?',
    options: [
      { id: 'A', text: 'Line 6' },
      { id: 'B', text: 'Line 7' },
      { id: 'C', text: 'Line 8' },
      { id: 'D', text: 'Line 4' }
    ],
    correctAnswer: 'A',
    explanation: 'Line 6 covers pickup-site security and may note enemy troops in the area.',
    sourceTopic: '9-Line MEDEVAC'
  },
  {
    id: 'medevac-17',
    category: '9-Line MEDEVAC',
    difficulty: 'easy',
    question: 'Which line should specify if a hoist is required during evacuation?',
    options: [
      { id: 'A', text: 'Line 4' },
      { id: 'B', text: 'Line 5' },
      { id: 'C', text: 'Line 2' },
      { id: 'D', text: 'Line 1' }
    ],
    correctAnswer: 'A',
    explanation: 'Special equipment required, such as a hoist, is specified on Line 4.',
    sourceTopic: '9-Line MEDEVAC'
  },
  {
    id: 'medevac-18',
    category: '9-Line MEDEVAC',
    difficulty: 'medium',
    question: 'Which action best supports a correct MEDEVAC request?',
    options: [
      { id: 'A', text: 'Provide only the pickup location and wait for questions' },
      { id: 'B', text: 'Give the full nine lines of required information clearly' },
      { id: 'C', text: 'Send a Simplified request by radio without details' },
      { id: 'D', text: 'Use general terms instead of patient types' }
    ],
    correctAnswer: 'B',
    explanation: 'A correct MEDEVAC request provides all nine lines of required information clearly.',
    sourceTopic: '9-Line MEDEVAC'
  }
];
