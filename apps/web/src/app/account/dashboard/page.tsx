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
    <div className="p-12">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="py-6 h-full flex flex-col gap-2">
        <h1>Title</h1>
        <h3>Subtitle</h3>

        <div className="grid py-6 w-full h-full grid-cols-3 grid-rows-3 gap-8">
          <Card className="row-span-2">
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
