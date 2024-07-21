import '@repo/ui/dist/index.css';
import '@/styles/globals.css';

import { Manrope } from 'next/font/google';
import { type Metadata } from 'next';

const manrope = Manrope({ weight: ['300', '400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vidpod | Simply stream',
  description: 'Simply stream',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.className}`}>
      <body>{children}</body>
    </html>
  );
}
