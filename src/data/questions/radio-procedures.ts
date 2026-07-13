import type { Question } from '../../types/question';

export const radioProcedures: Question[] = [
  {
    id: 'radio-01',
    category: 'Radio Procedures',
    difficulty: 'easy',
    question: 'What does the proword “Roger” mean when used on the radio?',
    options: [
      { id: 'A', text: 'I understand and will comply' },
      { id: 'B', text: 'I understand / Yes' },
      { id: 'C', text: 'My portion is complete, reply expected' },
      { id: 'D', text: 'The conversation is complete, no reply expected' }
    ],
    correctAnswer: 'B',
    explanation: 'Roger indicates the transmission was received and understood.',
    sourceTopic: 'Radio Procedures'
  },
  {
    id: 'radio-02',
    category: 'Radio Procedures',
    difficulty: 'easy',
    question: 'Which radio term should you use to request a retransmission of a message?',
    options: [
      { id: 'A', text: 'Repeat' },
      { id: 'B', text: 'Say Again' },
      { id: 'C', text: 'Over' },
      { id: 'D', text: 'Out' }
    ],
    correctAnswer: 'B',
    explanation: 'Say Again is the correct proword for requesting a retransmission.',
    sourceTopic: 'Radio Procedures'
  },
  {
    id: 'radio-03',
    category: 'Radio Procedures',
    difficulty: 'medium',
    question: 'What does RSVP stand for in radio voice procedures?',
    options: [
      { id: 'A', text: 'Rate, Signal, Volume, Pitch' },
      { id: 'B', text: 'Rhythm, Speed, Volume, Pitch' },
      { id: 'C', text: 'Read back, Signal, Voice, Position' },
      { id: 'D', text: 'Rhythm, Security, Volume, Precision' }
    ],
    correctAnswer: 'B',
    explanation: 'RSVP refers to Rhythm, Speed, Volume, and Pitch for clarity on the radio.',
    sourceTopic: 'Radio Procedures'
  },
  {
    id: 'radio-04',
    category: 'Radio Procedures',
    difficulty: 'easy',
    question: 'Which practice is required for clear radio transmissions?',
    options: [
      { id: 'A', text: 'Speak as fast as possible' },
      { id: 'B', text: 'Transmit only when necessary' },
      { id: 'C', text: 'Use slang for speed' },
      { id: 'D', text: 'Share complete addresses in every call' }
    ],
    correctAnswer: 'B',
    explanation: 'Transmit only when necessary to keep communications brief and relevant.',
    sourceTopic: 'Radio Procedures'
  },
  {
    id: 'radio-05',
    category: 'Radio Procedures',
    difficulty: 'medium',
    question: 'If the radio net is busy, what should you do before transmitting?',
    options: [
      { id: 'A', text: 'Speak louder until someone answers' },
      { id: 'B', text: 'Hold the PTT button after speaking' },
      { id: 'C', text: 'Listen before transmitting' },
      { id: 'D', text: 'Use unofficial conversation to test the net' }
    ],
    correctAnswer: 'C',
    explanation: 'Listening before transmitting prevents interference and preserves radio discipline.',
    sourceTopic: 'Radio Procedures'
  },
  {
    id: 'radio-06',
    category: 'Radio Procedures',
    difficulty: 'medium',
    question: 'What is the appropriate procedure after saying a transmission on the push-to-talk radio?',
    options: [
      { id: 'A', text: 'Release the push-to-talk button promptly' },
      { id: 'B', text: 'Hold the button to keep the channel open' },
      { id: 'C', text: 'Repeat the message immediately' },
      { id: 'D', text: 'Switch channels before releasing the button' }
    ],
    correctAnswer: 'A',
    explanation: 'Release the push-to-talk button promptly to allow others to respond or transmit.',
    sourceTopic: 'Radio Procedures'
  },
  {
    id: 'radio-07',
    category: 'Radio Procedures',
    difficulty: 'hard',
    question: 'Which statement is most consistent with proper use of sensitive information over radio?',
    options: [
      { id: 'A', text: 'Transmit sensitive data only when required and authorized' },
      { id: 'B', text: 'Share operational details to ensure situational awareness' },
      { id: 'C', text: 'Include all addresses in every transmission' },
      { id: 'D', text: 'Use profanity to emphasize the priority of the message' }
    ],
    correctAnswer: 'A',
    explanation: 'Only transmit sensitive information when necessary and authorized to maintain security.',
    sourceTopic: 'Radio Procedures'
  },
  {
    id: 'radio-08',
    category: 'Radio Procedures',
    difficulty: 'hard',
    question: 'Which of the following best describes a proper call sign?',
    options: [
      { id: 'A', text: 'A numeric or letter identifier used to conceal true identity' },
      { id: 'B', text: 'A friendly name for use in unofficial conversation' },
      { id: 'C', text: 'A phrase that includes mission details' },
      { id: 'D', text: 'A sequence that reveals the sender and receiver explicitly' }
    ],
    correctAnswer: 'A',
    explanation: 'Call signs identify stations while helping conceal who is communicating with whom.',
    sourceTopic: 'Radio Procedures'
  },
  {
    id: 'radio-09',
    category: 'Radio Procedures',
    difficulty: 'easy',
    question: 'Which proword means the conversation is complete and no reply is expected?',
    options: [
      { id: 'A', text: 'Over' },
      { id: 'B', text: 'Out' },
      { id: 'C', text: 'Roger' },
      { id: 'D', text: 'Break' }
    ],
    correctAnswer: 'B',
    explanation: 'Out indicates the transmission is complete and no reply is expected.',
    sourceTopic: 'Radio Procedures'
  },
  {
    id: 'radio-10',
    category: 'Radio Procedures',
    difficulty: 'medium',
    question: 'When should radio transmissions be limited to about ten seconds before pausing?',
    options: [
      { id: 'A', text: 'Only during emergencies' },
      { id: 'B', text: 'Whenever you are speaking on the radio' },
      { id: 'C', text: 'When the net is not secure' },
      { id: 'D', text: 'Only for command messages' }
    ],
    correctAnswer: 'B',
    explanation: 'Transmissions should be short and paused often to allow others to use the net.',
    sourceTopic: 'Radio Procedures'
  },
  {
    id: 'radio-11',
    category: 'Radio Procedures',
    difficulty: 'easy',
    question: 'Which proword requests the recipient to repeat the message exactly?',
    options: [
      { id: 'A', text: 'Copy' },
      { id: 'B', text: 'Wilco' },
      { id: 'C', text: 'Read Back' },
      { id: 'D', text: 'Stand By' }
    ],
    correctAnswer: 'C',
    explanation: 'Read Back asks the recipient to repeat the received message exactly to confirm it.',
    sourceTopic: 'Radio Procedures'
  },
  {
    id: 'radio-12',
    category: 'Radio Procedures',
    difficulty: 'medium',
    question: 'Which factor is not part of RSVP in radio voice procedures?',
    options: [
      { id: 'A', text: 'Rhythm' },
      { id: 'B', text: 'Speed' },
      { id: 'C', text: 'Volume' },
      { id: 'D', text: 'Silence' }
    ],
    correctAnswer: 'D',
    explanation: 'RSVP includes Rhythm, Speed, Volume, and Pitch, not Silence.',
    sourceTopic: 'Radio Procedures'
  },
  {
    id: 'radio-13',
    category: 'Radio Procedures',
    difficulty: 'hard',
    question: 'What is the safest approach to using radio procedure words in uncertain reception?',
    options: [
      { id: 'A', text: 'Send longer messages to cover all details' },
      { id: 'B', text: 'Use prowords and keep the voice clear and unambiguous' },
      { id: 'C', text: 'Speak quietly to avoid detection' },
      { id: 'D', text: 'Omit call signs to save time' }
    ],
    correctAnswer: 'B',
    explanation: 'Clear, concise prowords improve understanding when reception is uncertain.',
    sourceTopic: 'Radio Procedures'
  },
  {
    id: 'radio-14',
    category: 'Radio Procedures',
    difficulty: 'easy',
    question: 'Which of the following is an example of a proper response after receiving a message?',
    options: [
      { id: 'A', text: 'Copy' },
      { id: 'B', text: 'Repeat' },
      { id: 'C', text: 'Affirmative' },
      { id: 'D', text: 'Wilco' }
    ],
    correctAnswer: 'A',
    explanation: 'Copy confirms receipt and understanding of the message.',
    sourceTopic: 'Radio Procedures'
  },
  {
    id: 'radio-15',
    category: 'Radio Procedures',
    difficulty: 'medium',
    question: 'Which of these is a responsibility of a radio operator?',
    options: [
      { id: 'A', text: 'Transmit every detail of the mission' },
      { id: 'B', text: 'Limit transmissions to necessary information' },
      { id: 'C', text: 'Use slang to speed communication' },
      { id: 'D', text: 'Leave the radio on at all times' }
    ],
    correctAnswer: 'B',
    explanation: 'Operators must pass accurate, timely information and limit transmissions to necessary content.',
    sourceTopic: 'Radio Procedures'
  },
  {
    id: 'radio-16',
    category: 'Radio Procedures',
    difficulty: 'hard',
    question: 'When using the phonetic alphabet, what is the primary purpose?',
    options: [
      { id: 'A', text: 'To shorten transmissions' },
      { id: 'B', text: 'To improve clarity and reduce mistakes' },
      { id: 'C', text: 'To encrypt the message' },
      { id: 'D', text: 'To identify friendly units' }
    ],
    correctAnswer: 'B',
    explanation: 'The phonetic alphabet improves clarity and reduces miscommunication over radio.',
    sourceTopic: 'Radio Procedures'
  },
  {
    id: 'radio-17',
    category: 'Radio Procedures',
    difficulty: 'medium',
    question: 'What should an operator do after a normal transmission before another station replies?',
    options: [
      { id: 'A', text: 'Press the button again immediately' },
      { id: 'B', text: 'Pause and listen for a reply' },
      { id: 'C', text: 'Send the message twice' },
      { id: 'D', text: 'Switch the channel to monitor net traffic' }
    ],
    correctAnswer: 'B',
    explanation: 'After transmitting, the operator should pause and listen for a reply.',
    sourceTopic: 'Radio Procedures'
  },
  {
    id: 'radio-18',
    category: 'Radio Procedures',
    difficulty: 'hard',
    question: 'Which phrase is appropriate if you need to interrupt a net with critical information?',
    options: [
      { id: 'A', text: 'Break' },
      { id: 'B', text: 'Emergency Traffic' },
      { id: 'C', text: 'Stand By' },
      { id: 'D', text: 'Say Again' }
    ],
    correctAnswer: 'B',
    explanation: 'Emergency Traffic is used to gain control of the frequency for critical information.',
    sourceTopic: 'Radio Procedures'
  }
];
