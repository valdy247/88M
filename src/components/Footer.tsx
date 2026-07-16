'use client';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#010203] px-4 py-6 text-slate-400 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>Unofficial study tool for Red Book practice.</p>
        <p className="text-slate-500">Ready for the 88M test with mobile-friendly practice.</p>
      </div>
    </footer>
  );
}
