import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Red Book Trainer',
  description: 'Unofficial 88M practice test simulator for exam preparation.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
