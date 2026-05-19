import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Invicta VPN — Navega sem medo.',
  description: 'A primeira dVPN descentralizada portuguesa. Privacidade total, zero logs, pagamento anónimo em criptomoedas.',
  keywords: ['VPN', 'dVPN', 'descentralizada', 'privacidade', 'Portugal', 'Porto', 'Sentinel'],
  openGraph: {
    title: 'Invicta VPN — Navega sem medo.',
    description: 'A primeira dVPN descentralizada portuguesa. Privacidade total, zero logs, pagamento anónimo em criptomoedas.',
    siteName: 'Invicta VPN',
    locale: 'pt_PT',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
