import type { StripMapSymbolCard } from '../../data/strip-map-symbols';

const line = '#f8fafc';
const muted = '#94a3b8';

export function StripMapSymbol({ card }: { card: StripMapSymbolCard }) {
  const ties = Array.from({ length: 9 }, (_, index) => 44 + index * 14);

  return (
    <svg viewBox="0 0 180 180" role="img" aria-label={`Strip map symbol: ${card.name}`} className="h-48 w-48 max-w-full">
      {card.kind === 'assembly' && (
        <>
          <circle cx="90" cy="90" r="48" fill="none" stroke={line} strokeWidth="5" />
          <text x="90" y="83" textAnchor="middle" fill={muted} fontSize="14">UNIT</text>
          <text x="90" y="105" textAnchor="middle" fill={line} fontSize="22" fontWeight="700">{card.label}</text>
        </>
      )}
      {card.kind === 'point' && (
        <>
          <path d="M55 42 H125 V108 L90 145 L55 108 Z" fill="none" stroke={line} strokeWidth="5" />
          <line x1="56" y1="80" x2="124" y2="80" stroke={muted} strokeWidth="3" />
          <text x="90" y="69" textAnchor="middle" fill={line} fontSize={card.label === 'CKP' ? '19' : '24'} fontWeight="700">{card.label}</text>
        </>
      )}
      {card.kind === 'distance' && (
        <>
          <circle cx="38" cy="105" r="8" fill="none" stroke={line} strokeWidth="4" />
          <circle cx="142" cy="75" r="8" fill="none" stroke={line} strokeWidth="4" />
          <path d="M46 101 C75 72 104 108 134 79" fill="none" stroke={line} strokeWidth="4" />
          <text x="90" y="58" textAnchor="middle" fill={line} fontSize="24" fontWeight="700">{card.label}</text>
        </>
      )}
      {card.kind === 'route' && (
        <>
          <path d="M28 105 C62 70 70 116 105 82 C128 60 143 77 154 63" fill="none" stroke={muted} strokeWidth="5" />
          <ellipse cx="91" cy="91" rx="31" ry="24" fill="#1d4ed8" stroke={line} strokeWidth="4" />
          <text x="91" y="100" textAnchor="middle" fill="white" fontSize="28" fontWeight="800">{card.label}</text>
        </>
      )}
      {card.kind === 'direction' && (
        <>
          <line x1="90" y1="142" x2="90" y2="45" stroke={line} strokeWidth="5" />
          <path d="M90 34 L76 58 H104 Z" fill={line} />
          <text x="90" y="25" textAnchor="middle" fill={line} fontSize="22" fontWeight="700">{card.label}</text>
        </>
      )}
      {card.kind === 'road' && (
        <>
          {card.variant === 'primary' && <line x1="90" y1="25" x2="90" y2="155" stroke={line} strokeWidth="11" />}
          {card.variant === 'secondary' && (
            <>
              <rect x="72" y="24" width="36" height="132" fill="none" stroke={line} strokeWidth="4" />
              {[30, 62, 94, 126].map((y) => <rect key={y} x="73" y={y} width="34" height="16" fill={line} />)}
            </>
          )}
          {card.variant === 'surfaced' && (
            <>
              <line x1="80" y1="25" x2="80" y2="155" stroke={line} strokeWidth="4" />
              <line x1="100" y1="25" x2="100" y2="155" stroke={line} strokeWidth="4" />
            </>
          )}
          {card.variant === 'dirt' && (
            <>
              <line x1="80" y1="25" x2="80" y2="155" stroke={line} strokeWidth="4" strokeDasharray="5 9" />
              <line x1="100" y1="25" x2="100" y2="155" stroke={line} strokeWidth="4" strokeDasharray="5 9" />
            </>
          )}
          {card.variant === 'trail' && <line x1="90" y1="25" x2="90" y2="155" stroke={line} strokeWidth="4" strokeDasharray="5 9" />}
          {card.variant === 'impassable' && (
            <>
              <line x1="90" y1="25" x2="90" y2="155" stroke={line} strokeWidth="5" />
              {ties.slice(2, 7).map((y) => <line key={y} x1="69" y1={y + 10} x2="111" y2={y - 10} stroke="#f59e0b" strokeWidth="5" />)}
            </>
          )}
          {card.variant === 'msr' && (
            <>
              <line x1="90" y1="25" x2="90" y2="155" stroke={line} strokeWidth="5" />
              <text x="120" y="98" fill="#f59e0b" fontSize="20" fontWeight="800" transform="rotate(-90 120 98)">{card.label}</text>
            </>
          )}
        </>
      )}
      {card.kind === 'railroad' && (
        <>
          {card.variant !== 'double' && <line x1="90" y1="23" x2="90" y2="157" stroke={line} strokeWidth="5" />}
          {card.variant === 'double' && (
            <>
              <line x1="78" y1="23" x2="78" y2="157" stroke={line} strokeWidth="5" />
              <line x1="102" y1="23" x2="102" y2="157" stroke={line} strokeWidth="5" />
            </>
          )}
          {ties.map((y) => {
            if (card.variant === 'single-narrow') {
              return <line key={y} x1="69" y1={y} x2="96" y2={y} stroke={line} strokeWidth="3" />;
            }

            const half = card.variant === 'double' ? 32 : 25;
            return <line key={y} x1={90 - half} y1={y} x2={90 + half} y2={y} stroke={line} strokeWidth="3" />;
          })}
        </>
      )}
      {card.kind === 'crossing' && (
        <>
          <path d="M28 68 H152 M28 112 H152" stroke={line} strokeWidth="5" />
          <path d="M76 25 C76 62 104 62 104 90 C104 118 76 118 76 155" fill="none" stroke={muted} strokeWidth="5" />
          <text x="90" y="96" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="700">{card.label}</text>
        </>
      )}
      {card.kind === 'bridge' && (
        <>
          <path d="M28 70 H68 M112 70 H152 M28 110 H68 M112 110 H152" stroke={line} strokeWidth="5" />
          <path d="M67 52 V128 M113 52 V128" stroke={line} strokeWidth="5" />
          <path d="M58 62 H122 M58 118 H122" stroke={muted} strokeWidth="3" />
          <text x="90" y="94" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="700">{card.label}</text>
        </>
      )}
    </svg>
  );
}
