'use client';

import { useMemo, useState } from 'react';
import { ExternalLink, Search } from 'lucide-react';

const cadences = [
  ['Airborne Ranger', 'https://www.jonathanmichaelfleming.com/airborne-ranger-lyrics'],
  ['Fallen Soldiers', 'https://www.jonathanmichaelfleming.com/fallen-soldiers-lyrics'],
  ['Hey Jody (I Wonder)', 'https://www.jonathanmichaelfleming.com/hey-jody'],
  ['I Left My Home', 'https://www.jonathanmichaelfleming.com/i-left-my-home-lyrics'],
  ['I Saw the Taliban', 'https://www.jonathanmichaelfleming.com/i-saw-the-taliban-lyrics'],
  ['Medal of Honor', 'https://www.jonathanmichaelfleming.com/medal-of-honor-lyrics'],
  ['Men at War', 'https://www.jonathanmichaelfleming.com/men-at-war-lyrics'],
  ['Some Say Freedom Is Free', 'https://www.jonathanmichaelfleming.com/some-say-freedom-is-free'],
  ['Sound Off (The Duckworth Chant)', 'https://www.jonathanmichaelfleming.com/sound-off-the-duckworth-chant'],
  ['The Bearded Ninja (Chuck Norris)', 'https://www.jonathanmichaelfleming.com/the-bearded-ninja'],
  ['These Are the Weapons', 'https://www.jonathanmichaelfleming.com/these-are-the-weapons-cadences'],
  ['Yellow Bird', 'https://www.jonathanmichaelfleming.com/yellow-bird-lyrics']
] as const;

export function CadenceLibrary() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return normalized ? cadences.filter(([name]) => name.toLowerCase().includes(normalized)) : cadences;
  }, [query]);

  return (
    <section className="mt-6">
      <label className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-[#111214] px-4 py-3">
        <Search className="h-5 w-5 text-amber-300" />
        <input value={query} onChange={(event) => setQuery(event.target.value)} className="w-full bg-transparent text-white placeholder:text-slate-500 focus:outline-none" placeholder="Search cadences" />
      </label>
      <div className="mt-4 grid gap-3">
        {filtered.map(([name, url]) => (
          <a key={url} href={url} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-[#111214] px-5 py-4 font-semibold transition hover:border-amber-500/60 hover:bg-slate-900">
            <span>{name}</span>
            <ExternalLink className="h-4 w-4 shrink-0 text-amber-300" />
          </a>
        ))}
        {!filtered.length && <p className="rounded-2xl border border-slate-800 p-5 text-center text-sm text-slate-400">No cadences found.</p>}
      </div>
    </section>
  );
}
