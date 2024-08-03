'use client';

import {
  Card, CardHeader, CardTitle, CardDescription, CardContent,
  CardFooter,
  Button,
} from '@repo/ui';
import { useEffect, useRef, useState } from 'react';
import { Plus, Wand } from 'lucide-react';
import Player from '../player/player';
import Seeker from '../player/Seeker';
import onGetAudioPeaks from '@/server/actions/onGetAudioPeaks';

export default function DashboardLayout() {
  // Prop drilling, yes buuut I would rather prop drill than
  // keep these in redux since I really don't think any other component should access them
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currTime, setCurrTime] = useState(0);

  useEffect(() => {
    const audioContext = new AudioContext();
    console.log(audioContext);
    onGetAudioPeaks();
  }, []);

  return (
    <div className="grid py-6 w-full h-full grid-cols-3 gap-8">
      <Card className="row-span-2 flex flex-col">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle>Ad markers</CardTitle>
          <CardDescription>3 markers</CardDescription>
        </CardHeader>
        <CardContent className="h-full">
          <p>Cool Ads here</p>
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
