export interface Flashcard {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const flashcards: Flashcard[] = [
  { id: 'fc-001', category: 'Convoy Operations', question: 'What is a convoy?', answer: 'A group of vehicles organized for the purpose of control and orderly movement.' },
  { id: 'fc-002', category: 'Convoy Operations', question: 'What are the three organizational elements of a convoy?', answer: 'March column, serial, and march unit.' },
  { id: 'fc-003', category: 'Convoy Operations', question: 'What is a march unit?', answer: 'The smallest organized subdivision of a convoy.' },
  { id: 'fc-004', category: 'Convoy Operations', question: 'What is a serial?', answer: 'A subdivision of a march column consisting of one or more march units.' },
  { id: 'fc-005', category: 'Convoy Operations', question: 'What is a march column?', answer: 'All vehicles using the same route under one commander.' },
  { id: 'fc-006', category: 'Convoy Operations', question: 'What is the Start Point?', answer: 'The point where a convoy begins organized movement under the control of the convoy commander.' },
  { id: 'fc-007', category: 'Convoy Operations', question: 'What is the Release Point?', answer: 'The point where convoy elements are released from centralized control.' },
  { id: 'fc-008', category: 'Convoy Operations', question: 'What is a checkpoint?', answer: 'A predetermined location used for reference, reporting, or control.' },
  { id: 'fc-009', category: 'Convoy Operations', question: 'What color flag identifies the lead vehicle of a convoy?', answer: 'Green.' },
  { id: 'fc-010', category: 'Convoy Operations', question: 'What color flag identifies the trail vehicle of a convoy?', answer: 'Blue.' },
  { id: 'fc-011', category: 'Convoy Communications and Discipline', question: 'What is the primary method of communication in a convoy?', answer: 'Radio.' },
  { id: 'fc-012', category: 'Convoy Communications and Discipline', question: 'What is the secondary method of communication in a convoy?', answer: 'Sound signals.' },
  { id: 'fc-013', category: 'Convoy Communications and Discipline', question: 'What is the contingency method of communication in a convoy?', answer: 'Visual signals.' },
  { id: 'fc-014', category: 'Convoy Communications and Discipline', question: 'What does march discipline require concerning visual signals?', answer: 'Visual signals must be relayed promptly.' },
  { id: 'fc-015', category: 'Convoy Communications and Discipline', question: 'What does march discipline require concerning traffic laws?', answer: 'Strict obedience to traffic regulations.' },
  { id: 'fc-016', category: 'Convoy Communications and Discipline', question: 'What does march discipline require concerning equipment?', answer: 'Proper care and operation of equipment.' },
  { id: 'fc-017', category: 'Convoy Communications and Discipline', question: 'What safety requirement applies during convoy halts?', answer: 'Observe all required safety and security precautions.' },
  { id: 'fc-018', category: 'Convoy Communications and Discipline', question: 'What activities may be performed during a convoy halt?', answer: 'Security, refueling, feeding, PMCS, and load inspections.' },
  { id: 'fc-019', category: 'Column Formations', question: 'What are the three common convoy column formations?', answer: 'Close column, open column, and infiltration.' },
  { id: 'fc-020', category: 'Column Formations', question: 'What is the normal interval between vehicles in a close column?', answer: 'Approximately 25 to 50 meters.' },
  { id: 'fc-021', category: 'Column Formations', question: 'What is the normal speed of a close column?', answer: 'Approximately 15 mph or 25 km/h.' },
  { id: 'fc-022', category: 'Column Formations', question: 'What is an advantage of a close column?', answer: 'It provides easier command and control.' },
  { id: 'fc-023', category: 'Column Formations', question: 'What is a disadvantage of a close column?', answer: 'The convoy is easier to detect and may create traffic congestion.' },
  { id: 'fc-024', category: 'Column Formations', question: 'What is the normal interval between vehicles in an open column?', answer: 'Approximately 100 meters.' },
  { id: 'fc-025', category: 'Column Formations', question: 'What is the normal speed of an open column?', answer: 'Approximately 25 mph or 40 km/h.' },
  { id: 'fc-026', category: 'Column Formations', question: 'What is an advantage of an open column?', answer: 'It provides greater dispersion and reduces traffic congestion.' },
  { id: 'fc-027', category: 'Column Formations', question: 'What is a disadvantage of an open column?', answer: 'Command and control are more difficult.' },
  { id: 'fc-028', category: 'Column Formations', question: 'Which formation provides the greatest security and deception?', answer: 'Infiltration.' },
  { id: 'fc-029', category: 'Column Formations', question: 'How do vehicles move in an infiltration formation?', answer: 'Vehicles are dispatched individually or in small groups at irregular intervals.' },
  { id: 'fc-030', category: 'Column Formations', question: 'What is a disadvantage of infiltration?', answer: 'It is difficult to control and takes longer to complete the movement.' },
  { id: 'fc-031', category: 'Ground Guide Procedures', question: 'What is the primary purpose of a ground guide?', answer: 'To safely direct vehicle movement when visibility is restricted or hazards are present.' },
  { id: 'fc-032', category: 'Ground Guide Procedures', question: 'How far should a ground guide remain from the vehicle when possible?', answer: 'Approximately 10 yards.' },
  { id: 'fc-033', category: 'Ground Guide Procedures', question: 'At what approximate angle should the front ground guide stand?', answer: 'About 45 degrees from the front corner of the vehicle.' },
  { id: 'fc-034', category: 'Ground Guide Procedures', question: 'Who normally controls vehicle movement when two ground guides are used?', answer: 'The front ground guide.' },
  { id: 'fc-035', category: 'Ground Guide Procedures', question: 'What is the responsibility of the rear ground guide?', answer: 'To observe rear hazards and relay information to the front ground guide.' },
  { id: 'fc-036', category: 'Ground Guide Procedures', question: 'How many ground guides should signal the driver at one time?', answer: 'Only one.' },
  { id: 'fc-037', category: 'Ground Guide Procedures', question: 'What must the driver do if the ground guide is no longer visible?', answer: 'Stop the vehicle immediately.' },
  { id: 'fc-038', category: 'Ground Guide Procedures', question: 'What must the driver do when conflicting signals are received?', answer: 'Stop the vehicle.' },
  { id: 'fc-039', category: 'Ground Guide Procedures', question: 'Where must a ground guide never stand?', answer: 'Between a moving vehicle and a fixed object.' },
  { id: 'fc-040', category: 'Ground Guide Procedures', question: 'Should a ground guide walk backward while guiding?', answer: 'No. The ground guide should face the vehicle while remaining aware of the direction of movement.' },
  { id: 'fc-041', category: 'Ground Guide Procedures', question: 'What should be completed before moving a vehicle in a congested area?', answer: 'A 360-degree walk-around to identify hazards.' },
  { id: 'fc-042', category: 'Ground Guide Procedures', question: 'Name three locations where ground guides may be required.', answer: 'Motor pools, fuel points, railheads, wash racks, or maintenance areas.' },
  { id: 'fc-043', category: 'Hand and Arm Signals', question: 'How is the Start Engine signal performed?', answer: 'Move the arm in a circular motion in front of the body to simulate cranking an engine.' },
  { id: 'fc-044', category: 'Hand and Arm Signals', question: 'How is the Stop Engine signal performed?', answer: 'Extend the arm and make a throat-cutting motion across the body.' },
  { id: 'fc-045', category: 'Hand and Arm Signals', question: 'How is the Slow Down signal performed?', answer: 'Extend the arm horizontally with the palm down and move the arm downward several times.' },
  { id: 'fc-046', category: 'Hand and Arm Signals', question: 'How is the Increase Speed signal performed?', answer: 'Raise a fist to shoulder level and move it rapidly up and down.' },
  { id: 'fc-047', category: 'Hand and Arm Signals', question: 'How is the Halt or Stop signal performed?', answer: 'Raise the hand with the palm facing the vehicle and hold it until the vehicle stops.' },
  { id: 'fc-048', category: 'Hand and Arm Signals', question: 'How is the Move in Reverse signal performed?', answer: 'Face the vehicle, raise both forearms with palms toward the vehicle, and move them forward and backward.' },
  { id: 'fc-049', category: 'Hand and Arm Signals', question: 'How is the Move Forward signal performed?', answer: 'Move both hands and forearms backward and forward with the palms facing the chest.' },
  { id: 'fc-050', category: 'Hand and Arm Signals', question: 'How is a left or right turn signaled?', answer: 'Extend one arm horizontally in the direction the vehicle must turn.' }
];

export const flashcardCategories = Array.from(new Set(flashcards.map((card) => card.category)));
