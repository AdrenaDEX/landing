import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://landing-adrena.vercel.app/'), // remember to update
  title: 'Adrena',
  description: 'Trade at the speed of light with up to 50x leverage',
  openGraph: {
    title: 'Adrena',
    description: 'Trade at the speed of light with up to 50x leverage',
    images:
      'https://iyd8atls7janm7g4.public.blob.vercel-storage.com/OG-eUrhUciZv2g1oZXP9YD77YVWtV79Xs.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adrena',
    description: 'Trade at the speed of light with up to 50x leverage',
    creator: '@adrenaprotocol',
    images:
      'https://iyd8atls7janm7g4.public.blob.vercel-storage.com/OG-eUrhUciZv2g1oZXP9YD77YVWtV79Xs.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
