import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '../components/Providers';
import 'react-loading-skeleton/dist/skeleton.css';
import GlobalAppbar from '@/components/appbar/GlobalAppbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Financial Ledger',
  description: 'Financial Ledger',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  appleWebApp: {
    capable: true,
  },
  icons: [
    {
      rel: 'icon',
      url: '/assets/icons/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      rel: 'icon',
      url: '/assets/icons/favicon-96x96.png',
      sizes: '96x96',
      type: 'image/png',
    },
    {
      rel: 'icon',
      url: '/assets/icons/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
    },
    {
      rel: 'icon',
      url: '/assets/icons/android-icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      rel: 'apple-touch-icon',
      url: '/assets/icons/apple-icon-180x180.png',
    },
    {
      rel: 'apple-touch-startup-image',
      url: '/assets/icons/apple-splash-portrait.png',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <GlobalAppbar />
        <main>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
