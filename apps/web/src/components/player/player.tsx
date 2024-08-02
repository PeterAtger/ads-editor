/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import {
  Card,
  CardContent,
  Button,
} from '@repo/ui';
import {
  ArrowLeftToLineIcon,
  ArrowRightToLine,
  FastForward,
  History,
  LoaderCircle,
  Pause,
  Play,
  Rewind,
} from 'lucide-react';
import VideoPlayer from 'next-video/player';
import { useState } from 'react';
import usePlayer from './usePlayer';

type PlayerProps = {
  videoRef: React.RefObject<HTMLVideoElement>;
  setCurrTime: React.Dispatch<React.SetStateAction<number>>;
};

export default function Player({ videoRef, setCurrTime }: PlayerProps) {
  const {
    handlePlay,
    handleFullScreen,
    handleJumpBack,
    handleJumpFwd,
    handleJumpEnd,
    handleJumpStart,
  } = usePlayer(videoRef);

  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div
        onClick={handlePlay}
        onDoubleClick={handleFullScreen}
        className="rounded-lg cursor-pointer relative overflow-hidden"
      >
        {loading
        && (
        <div id="loading-overlay" className="absolute z-50 bg-black/35 text-white h-full w-full flex justify-center items-center ">
          <LoaderCircle size={24} className="animate-spin" />
        </div>
        )}
        <VideoPlayer
          className="z-0"
          src="https://storage.googleapis.com/muxdemofiles/mux.mp4"
          poster="https://image.mux.com/jxEf6XiJs6JY017pSzpv8Hd6tTbdAOecHTq4FiFAn564/thumbnail.webp"
          controls={false}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onWaiting={() => setLoading(true)}
          onCanPlay={() => setLoading(false)}
          onTimeUpdate={() => setCurrTime(videoRef.current?.currentTime ?? 0)}
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
            <Button onClick={handleJumpBack} variant="ghost" className="gap-1 items-centeryy">
              <Rewind size={24} className="fill-primary" />
            </Button>

            {/* Play/Pause */}
            <Button onClick={handlePlay} variant="ghost">
              {playing
                ? <Pause size={24} className="fill-primary" />
                : <Play size={24} className="fill-primary" />}
            </Button>

            {/* Next */}
            <Button onClick={handleJumpFwd} variant="ghost" className="gap-1 items-centeryy">
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
