'use server';

import WaveformData from 'waveform-data';
import { FormResultType } from '@/types/FormResult';

type GetAudioPeaksResult = FormResultType & {
  response?: Response | null;
};

export default async (): Promise<GetAudioPeaksResult> => {
  const audioContext = new AudioContext();

  const response = await fetch('https://file-examples.com/storage/fe44eeb9cb66ab8ce934f14/2017/11/file_example_MP3_700KB.mp3');

  if (!response) {
    return {
      success: false,
      message: 'Something went wrong!',
    };
  }

  const buffer = await response.arrayBuffer();

  const options = {
    audio_context: audioContext,
    array_buffer: buffer,
    scale: 512,
  };

  WaveformData.createFromAudio(options, (err, waveform) => {
    if (err) {
      console.log('error');
      return;
    }

    console.log(`Waveform has ${waveform.channels} channels`);
    console.log(`Waveform has length ${waveform.length} points`);
  });

  if (!response.ok) {
    return {
      success: false,
      message: 'Failed to get peaks',
    };
  }

  return {
    success: true,
    response,
    message: 'Got peaks for you!',
  };
};
