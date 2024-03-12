import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://landing-adrena.vercel.app/'), // remember to update
  title: 'Adrena',
  description: 'Trade at the speed of light with up to 50x leverage',
  openGraph: {
    title: 'Adrena',
    description: 'Trade at the speed of light with up to 50x leverage',
    images:
      'https://iyd8atls7janm7g4.public.blob.vercel-storage.com/OG-nFshI7a1fxTEcp2L5XV8z9dormWh5w.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adrena',
    description: 'Trade at the speed of light with up to 50x leverage',
    creator: '@adrenaprotocol',
    images:
      'https://iyd8atls7janm7g4.public.blob.vercel-storage.com/OG-nFshI7a1fxTEcp2L5XV8z9dormWh5w.png',
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
