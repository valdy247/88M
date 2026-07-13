import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: 'Red Book Trainer',
  description: 'Unofficial 88M practice test simulator for exam preparation.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        {children}
        <Footer />
      </body>
    </html>
  );
}
