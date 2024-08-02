import { Breadcrumbs } from '@/components/breadcrumbs';
import { DashboardLayout } from '@/components/dashboard';

const breadcrumbs = [
  { href: '/', label: 'Home' },
  { href: '/account', label: 'Account' },
  { href: '/account/dashboard', label: 'Dashboard' },
];

export default function Dashboard() {
  return (
    <div className="p-8">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="py-6 h-full flex flex-col gap-2">
        <div id="metaData" className="flex flex-col gap-4 max-w-screen-md">
          <h1 className="text-3xl font-bold">
            The amzing deadpool and wolverine.
            How I felt about a cash grab film made for adults.
          </h1>
          <h3 className="font-bold text-sm text-light">Episode 503 . 12 April 2024</h3>
        </div>

        <DashboardLayout />
      </div>
    </div>
  );
}
