export type StripMapSymbolKind =
  | 'assembly'
  | 'point'
  | 'distance'
  | 'route'
  | 'direction'
  | 'road'
  | 'railroad'
  | 'crossing'
  | 'bridge';

export interface StripMapSymbolCard {
  id: string;
  name: string;
  description: string;
  kind: StripMapSymbolKind;
  variant?: string;
  label?: string;
}

export const stripMapSymbolCards: StripMapSymbolCard[] = [
  { id: 'sms-01', name: 'Assembly Area', description: 'A circle containing the unit designation identifies an assembly area.', kind: 'assembly', label: 'AA' },
  { id: 'sms-02', name: 'Start Point', description: 'The point where organized convoy movement begins.', kind: 'point', label: 'SP' },
  { id: 'sms-03', name: 'Checkpoint', description: 'A designated reference or control point along the route.', kind: 'point', label: 'CKP' },
  { id: 'sms-04', name: 'Release Point', description: 'The point where convoy elements are released from centralized control.', kind: 'point', label: 'RP' },
  { id: 'sms-05', name: 'Halt / Rest Area', description: 'Halt and rest areas are often shown as designated checkpoints.', kind: 'point', label: 'CKP' },
  { id: 'sms-06', name: 'Distance Between Points', description: 'A marked segment records the distance between route points.', kind: 'distance', label: '25K' },
  { id: 'sms-07', name: 'Route Number', description: 'A route marker identifies the planned route number.', kind: 'route', label: '7' },
  { id: 'sms-08', name: 'Directional Indicator', description: 'The north arrow or directional indicator orients the strip map.', kind: 'direction', label: 'N' },
  { id: 'sms-09', name: 'Primary Road', description: 'A heavy solid line represents a primary road.', kind: 'road', variant: 'primary' },
  { id: 'sms-10', name: 'Secondary Road', description: 'Alternating filled sections identify a secondary road.', kind: 'road', variant: 'secondary' },
  { id: 'sms-11', name: 'Other Surfaced Road', description: 'Two continuous parallel lines identify another surfaced road.', kind: 'road', variant: 'surfaced' },
  { id: 'sms-12', name: 'Dirt Road', description: 'Two parallel dotted lines identify a dirt road.', kind: 'road', variant: 'dirt' },
  { id: 'sms-13', name: 'Trail', description: 'A single dotted line identifies a trail.', kind: 'road', variant: 'trail' },
  { id: 'sms-14', name: 'Impassable Section of Road', description: 'Diagonal obstruction marks across a road identify an impassable section.', kind: 'road', variant: 'impassable' },
  { id: 'sms-15', name: 'Main Supply Route', description: 'The route is marked MSR to identify a main supply route.', kind: 'road', variant: 'msr', label: 'MSR' },
  { id: 'sms-16', name: 'Single-Track Railroad — Broad Gauge', description: 'A single rail line with long cross ties represents broad gauge.', kind: 'railroad', variant: 'single-broad' },
  { id: 'sms-17', name: 'Single-Track Railroad — Narrow Gauge', description: 'A single rail line with short ties extending mostly to one side represents narrow gauge.', kind: 'railroad', variant: 'single-narrow' },
  { id: 'sms-18', name: 'Double-Track Railroad — Standard Gauge', description: 'Two rail lines identify a double-track standard-gauge railroad.', kind: 'railroad', variant: 'double' },
  { id: 'sms-19', name: 'Crossing', description: 'Crossing symbols show whether a route passes above, below, or at grade.', kind: 'crossing', label: 'ABOVE · BELOW · GRADE' },
  { id: 'sms-20', name: 'Bridge', description: 'The bridge symbol may identify a highway bridge or a railroad bridge.', kind: 'bridge', label: 'HIGHWAY / RAILROAD' }
];
