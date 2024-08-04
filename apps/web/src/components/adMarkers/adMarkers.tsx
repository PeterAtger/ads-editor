import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, Button, CardFooter, Badge,
} from '@repo/ui';
import {
  TrashIcon, Plus, Wand,
} from 'lucide-react';

export default function AdMarkers() {
  return (
    <Card className="row-span-2 flex flex-col">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>Ad markers</CardTitle>
        <CardDescription>1 marker</CardDescription>
      </CardHeader>

      <CardContent className="h-full">
        <Card className="row-span-2 flex flex-row">
          <CardHeader className="flex w-full flex-row justify-between items-center">
            <div>1</div>
            <CardTitle>00:00:30</CardTitle>
            <Badge className="mt-0 bg-orange-200 text-black" variant="default">A/B</Badge>
            <div className="flex flex-row gap-2">
              <Button size="sm" variant="outline" className="gap-2">Edit</Button>
              <Button className="py-0" variant="destructive" size="sm"><TrashIcon size={16} /></Button>
            </div>
          </CardHeader>
          <CardContent className="h-full" />
        </Card>
      </CardContent>

      <CardFooter className="flex flex-col gap-2 w-full">
        <Button variant="default" className="w-full gap-2">
          Create Ad Marker
          <Plus size={16} />
        </Button>
        <Button variant="outline" className="w-full gap-2">
          Automatically place
          <Wand size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
}
