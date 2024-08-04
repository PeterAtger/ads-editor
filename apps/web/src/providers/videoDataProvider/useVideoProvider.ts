import { useEffect } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { setOriginalVideos, setVideos } from '@/redux/slices/videosSlice';
import { VideoReduxType } from '@/types/Videos';

export default function useVideoProvider(videos: VideoReduxType) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setVideos(videos));
    dispatch(setOriginalVideos(videos));
  }, [videos]);
}
