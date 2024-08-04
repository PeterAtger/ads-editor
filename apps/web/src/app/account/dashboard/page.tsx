import { Breadcrumbs } from '@/components/breadcrumbs';
import { DashboardLayout } from '@/components/dashboard';
import VideoMetaEditor from '@/components/videoMetaEditor';

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
        <VideoMetaEditor />
        <DashboardLayout />
      </div>
    </div>
  );
}
