'use server';

import { FormResultType } from '@/types/FormResult';

type GetAudioPeaksResult = FormResultType & {
};

export default async (): Promise<GetAudioPeaksResult> => ({
  success: true,
  message: 'Got peaks for you!',
});
