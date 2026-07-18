'use client';

import Image from 'next/image';
import { Plus } from 'lucide-react';
import type { VehicleProfile } from '../../data/vehicles';

export function VehicleGallery({ vehicles }: { vehicles: VehicleProfile[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {vehicles.map((vehicle) => (
        <article key={vehicle.id} className="overflow-hidden rounded-3xl border border-slate-800 bg-[#111214] shadow-glow">
          <div className="relative aspect-[4/3] bg-slate-950">
            <Image src={vehicle.image} alt={vehicle.name} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
          </div>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 marker:content-none">
              <div><h2 className="text-xl font-bold text-white">{vehicle.name}</h2><p className="text-sm text-amber-300">{vehicle.subtitle}</p></div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-500/50 bg-amber-500/10 text-amber-300"><Plus className="h-5 w-5 transition-transform group-open:rotate-45" /></span>
            </summary>
            <div className="border-t border-slate-800 px-5 pb-5 pt-4 text-sm text-slate-300">
              <p className="leading-6">{vehicle.purpose}</p>
              <dl className="mt-4 grid gap-3">
                <div className="rounded-2xl bg-slate-900/80 p-3"><dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Weight / capacity</dt><dd className="mt-1 text-white">{vehicle.weight}</dd></div>
                <div className="rounded-2xl bg-slate-900/80 p-3"><dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Maximum speed</dt><dd className="mt-1 text-white">{vehicle.speed}</dd></div>
                <div className="rounded-2xl bg-slate-900/80 p-3"><dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Transmission</dt><dd className="mt-1 text-white">{vehicle.transmission}</dd></div>
              </dl>
              <ul className="mt-4 grid gap-2">
                {vehicle.keyFacts.map((fact) => <li key={fact} className="flex gap-2"><span className="text-amber-300">•</span><span>{fact}</span></li>)}
              </ul>
            </div>
          </details>
        </article>
      ))}
    </div>
  );
}
