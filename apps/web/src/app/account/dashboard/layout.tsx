import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | Vidpod',
  description: 'Dashboard for dashboarding and all the fun dashboard stuff',
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (children);
}
