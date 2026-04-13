import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Volkhov } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

const volkhov = Volkhov({
  subsets: ['latin'],
  variable: '--font-volkhov',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Jadoo - Best Travel Destinations',
  description: 'Travel, enjoy and live a new and full life with Jadoo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${volkhov.variable} font-poppins antialiased`}>{children}</body>
    </html>
  );
}
