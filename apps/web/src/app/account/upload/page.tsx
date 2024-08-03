'use server';

import { Mux } from '@mux/mux-node';
import { env } from '@/env.mjs';
import { UploadField } from '@/components/uploadField';

const { video } = new Mux({ tokenId: env.MUX_TOKEN_ID, tokenSecret: env.MUX_TOKEN_SECRET });

export default async function Page() {
  const directUpload = await video.uploads.create({
    cors_origin: '*',
    new_asset_settings: {
      playback_policy: ['public'],
      mp4_support: 'capped-1080p',
    },
  });

  return (
    <div className="flex flex-col p-6 gap-2">
      <UploadField uploadUrl={directUpload.url} uploadId={directUpload.id} />
    </div>
  );
}
