import {
  RefObject,
} from 'react';

export default function usePlayer(videoRef: RefObject<HTMLVideoElement>) {
  const handleFullScreen = () => {
    if (!videoRef || !videoRef.current) {
      return;
    }

    const { current: video } = videoRef;

    if (!document.fullscreenElement) {
      video.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handlePlay = () => {
    if (!videoRef || !videoRef.current) {
      return;
    }

    const { current: video } = videoRef;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleSeekTo = (value: number) => {
    if (!videoRef || !videoRef.current) {
      return;
    }

    const { current: video } = videoRef;
    handlePlay();
    video.currentTime = value;
    handlePlay();
  };

  const pauseVideo = () => {
    if (!videoRef || !videoRef.current) {
      return;
    }

    const { current: video } = videoRef;
    video.pause();
  };

  const playVdeo = () => {
    if (!videoRef || !videoRef.current) {
      return;
    }

    const { current: video } = videoRef;
    video.play();
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
  };

  const handleJumpEnd = () => {
    if (!videoRef || !videoRef.current) {
      return;
    }

    const { current: video } = videoRef;
    video.currentTime = video.duration - 1;
  };

  const getIsPlaying = () => {
    if (!videoRef || !videoRef.current) {
      return false;
    }

    const { current: video } = videoRef;
    return !video.paused;
  };

  return {
    pauseVideo,
    playVdeo,
    handlePlay,
    handleJumpFwd,
    handleSeekTo,
    handleJumpBack,
    handleJumpStart,
    handleJumpEnd,
    handleFullScreen,
    getIsPlaying,
  };
}
