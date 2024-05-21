import type { Metadata } from 'next';
import './globals.css';

import Script from 'next/script';
import InitApp from './InitApp';
import Head from 'next/head';

export const metadata: Metadata = {
  metadataBase: new URL('https://landing.adrena.xyz/'),
  title: 'Adrena',
  description: 'Trade at the speed of light with up to 100x leverage',
  openGraph: {
    title: 'Adrena',
    description: 'Trade at the speed of light with up to 100x leverage',
    images:
      'https://iyd8atls7janm7g4.public.blob.vercel-storage.com/OG-nFshI7a1fxTEcp2L5XV8z9dormWh5w.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adrena',
    description: 'Trade at the speed of light with up to 100x leverage',
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
      <Head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:4990246,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
          }}
        ></script>
      </Head>
      <body>{children}</body>
    </html>
  );
}
