import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upload | Vidpod',
  description: 'Upload videos and stuff',
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (children);
}
