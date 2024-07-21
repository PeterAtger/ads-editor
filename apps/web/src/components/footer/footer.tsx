import Link from 'next/link';
import Image from 'next/image';

import LogoImg from '@/assets/logo.svg';

export default function Footer() {
  return (
    <footer className="flex items-center px-6 justify-between w-full h-16 bg-zinc-50 border border-zinc-200">
      <p className="text-sm text-zinc-500 font-bold">Video first podcasts</p>
      <Link
        href="/"
        className="flex flex-row items-center gap-2 font-semibold md:text-base mx-2"
      >
        <Image alt="logo" width={24} height={24} src={LogoImg.src} />
        <h3>Vidpod</h3>
      </Link>
    </footer>
  );
}