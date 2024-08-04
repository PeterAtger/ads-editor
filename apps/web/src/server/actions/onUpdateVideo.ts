'use server';

import { VideoModel } from '@repo/database';
import { FormResultType } from '@/types/FormResult';
import { VideoReduxType } from '@/types/Videos';

export default async (prevState: FormResultType, formData: FormData): Promise<FormResultType> => {
  const videoString = formData.get('video') as string;

  const newVideo : VideoReduxType[number] = JSON.parse(videoString);

  if (!newVideo || !newVideo.id) {
    return {
      success: false,
      message: 'Something went wrong!',
    };
  }

  const {
    id,
    title,
    description,
  } = newVideo;

  const video = new VideoModel();

  const loaded = await video.loadVideoById(id);

  if (!loaded) {
    return {
      success: false,
      message: 'Could not find video with specified id',
    };
  }

  video
    .setMetaData({ title, description });

  const saved = await video.save();

  if (!saved) {
    return {
      success: false,
      message: 'Coulld not save video',
    };
  }

  return {
    success: true,
    message: 'Savved',
  };
};
