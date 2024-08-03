'use server';

import { VideoModel } from '@repo/database';
import { FormResultType } from '@/types/FormResult';
import { auth } from '@/server/auth';

// Creates a new bare video model and saves it to the database
export default async (prevState: FormResultType, formData: FormData): Promise<FormResultType> => {
  const uploadId = formData.get('uploadId') as string;
  const session = await auth();

  if (!session) {
    return {
      success: false,
      message: 'You are not signed in',
    };
  }

  if (!uploadId) {
    return {
      success: false,
      message: 'No upload ID provided',
    };
  }

  const { user: { id: userId } = {} } = session;

  if (!userId) {
    return {
      success: false,
      message: 'You are not signed in',
    };
  }

  const video = new VideoModel({ uploadId, user: userId });
  const saved = await video.save();

  if (!saved) {
    return {
      success: false,
      message: 'Could not save video',
    };
  }

  return {
    success: true,
    message: 'You are signed in',
  };
};
