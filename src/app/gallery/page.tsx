import Link from 'next/link';
import { VehicleGallery } from '../../components/gallery/VehicleGallery';
import { vehicleProfiles } from '../../data/vehicles';

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="font-semibold text-amber-300">← Home</Link>
        <header className="py-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-300">88M Equipment</p>
          <h1 className="mt-2 text-3xl font-bold">Vehicle Gallery</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">Tap the + on any vehicle for a quick-reference summary. Exact specifications vary by model and modification; always use the applicable current TM.</p>
        </header>
        <VehicleGallery vehicles={vehicleProfiles} />
      </div>
    </main>
  );
}
