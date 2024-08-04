import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up | Vidpod',
  description: 'Sign in to create code snippets',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (children);
}
