import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/ui';
import { Breadcrumbs } from '@/components/breadcrumbs';

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
          <h3 className="font-bold text-sm text-zinc-500">Episode 503 . 12 April 2024</h3>
        </div>

        <div className="grid py-6 w-full h-full grid-cols-3 grid-rows-3 gap-8">
          <Card className="row-span-2">
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle>Ad markers</CardTitle>
              <CardDescription>3 markers</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
          <Card className="col-span-2 row-span-2">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
