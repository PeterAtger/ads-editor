import Link from 'next/link';
import Image from 'next/image';
import {
  Button, Sheet, SheetContent, SheetTrigger,
} from '@repo/ui';
import { Menu } from 'lucide-react';
import LogoImg from '@/assets/logo.svg';
import Notifications from './notifications';
import Settings from './settings';
import Account from './account';
import NavLinks from '../navlinks';

export default function Navbar() {
  return (
    <header className="fixed top-0 flex h-16 items-center justify-between w-full gap-4 border-b bg-background px-8 md:px-4 bg-zinc-50">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex flex-row items-center gap-2 font-semibold md:text-base mx-2"
        >
          <Image alt="logo" width={24} height={24} src={LogoImg.src} />
          <h3>Vidpod</h3>
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 sm:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <NavLinks />
        </SheetContent>
      </Sheet>
      <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <Notifications />
        <Settings />
        <Account />
      </div>
    </header>
  );
}