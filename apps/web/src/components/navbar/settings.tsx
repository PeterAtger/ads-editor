import { Button } from '@repo/ui';
import { Settings as SettingsIcon } from 'lucide-react';

export default function Settings() {
  return (
    <Button variant="ghost" size="icon" className="rounded-full w-[20px] h-[20px]">
      <SettingsIcon className="h-4 w-4 stroke-light" />
      <span className="sr-only">Toggle user menu</span>
    </Button>
  );
}
