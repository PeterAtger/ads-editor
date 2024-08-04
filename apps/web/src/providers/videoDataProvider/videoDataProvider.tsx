'use client';

import { VideoReduxType } from '@/types/Videos';
import useVideoProvider from './useVideoProvider';

type VideoDataProviderProps = {
  userVideos: VideoReduxType
};

export function VideoDataProvider({ userVideos }: VideoDataProviderProps) {
  useVideoProvider(userVideos);

  return null;
}
