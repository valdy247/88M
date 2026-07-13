import type { Question } from '../../types/question';

export const groundGuides: Question[] = [
  {
    id: 'ground-01',
    category: 'Ground Guide Procedures',
    difficulty: 'easy',
    question: 'What is the role of a ground guide when visibility is restricted?',
    options: [
      { id: 'A', text: 'To direct vehicle movement and help the driver avoid hazards' },
      { id: 'B', text: 'To drive the vehicle while the driver watches' },
      { id: 'C', text: 'To walk ahead of the vehicle and watch from the side' },
      { id: 'D', text: 'To maintain radio silence until the vehicle stops' }
    ],
    correctAnswer: 'A',
    explanation: 'Ground guides direct movement and help the driver avoid hazards when visibility is limited.',
    sourceTopic: 'Ground Guide Procedures'
  },
  {
    id: 'ground-02',
    category: 'Ground Guide Procedures',
    difficulty: 'easy',
    question: 'How many ground guides should give signals to the driver at one time?',
    options: [
      { id: 'A', text: 'Only one' },
      { id: 'B', text: 'Two or more' },
      { id: 'C', text: 'None on the vehicle’s path' },
      { id: 'D', text: 'The commander and the driver' }
    ],
    correctAnswer: 'A',
    explanation: 'Only one ground guide gives signals at a time to avoid conflicting instructions.',
    sourceTopic: 'Ground Guide Procedures'
  },
  {
    id: 'ground-03',
    category: 'Ground Guide Procedures',
    difficulty: 'medium',
    question: 'What should the driver do if they cannot see the ground guide?',
    options: [
      { id: 'A', text: 'Continue slowly and listen for commands' },
      { id: 'B', text: 'Stop immediately' },
      { id: 'C', text: 'Use the horn to locate the guide' },
      { id: 'D', text: 'Reverse until visibility improves' }
    ],
    correctAnswer: 'B',
    explanation: 'If the driver loses sight of the ground guide, they should stop immediately.',
    sourceTopic: 'Ground Guide Procedures'
  },
  {
    id: 'ground-04',
    category: 'Ground Guide Procedures',
    difficulty: 'medium',
    question: 'What should a ground guide do before signaling a vehicle movement?',
    options: [
      { id: 'A', text: 'Coordinate signals with the driver' },
      { id: 'B', text: 'Stand directly in front of the vehicle' },
      { id: 'C', text: 'Walk backward while guiding the vehicle' },
      { id: 'D', text: 'Give rapid, continuous hand signals' }
    ],
    correctAnswer: 'A',
    explanation: 'Ground guides must coordinate signals with the driver before movement.',
    sourceTopic: 'Ground Guide Procedures'
  },
  {
    id: 'ground-05',
    category: 'Ground Guide Procedures',
    difficulty: 'hard',
    question: 'Where should a ground guide avoid standing while the vehicle is moving?',
    options: [
      { id: 'A', text: 'Beside the driver’s door' },
      { id: 'B', text: 'Directly in front of or behind the vehicle' },
      { id: 'C', text: 'At least 10 yards from the vehicle' },
      { id: 'D', text: 'On the same side as the rear-view mirror' }
    ],
    correctAnswer: 'B',
    explanation: 'Ground guides should avoid standing directly in front of or behind the vehicle for safety.',
    sourceTopic: 'Ground Guide Procedures'
  },
  {
    id: 'ground-06',
    category: 'Ground Guide Procedures',
    difficulty: 'medium',
    question: 'What distance is generally recommended between a ground guide and the vehicle?',
    options: [
      { id: 'A', text: 'Approximately 10 yards' },
      { id: 'B', text: 'Within arm’s reach' },
      { id: 'C', text: 'Less than 5 feet' },
      { id: 'D', text: 'Directly next to the tires' }
    ],
    correctAnswer: 'A',
    explanation: 'A ground guide should generally remain about 10 yards away where applicable.',
    sourceTopic: 'Ground Guide Procedures'
  },
  {
    id: 'ground-07',
    category: 'Ground Guide Procedures',
    difficulty: 'easy',
    question: 'Who normally controls the movement of the vehicle?',
    options: [
      { id: 'A', text: 'The rear ground guide' },
      { id: 'B', text: 'The front ground guide' },
      { id: 'C', text: 'The vehicle commander' },
      { id: 'D', text: 'The vehicle crew member' }
    ],
    correctAnswer: 'B',
    explanation: 'The front ground guide normally controls the movement.',
    sourceTopic: 'Ground Guide Procedures'
  },
  {
    id: 'ground-08',
    category: 'Ground Guide Procedures',
    difficulty: 'medium',
    question: 'Why might a rear ground guide be used during vehicle movement?',
    options: [
      { id: 'A', text: 'To direct radio traffic' },
      { id: 'B', text: 'To observe hazards and relay information' },
      { id: 'C', text: 'To correct the driver’s mistakes' },
      { id: 'D', text: 'To mark the route with panels' }
    ],
    correctAnswer: 'B',
    explanation: 'A rear ground guide may observe hazards and relay information to the driver.',
    sourceTopic: 'Ground Guide Procedures'
  },
  {
    id: 'ground-09',
    category: 'Ground Guide Procedures',
    difficulty: 'hard',
    question: 'What should the driver do if conflicting signals are received?',
    options: [
      { id: 'A', text: 'Stop the vehicle' },
      { id: 'B', text: 'Continue based on the front guide' },
      { id: 'C', text: 'Ask the rear guide to take over' },
      { id: 'D', text: 'Switch to a different lane' }
    ],
    correctAnswer: 'A',
    explanation: 'If conflicting signals are received, the driver should stop the vehicle.',
    sourceTopic: 'Ground Guide Procedures'
  },
  {
    id: 'ground-10',
    category: 'Ground Guide Procedures',
    difficulty: 'easy',
    question: 'What action should a ground guide take before certain vehicle movements?',
    options: [
      { id: 'A', text: 'Perform a 360-degree walk-around' },
      { id: 'B', text: 'Sound the horn repeatedly' },
      { id: 'C', text: 'Put on blinders' },
      { id: 'D', text: 'Raise both hands overhead' }
    ],
    correctAnswer: 'A',
    explanation: 'A 360-degree walk-around identifies hazards before movement.',
    sourceTopic: 'Ground Guide Procedures'
  },
  {
    id: 'ground-11',
    category: 'Ground Guide Procedures',
    difficulty: 'medium',
    question: 'When is a ground guide commonly required?',
    options: [
      { id: 'A', text: 'Only during night operations' },
      { id: 'B', text: 'At congested locations like motor pools or fuel points' },
      { id: 'C', text: 'Only on highways' },
      { id: 'D', text: 'Only for small vehicles' }
    ],
    correctAnswer: 'B',
    explanation: 'Ground guides may be required at congested locations and other busy areas.',
    sourceTopic: 'Ground Guide Procedures'
  },
  {
    id: 'ground-12',
    category: 'Ground Guide Procedures',
    difficulty: 'hard',
    question: 'What is the most important rule for a ground guide to follow?',
    options: [
      { id: 'A', text: 'Always give the driver a signal before moving' },
      { id: 'B', text: 'Remain clear of the vehicle’s path and hazards' },
      { id: 'C', text: 'Slow the vehicle by grabbing its bumper' },
      { id: 'D', text: 'Walk backward while signaling' }
    ],
    correctAnswer: 'B',
    explanation: 'Ground guides should remain clear of the vehicle’s path and hazards for safety.',
    sourceTopic: 'Ground Guide Procedures'
  }
];
