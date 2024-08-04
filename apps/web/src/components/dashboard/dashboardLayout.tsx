'use client';

import {
  Card, CardContent,
} from '@repo/ui';
import { useRef, useState } from 'react';
import Player from '../player/player';
import Seeker from '../player/Seeker';
import { useAppSelector } from '@/redux/hooks';
import { AdMarkers } from '../adMarkers';

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
      <AdMarkers />
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
