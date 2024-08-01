import {
  useRef, useState,
} from 'react';

export default function usePlayer() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (!videoRef || !videoRef.current) {
      return;
    }

    const { current: video } = videoRef;

    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const handleJumpFwd = () => {
    if (!videoRef || !videoRef.current) {
      return;
    }

    const { current: video } = videoRef;
    video.currentTime += 10;
  };

  const handleJumpBack = () => {
    if (!videoRef || !videoRef.current) {
      return;
    }

    const { current: video } = videoRef;
    video.currentTime -= 10;
  };

  const handleJumpStart = () => {
    if (!videoRef || !videoRef.current) {
      return;
    }

    const { current: video } = videoRef;
    video.currentTime = 0;
    video.pause();
    setPlaying(false);
  };

  const handleJumpEnd = () => {
    if (!videoRef || !videoRef.current) {
      return;
    }

    const { current: video } = videoRef;
    video.currentTime = video.duration - 1;
    video.pause();
    setPlaying(false);
  };

  return {
    playing,
    videoRef,
    handlePlay,
    handleJumpFwd,
    handleJumpBack,
    handleJumpStart,
    handleJumpEnd,
  };
}
