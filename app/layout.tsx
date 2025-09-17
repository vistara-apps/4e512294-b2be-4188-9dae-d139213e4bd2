import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SignalSage - Trade Smarter, Faster, Confidently',
  description: 'Your All-in-One Trading Intelligence Platform with live market signals, AI-driven analysis, and community insights.',
  keywords: ['trading', 'signals', 'AI', 'crypto', 'market analysis', 'Base', 'DeFi'],
  authors: [{ name: 'SignalSage Team' }],
  openGraph: {
    title: 'SignalSage - Trading Intelligence Platform',
    description: 'Trade Smarter, Faster, Confidently with AI-powered market signals and community insights.',
    type: 'website',
    siteName: 'SignalSage',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SignalSage - Trading Intelligence Platform',
    description: 'Trade Smarter, Faster, Confidently with AI-powered market signals and community insights.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1e40af',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
