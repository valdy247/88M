export interface VehicleProfile {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  purpose: string;
  weight: string;
  speed: string;
  transmission: string;
  keyFacts: string[];
}

export const vehicleProfiles: VehicleProfile[] = [
  {
    id: 'm1070-het',
    name: 'M1070 HET',
    subtitle: 'Heavy Equipment Transporter',
    image: '/images/vehicles/m1070-het.webp',
    purpose: 'Moves the M1 Abrams and other extremely heavy tracked or wheeled equipment with a compatible semitrailer.',
    weight: 'About 45,500 lb curb weight (M1070A1 tractor)',
    speed: 'Up to 50 mph',
    transmission: 'Allison 4800SP, 7-speed automatic',
    keyFacts: ['8×8 configuration', '700 hp Caterpillar C18 on A1', 'Gross combined rating about 236,600 lb', 'Twin 55,000 lb winches']
  },
  {
    id: 'm1078-lmtv',
    name: 'M1078 LMTV',
    subtitle: '2½-Ton Cargo Truck',
    image: '/images/vehicles/m1078-lmtv.webp',
    purpose: 'Carries personnel, palletized cargo and general supplies on road or cross-country.',
    weight: 'About 17,000 lb curb weight; 5,000 lb cross-country payload',
    speed: 'About 58 mph governed',
    transmission: 'Allison automatic, 7 forward speeds on common A1 configuration',
    keyFacts: ['4×4 configuration', 'Central tire inflation system', 'Three-person cab', 'Cargo bed accepts troop seats and bows']
  },
  {
    id: 'm1083-mtv',
    name: 'M1083 MTV',
    subtitle: '5-Ton Cargo Truck',
    image: '/images/vehicles/m1083-mtv.webp',
    purpose: 'Provides medium tactical transport for troops, equipment and general cargo.',
    weight: 'About 22,000 lb curb weight; 10,000 lb cross-country payload',
    speed: 'About 58 mph governed',
    transmission: 'Allison automatic, 7 forward speeds on common A1 configuration',
    keyFacts: ['6×6 configuration', 'Central tire inflation system', 'Three-person cab', 'Higher payload than the LMTV']
  },
  {
    id: 'm1088-tractor',
    name: 'M1088 FMTV Tractor',
    subtitle: '5-Ton Tractor Truck',
    image: '/images/vehicles/m1088-fmtv-tractor.webp',
    purpose: 'Pulls semitrailers for tactical movement of cargo and equipment.',
    weight: 'About 22,000 lb curb weight; ratings depend on trailer and variant',
    speed: 'About 58 mph governed',
    transmission: 'Allison automatic, 7 forward speeds on common A1 configuration',
    keyFacts: ['6×6 configuration', 'Fifth-wheel coupling', 'Central tire inflation system', 'Designed for tactical trailer operations']
  },
  {
    id: 'm1120-pls',
    name: 'M1120 HEMTT LHS',
    subtitle: 'Load Handling System',
    image: '/images/vehicles/m1120-pls.webp',
    purpose: 'Loads, transports and unloads flatracks and compatible containers without separate material-handling equipment.',
    weight: 'About 50,000 lb curb weight; 22,000 lb payload class',
    speed: 'Up to about 62 mph on A4',
    transmission: 'Allison 4500SP, 5-speed automatic on A4',
    keyFacts: ['8×8 configuration', 'Hook-arm load handling system', 'Operated by one driver from the cab', 'Part of the HEMTT family']
  },
  {
    id: 'm915',
    name: 'M915',
    subtitle: 'Line-Haul Tractor',
    image: '/images/vehicles/m915.webp',
    purpose: 'Moves breakbulk cargo, containers, water and petroleum trailers primarily over improved roads.',
    weight: 'Roughly 20,000–22,000 lb curb weight, depending on variant',
    speed: 'Highway speed varies by model; later variants are governed near 65 mph',
    transmission: 'Automatic transmission; exact model and speeds vary by M915 variant',
    keyFacts: ['6×4 configuration on M915A3', '105,000 lb gross combination rating on A3', 'Commercial-style line-haul design', 'Not intended as a primary cross-country tractor']
  },
  {
    id: 'm939-series',
    name: 'M939 Series',
    subtitle: '5-Ton Tactical Truck Family',
    image: '/images/vehicles/m939-series.webp',
    purpose: 'Legacy family used for cargo, dump, tractor, wrecker and other tactical support missions.',
    weight: 'Typically about 21,000–24,000 lb empty, depending on body and variant',
    speed: 'Approximately 55 mph',
    transmission: 'Automatic on common A1/A2 models; configuration varies across the series',
    keyFacts: ['6×6 configuration', '5-ton cross-country payload class', 'Many specialized variants', 'Specifications must be checked against the exact model TM']
  },
  {
    id: 'm977-cargo',
    name: 'M977 HEMTT Cargo',
    subtitle: 'Heavy Expanded Mobility Tactical Truck',
    image: '/images/vehicles/m977-hemtt-cargo.webp',
    purpose: 'Transports ammunition, supplies and heavy cargo; many versions include a material-handling crane.',
    weight: 'About 38,000–41,000 lb curb weight; 10-ton payload class',
    speed: 'Up to about 62 mph on A4',
    transmission: 'Allison 4500SP, 5-speed automatic on A4',
    keyFacts: ['8×8 configuration', 'High off-road mobility', 'Cargo bed with tie-down provisions', 'Common logistics and ammunition carrier']
  },
  {
    id: 'm978-tanker',
    name: 'M978 HEMTT Tanker',
    subtitle: 'Fuel Servicing Truck',
    image: '/images/vehicles/m978-hemtt-tanker.webp',
    purpose: 'Transports and dispenses fuel to tactical vehicles, aircraft and equipment in field operations.',
    weight: 'About 39,000 lb empty; gross weight increases substantially when loaded',
    speed: 'Up to about 62 mph on A4',
    transmission: 'Allison 4500SP, 5-speed automatic on A4',
    keyFacts: ['8×8 configuration', 'Approximately 2,500-gallon fuel tank', 'Pumping and dispensing equipment', 'Hazard controls are essential during operation']
  },
  {
    id: 'm984-wrecker',
    name: 'M984 HEMTT Wrecker',
    subtitle: 'Heavy Recovery Vehicle',
    image: '/images/vehicles/m984-hemtt-wrecker.webp',
    purpose: 'Recovers disabled heavy wheeled vehicles and performs lift, tow and maintenance support tasks.',
    weight: 'About 53,000–55,000 lb curb weight, depending on variant',
    speed: 'Up to about 62 mph on A4',
    transmission: 'Allison 4500SP, 5-speed automatic on A4',
    keyFacts: ['8×8 configuration', 'Recovery winch and crane', 'Heavy-duty underlift/towing equipment', 'Used by maintenance and recovery teams']
  }
];
