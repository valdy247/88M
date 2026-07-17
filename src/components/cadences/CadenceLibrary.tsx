'use client';

import { useMemo, useState } from 'react';
import { ExternalLink, Search } from 'lucide-react';

const cadences = [
  ['Airborne Ranger', 'https://www.jonathanmichaelfleming.com/airborne-ranger-lyrics'],
  ['Beating My Drum / My Granny', 'https://www.jonathanmichaelfleming.com/beating-my-drum-lyrics'],
  ['Blood Upon the Risers', 'https://www.jonathanmichaelfleming.com/blood-upon-the-risers-lyrics'],
  ['C-130 (Army)', 'https://www.jonathanmichaelfleming.com/c130-lyrics'],
  ['Captain Jack', 'https://www.jonathanmichaelfleming.com/captain-jack-lyrics'],
  ['Come On Over', 'https://www.jonathanmichaelfleming.com/come-on-over-lyrics'],
  ["Don't Let the Green Grass Fool You", 'https://www.jonathanmichaelfleming.com/dont-let-the-green-grass-fool-you-lyrics'],
  ['Down by the River', 'https://www.jonathanmichaelfleming.com/down-by-the-river-cadence'],
  ['Everywhere I Go', 'https://www.jonathanmichaelfleming.com/everywhere-i-go-lyrics'],
  ['Fallen Soldiers', 'https://www.jonathanmichaelfleming.com/fallen-soldiers-lyrics'],
  ['Fallen Soldiers (Rock Version)', 'https://www.jonathanmichaelfleming.com/fallen-soldiers'],
  ["Hail O' Infantry", 'https://www.jonathanmichaelfleming.com/hail-o-infantry-lyrics'],
  ['Hard Work', 'https://www.jonathanmichaelfleming.com/hardwork-cadence'],
  ['Here We Go Again', 'https://www.jonathanmichaelfleming.com/here-we-go-again'],
  ['Hey Jody (I Wonder)', 'https://www.jonathanmichaelfleming.com/hey-jody'],
  ['Hi Ho Lock and Load', 'https://www.jonathanmichaelfleming.com/hi-ho-lock-and-load-lyrics'],
  ['I Left My Home', 'https://www.jonathanmichaelfleming.com/i-left-my-home-lyrics'],
  ['I Saw the Taliban', 'https://www.jonathanmichaelfleming.com/i-saw-the-taliban-lyrics'],
  ['In the Early Morning', 'https://www.jonathanmichaelfleming.com/in-the-early-morning'],
  ['Interlude (Shoot Him in the Head)', 'https://www.jonathanmichaelfleming.com/copy-of-i-saw-the-taliban-cadence'],
  ["Interlude II (Bet You Can't Count to One)", 'https://www.jonathanmichaelfleming.com/interlude-ii-bet-you-cant-count-to-one-lyrics'],
  ["It's Alright (Remember JFK)", 'https://www.jonathanmichaelfleming.com/its-alright-remember-jfk-lyrics'],
  ['Killing the Baby Seals', 'https://www.jonathanmichaelfleming.com/killing-the-baby-seals'],
  ['Letter in the Mail', 'https://www.jonathanmichaelfleming.com/letter-in-the-mail-lyrics'],
  ['Low Rider', 'https://www.jonathanmichaelfleming.com/low-rider'],
  ["Mama Mama Can't You See", 'https://www.jonathanmichaelfleming.com/mama-mama-cant-you-see-lyrics'],
  ['Mama Told Johnny', 'https://www.jonathanmichaelfleming.com/mama-told-johnny-lyrics'],
  ['Medal of Honor', 'https://www.jonathanmichaelfleming.com/medal-of-honor-lyrics'],
  ['Men at War', 'https://www.jonathanmichaelfleming.com/men-at-war-lyrics'],
  ["My Girl's a Vegetable", 'https://www.jonathanmichaelfleming.com/my-girl-is-a-vegetable'],
  ['My Way or the Highway', 'https://www.jonathanmichaelfleming.com/my-way-or-the-highway-lyrics'],
  ['Pebbles and Bam Bam', 'https://www.jonathanmichaelfleming.com/pebbles-and-bambam-lyrics'],
  ['Rock Steady', 'https://www.jonathanmichaelfleming.com/rock-steady'],
  ['Some Say Freedom Is Free', 'https://www.jonathanmichaelfleming.com/some-say-freedom-is-free'],
  ["Somewhere There's a Mother", 'https://www.jonathanmichaelfleming.com/somewhere-there-is-a-mother'],
  ['Sound Off (The Duckworth Chant)', 'https://www.jonathanmichaelfleming.com/sound-off-the-duckworth-chant'],
  ['Steam Roller (Army)', 'https://www.jonathanmichaelfleming.com/steam-roller-army-version-lyrics'],
  ['Steam Roller (Navy)', 'https://www.jonathanmichaelfleming.com/steam-roller-navy-version-lyrics'],
  ['The Bearded Ninja (Chuck Norris)', 'https://www.jonathanmichaelfleming.com/the-bearded-ninja'],
  ['They Say That in the Army', 'https://www.jonathanmichaelfleming.com/they-say-that-in-the-army-lyrics'],
  ['These Are the Weapons', 'https://www.jonathanmichaelfleming.com/these-are-the-weapons-cadences'],
  ['Tiny Bubbles', 'https://www.jonathanmichaelfleming.com/tiny-bubbles-lyrics-military-cadence'],
  ['VICTORY', 'https://www.jonathanmichaelfleming.com/victory-military-cadence'],
  ['War with a Soldier', 'https://www.jonathanmichaelfleming.com/war-with-a-soldier-lyrics'],
  ['When I Was 1 / My Daddy', 'https://www.jonathanmichaelfleming.com/when-i-was-1-my-daddy-lyrics'],
  ["You Won't Believe What I've Seen", 'https://www.jonathanmichaelfleming.com/you-wont-believe-what-ive-seen-lyrics'],
  ['Yellow Bird', 'https://www.jonathanmichaelfleming.com/yellow-bird-lyrics'],
  ['Yellow Ribbon', 'https://www.jonathanmichaelfleming.com/yellow-ribbon-lyrics'],
  ['Yogi Bear', 'https://www.jonathanmichaelfleming.com/yogi-bear-cadence'],
  ['Your Son Is Gone', 'https://www.jonathanmichaelfleming.com/your-son-is-gone-lyrics']
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
