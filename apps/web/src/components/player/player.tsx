'use client';

import {
  Card,
  CardContent,
  Button,
} from '@repo/ui';
import {
  ArrowLeftToLineIcon, ArrowRightToLine, FastForward, History, Pause, Play,
  Rewind,
} from 'lucide-react';
import Video from 'next-video';
import usePlayer from './usePlayer';

export default function Player() {
  const {
    playing,
    handlePlay,
    videoRef,
    handleJumpBack,
    handleJumpFwd,
    handleJumpEnd,
    handleJumpStart,
  } = usePlayer();

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-lg overflow-hidden">
        <Video
          src="https://stream.mux.com/sxY31L6Opl02RWPpm3Gro9XTe7fRHBjs92x93kiB1vpc.m3u8"
          controls={false}
          ref={videoRef}
        />
      </div>

      <Card className="col-span-2 row-span-2">
        <CardContent className="flex flex-row items-center h-full gap-2 justify-between">

          {/* Jump to Start */}
          <div className="flex flex-row gap-2 items-center">
            <Button onClick={handleJumpStart} size="icon" variant="outline" className="rounded-full p-2">
              <ArrowLeftToLineIcon size={24} />
            </Button>
            <p className="text-light">Jump to start</p>
          </div>

          {/* Prev */}
          <div className="flex flex-row gap-2 items-center">
            <Button onClick={handleJumpBack} variant="ghost" className="gap-1 items-centeryy">
              <History size={24} />
              <p className="text-light">10s</p>
            </Button>
            <Button variant="ghost" className="gap-1 items-centeryy">
              <Rewind size={24} className="fill-primary" />
            </Button>

            {/* Play/Pause */}
            <Button onClick={handlePlay} variant="ghost">
              {playing
                ? <Pause size={24} className="fill-primary" />
                : <Play size={24} className="fill-primary" />}
            </Button>

            {/* Next */}
            <Button variant="ghost" className="gap-1 items-centeryy">
              <FastForward size={24} className="fill-primary" />
            </Button>
            <Button onClick={handleJumpFwd} variant="ghost" className="gap-1 items-centeryy">
              <p className="text-light">10s</p>
              <History size={24} className="scale-x-[-1]" />
            </Button>
          </div>

          {/* Jump to End */}
          <div className="flex flex-row gap-2 items-center">
            <p className="text-light">Jump to end</p>
            <Button onClick={handleJumpEnd} size="icon" variant="outline" className="rounded-full p-2">
              <ArrowRightToLine size={24} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
