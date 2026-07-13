export type AnswerId = 'A' | 'B' | 'C' | 'D';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type Category =
  | 'Radio Procedures'
  | 'Strip Maps'
  | 'SALUTE Report'
  | '9-Line MEDEVAC'
  | 'Accident Forms'
  | 'PMCS'
  | 'DA Form 5988-E'
  | 'Dispatch Procedures'
  | 'Technical Manuals'
  | 'Ground Guide Procedures'
  | 'Hand and Arm Signals';

export interface QuestionOption {
  id: AnswerId;
  text: string;
}

export interface Question {
  id: string;
  category: Category;
  difficulty: Difficulty;
  question: string;
  options: [QuestionOption, QuestionOption, QuestionOption, QuestionOption];
  correctAnswer: AnswerId;
  explanation: string;
  sourceTopic: string;
}
