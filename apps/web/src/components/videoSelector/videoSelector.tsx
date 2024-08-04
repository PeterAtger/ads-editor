'use client';

import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
} from '@repo/ui';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Batman from '@/assets/batman.jpg';
import { setSelectedVideo } from '@/redux/slices/videosSlice';

export default function VideoSelector() {
  const userVideos = useAppSelector((state) => state.userVideos.videos);
  const selectedVideo = useAppSelector((state) => state.userVideos.selectedVideo);
  const dispatch = useAppDispatch();
  const defaultTitle = 'No Title';

  const handleVideoSelect = (index: string) => {
    dispatch(setSelectedVideo(parseInt(index, 10)));
  };

  const renderOptions = () => Object.entries(userVideos).map(([index, video]) => (
    <SelectItem key={index} value={index}>
      <div className="flex flex-row items-center gap-2">
        <Image
          alt={video.title ?? 'Video Thumbnail'}
          src={video.thumbnail ?? Batman.src}
          quality={100}
          height={32}
          width={32}
          className="rounded-md"
        />
        <span>{video.title ?? defaultTitle}</span>
      </div>
    </SelectItem>
  ));

  return (
    <Select defaultValue={selectedVideo?.toString()} onValueChange={handleVideoSelect}>
      <SelectTrigger className="w-full h-12 bg-foreground">
        <SelectValue placeholder="Select Video" />
      </SelectTrigger>
      <SelectContent>
        {renderOptions()}
      </SelectContent>
    </Select>
  );
}
