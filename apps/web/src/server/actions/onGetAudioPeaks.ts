'use server';

import { FormResultType } from '@/types/FormResult';

type GetAudioPeaksResult = FormResultType & {
};

// This will be used to queue video for processing audio peaks
export default async (): Promise<GetAudioPeaksResult> => ({
  success: true,
  message: 'Got peaks for you!',
});
