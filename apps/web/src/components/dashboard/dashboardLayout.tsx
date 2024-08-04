'use client';

import {
  Card, CardHeader, CardTitle, CardDescription, CardContent,
  CardFooter,
  Button,
  Badge,
} from '@repo/ui';
import { useRef, useState } from 'react';
import { Plus, TrashIcon, Wand } from 'lucide-react';
import Player from '../player/player';
import Seeker from '../player/Seeker';
import { useAppSelector } from '@/redux/hooks';

export default function DashboardLayout() {
  // Prop drilling, yes buuut I would rather prop drill than
  // keep these in redux since I really don't think any other component should access them
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currTime, setCurrTime] = useState(0);
  const selectedVideo = useAppSelector((state) => state.userVideos.selectedVideo);

  if (!selectedVideo) {
    return null;
  }

  return (
    <div className="grid py-6 w-full h-full grid-cols-3 gap-8">
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
      <Card className="col-span-2 row-span-2">
        <CardContent>
          <Player videoRef={videoRef} setCurrTime={setCurrTime} />
        </CardContent>
      </Card>
      <Card className="col-span-3 h-min">
        <CardContent>
          <Seeker videoRef={videoRef} currTime={currTime} />
        </CardContent>
      </Card>
    </div>
  );
}
