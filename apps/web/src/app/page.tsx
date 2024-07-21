import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar';
import SideBar from '@/components/sidebar';

export default function HomePage() {
  return (
    <main className="min-h-screen text-slate-900 dark:text-white bg-zinc-50 dark:bg-slate-800">
      <Navbar />
      <SideBar />
      <Footer />
    </main>
  );
}
