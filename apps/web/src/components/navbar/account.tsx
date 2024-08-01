'use client';

import {
  ChevronDown,
} from 'lucide-react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@repo/ui';
import { useFormState } from 'react-dom';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { getInitials } from '@repo/utils';
import aubreyPlaza from '@/assets/aubrey.jpg';
import onSignOut from '@/server/actions/onSignOut';

export default function Account() {
  const { status, data: session } = useSession();
  const [, onSubmit] = useFormState(onSignOut, { success: false, message: '' });

  const onSubmitSideEffect = () => {
    onSubmit();
    signOut();
  };

  if (status !== 'authenticated' || !session || !session.user) {
    return (
      <Link href="/auth/signin">
        <Button>Sign In</Button>
      </Link>
    );
  }

  const { user: { name, image } } = session;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-[8px] h-10 px-4">
          <Avatar>
            <AvatarImage src={image || aubreyPlaza.src} />
            <AvatarFallback>{getInitials(name || '')}</AvatarFallback>
          </Avatar>
          <p className="font-semibold">{name}</p>
          <ChevronDown className="h-3 w-3" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem><Link href="/account/dashboard">Dashboard</Link></DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onSubmitSideEffect}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
