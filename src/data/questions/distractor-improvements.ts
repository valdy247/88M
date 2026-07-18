import type { Question, QuestionOption } from '../../types/question';

const improvedOptions: Record<string, [string, string, string, string]> = {
  'convoy-review-01': [
    'Vehicles sharing a route while remaining under separate unit control',
    'A group of vehicles organized for control and orderly movement',
    'Two or more military vehicles dispatched within the same movement window',
    'A march unit traveling between the Start Point and Release Point'
  ],
  'convoy-review-08': [
    'Sound signals',
    'Visual signals passed from vehicle to vehicle',
    'Messenger vehicles moving between march units',
    'Prearranged checkpoint reports'
  ],
  'discipline-review-01': [
    'Acknowledge it and wait for the convoy commander to relay it',
    'Relay it promptly to the vehicle behind',
    'Relay it only after confirming it by radio',
    'Hold it until the entire march unit has slowed'
  ],
  'discipline-review-02': [
    'Following traffic regulations and operating equipment properly',
    'Maintaining the planned interval even when traffic laws require adjustment',
    'Correcting a minor route deviation before notifying convoy control',
    'Delaying fault reports until the next scheduled halt to preserve movement'
  ],
  'adverse-review-01': [
    'Maintain convoy speed but increase following distance',
    'Reduce speed, increase following distance, and use extra caution',
    'Reduce speed while keeping the planned dry-road interval',
    'Follow the lead vehicle more closely to maintain visual contact'
  ],
  'adverse-review-02': [
    'Depth, current, bottom condition, and exit point',
    'Depth, bank width, vehicle speed, and tire pressure',
    'Current, convoy interval, approach angle, and radio range',
    'Bottom condition, route classification, vehicle weight, and checkpoint location'
  ],
  'additional-21': [
    'Enter slowly and use the lead vehicle to confirm the surface',
    'Check water depth and bottom firmness',
    'Check only whether the water is below the vehicle fording limit',
    'Maintain momentum while a ground guide checks the exit bank'
  ],
  'additional-23': [
    'Maintaining steady momentum',
    'Sudden acceleration and hard braking',
    'Using a lower gear before entering the soft area',
    'Making gradual steering corrections to stay in existing tracks'
  ],
  'cargo-01': [
    'Centered over the highest point of the load to prevent shifting',
    'At the front of the platform to increase steering control',
    'On the bottom',
    'At the rear of the platform to improve axle balance'
  ],
  'accident-14': [
    'Sections I–IX',
    'Sections I–VIII, with Section IX reserved for the supervisor',
    'Sections I–VI and the certification block in Section X',
    'Sections I–VII, with the remaining sections completed by law enforcement'
  ],
  'pmcs-04': [
    'Record the deficiency and continue unless it affects vehicle movement',
    'Report the fault to maintenance',
    'Apply a status symbol and wait until the next scheduled service',
    'Notify the dispatcher after completing the mission'
  ],
  'pmcs-11': [
    'Whether the operator can prevent the leak from forming additional drops',
    'The limits and instructions in the applicable technical manual',
    'Whether the leak is entered on DA Form 5988-E before dispatch',
    'Whether the equipment remains fully mission capable during a road test'
  ],
  'ground-03': [
    'Continue at idle speed until the guide becomes visible',
    'Stop immediately',
    'Stop only if the guide also stops signaling',
    'Continue to the last position indicated by the guide'
  ],
  'formation-review-05': [
    'As complete march units at uniform intervals',
    'Individually or in small groups at irregular intervals',
    'Individually at fixed intervals controlled from the Start Point',
    'In small groups at uniform intervals with continuous centralized control'
  ],
  'ground-11': [
    'Whenever the vehicle is operating outside a marked roadway',
    'At congested locations like motor pools or fuel points',
    'Whenever the driver must reverse more than one vehicle length',
    'At every halt where vehicles must close their intervals'
  ],
  'signal-11': [
    'Extend both arms and move them up and down with open hands toward the ground',
    'Extend both arms downward and sweep them outward from the body',
    'Point toward the ground with both hands while stepping away from the vehicle',
    'Raise both forearms and lower them repeatedly with closed fists'
  ],
  'radio-07': [
    'Transmit sensitive data only when required and authorized',
    'Transmit sensitive data whenever it improves mission coordination',
    'Replace sensitive terms with unofficial abbreviations before transmitting',
    'Transmit sensitive details after confirming only the receiving call sign'
  ],
  'radio-08': [
    'A numeric or letter identifier used to conceal true identity',
    'A short nickname selected by the operator for easier recognition',
    'A unit designation combined with its current location',
    'The operator’s initials followed by the vehicle bumper number'
  ],
  'radio-13': [
    'Repeat the complete transmission more slowly without using prowords',
    'Use prowords and keep the voice clear and unambiguous',
    'Increase volume and remove pauses between message groups',
    'Use the phonetic alphabet for every word in the transmission'
  ],
  'radio-16': [
    'To shorten transmissions by replacing complete words',
    'To improve clarity and reduce mistakes',
    'To authenticate the transmitting station',
    'To conceal the meaning of letters from unauthorized listeners'
  ],
  'strip-05': [
    'By including a directional indicator or north arrow',
    'By placing an arrow at every checkpoint along the route',
    'By drawing the destination at the top of the page',
    'By orienting each route-number symbol toward the destination'
  ],
  'strip-11': [
    'Checkpoint sequence numbers and scheduled arrival times',
    'Landmarks and bridges',
    'Vehicle serial numbers and march-unit designations',
    'Radio call signs assigned at each control point'
  ],
  'strip-20': [
    'An impassable section of road',
    'A road segment requiring reduced convoy speed',
    'A route segment controlled by a checkpoint',
    'A planned bypass around a restricted bridge'
  ],
  'strip-21': [
    'Single or double track and broad or narrow gauge',
    'Single or double track and military or civilian use',
    'Broad or narrow gauge and primary or secondary classification',
    'Single or double track and above- or below-grade crossing only'
  ],
  'strip-22': [
    'Whether one passes above, below, or at grade',
    'Whether the crossing is controlled, uncontrolled, or restricted',
    'Whether the routes are primary, secondary, or unsurfaced',
    'Whether one route is wider, narrower, or the same width'
  ],
  'salute-06': [
    'Weapons, vehicles, or communications equipment observed',
    'The activity being performed with the equipment',
    'The unit designation believed to own the equipment',
    'The time and location where the equipment was observed'
  ],
  'salute-08': [
    'To include every observation even when it delays the report',
    'To reduce the need to send follow-up corrections',
    'To ensure information is clear and actionable',
    'To keep every SALUTE category the same length'
  ],
  'accident-06': [
    'Leave it securely in or on the vehicle',
    'Hold it until the vehicle owner contacts the unit',
    'Submit it with the SF 91 without leaving a copy',
    'Give it only to responding civilian law enforcement'
  ],
  'accident-10': [
    'Record relevant vehicle condition',
    'Express an opinion about fault',
    'Document the apparent sequence of events without assigning blame',
    'Record road, weather, and witness information'
  ],
  'pmcs-05': [
    'It identifies a condition that can cause equipment damage',
    'It indicates conditions that may cause injury or death',
    'It emphasizes information needed to complete a procedure correctly',
    'It identifies a fault that makes equipment non-mission-capable'
  ],
  'pmcs-09': [
    'Class II leakage is allowable regardless of the fluid involved',
    'Class II leakage forms drops but not enough to fall',
    'Class I leakage forms drops that fall from the checked item',
    'Class III leakage may be operated within limits when entered on the 5988-E'
  ],
  'pmcs-12': [
    'Record the item as not applicable and continue the mission',
    'Report the condition and stop if unsafe',
    'Complete the remaining checks and defer the inaccessible item until after dispatch',
    'Use the previous PMCS result if the item was serviceable then'
  ],
  'pmcs-16': [
    'Operation may be allowed within TM limits, except fuel leakage is not treated as allowable minor leakage',
    'Operation is allowed whenever a Class I or II leak is entered on DA Form 5988-E',
    'Class I fuel leakage is allowable when it does not form drops',
    'Minor leakage is allowable only when the TM lists the equipment as fully mission capable'
  ],
  'da-04': [
    'A deficiency that makes the equipment non-mission-capable with no authorized operation',
    'A deficiency allowing limited operation under conditions',
    'A fault corrected by the operator during PMCS',
    'A deficiency awaiting parts but not affecting operation'
  ],
  'da-07': [
    'The operator records faults found during inspections',
    'The operator reports faults verbally and maintenance records them later',
    'The operator records only faults that make equipment non-mission-capable',
    'The operator completes the form only after maintenance verifies each fault'
  ],
  'dispatch-08': [
    'Complete it accurately before the mission begins',
    'Complete the operator portion before movement and finish the remaining entries after return',
    'Carry the previous dispatch until the first scheduled halt',
    'Begin the mission once authorization is verbal and complete the form at destination'
  ],
  'dispatch-06': [
    'To verify the operator completed the most recent PMCS',
    'To document who is responsible for the equipment',
    'To confirm the operator is assigned to the convoy manifest',
    'To identify who authorized the maintenance status symbol'
  ],
  'tm-04': [
    'Warnings address injury risks, cautions protect equipment, notes clarify information',
    'Warnings protect equipment, cautions address injury risks, notes identify optional steps',
    'Warnings and cautions both address injury risks, while notes protect equipment',
    'Warnings identify immediate hazards, cautions identify schedules, notes authorize deviations'
  ],
  'tm-06': [
    'The chapter number is fixed by the equipment category in the TM number',
    'Chapter numbers vary by manual and should be referenced from the correct publication',
    'PMCS is always located in Chapter 4 of every operator-level TM',
    'Chapter order is standardized, but chapter numbers change only by maintenance level'
  ],
  'ground-12': [
    'Remain where the driver can see the guide, even if that position enters the vehicle path',
    'Remain clear of the vehicle’s path and hazards',
    'Stay exactly 10 yards from the vehicle throughout every maneuver',
    'Move to the rear blind spot when a second guide is controlling the front'
  ],
  'ground-05': [
    'At the front corner while visible to the driver and clear of the path',
    'Directly in front of or behind the vehicle',
    'At the rear corner while visible to the driver and clear of the path',
    'On the driver’s side while maintaining the required clearance'
  ],
  'ground-09': [
    'Stop the vehicle',
    'Follow the signal from the guide closest to the hazard',
    'Continue only at idle speed until the signals agree',
    'Follow the front guide while requesting clarification by hand signal'
  ],
  'signal-05': [
    'Extend the arm horizontally in the direction of the turn',
    'Extend the arm toward the turn and move the forearm in a circular motion',
    'Raise the arm on the side opposite the turn and point across the body',
    'Extend both arms horizontally and lower the arm opposite the turn'
  ],
  'convoy-review-09': [
    'Security, PMCS, refueling, and load inspection',
    'Security, PMCS, refueling, and changing march order without approval',
    'Security, feeding, load inspection, and extending the halt beyond the movement schedule',
    'PMCS, refueling, load inspection, and reducing local security to speed departure'
  ],
  'formation-review-06': [
    'It improves control but requires shorter vehicle intervals',
    'It is difficult to control and takes longer to complete',
    'It reduces detection while shortening total movement time',
    'It improves march-unit control but increases route congestion'
  ],
  'halt-review-01': [
    'Staggered column',
    'Coil',
    'Herringbone',
    'Close column'
  ],
  'vehicle-spec-08': [
    'Inter-axle, center/off, and 8x8',
    'Inter-axle, 4x4, and 8x8',
    'Axle lock, transfer lock, and 8x8',
    'Inter-axle, center/off, and low range'
  ]
};

export function improveDistractors(question: Question): Question {
  const replacement = improvedOptions[question.id];
  if (!replacement) return question;
  const options = question.options.map((option, index) => ({ ...option, text: replacement[index] })) as [QuestionOption, QuestionOption, QuestionOption, QuestionOption];
  return { ...question, options };
}
