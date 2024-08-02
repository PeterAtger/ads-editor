'use client';

import { Input } from '@repo/ui';
import usePlayer from './usePlayer';

type SeekerProps = {
  videoRef: React.RefObject<HTMLVideoElement>;
  currTime: number;
};

export default function Seeker({ videoRef, currTime }: SeekerProps) {
  const { handleSeekTo } = usePlayer(videoRef);

  return (
    <Input
      onChange={(e) => handleSeekTo(Number(e.target.value))}
      className="shadow-none px-0"
      type="range"
      min="0"
      max={videoRef.current?.duration}
      value={currTime}
      step="0.01"
    />
  );
}
