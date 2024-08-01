import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { auth } from '@/server/auth';
import NavLinks from '@/components/navlinks';

export const metadata: Metadata = {
  title: 'Account | Vidpod',
  description: 'The accounts page will always be empty inside, just like you',
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();

  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <div className="grid w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r py-8 bg-muted/40 md:block">
        <NavLinks />
      </div>
      {children}
    </div>
  );
}