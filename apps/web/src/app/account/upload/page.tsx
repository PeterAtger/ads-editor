'use server';

import { Mux } from '@mux/mux-node';
import { Separator } from '@repo/ui';
import dynamic from 'next/dynamic';
import { env } from '@/env.mjs';
import { LoadingDiv } from '@/components/Loading';
import { Breadcrumbs } from '@/components/breadcrumbs';

const UploadField = dynamic(() => import('@/components/uploadField/uploadField'), {
  loading: () => <LoadingDiv />,
});

const { video } = new Mux({ tokenId: env.MUX_TOKEN_ID, tokenSecret: env.MUX_TOKEN_SECRET });

const breadcrumbs = [
  { href: '/', label: 'Home' },
  { href: '/account', label: 'Account' },
  { href: '/account/upload', label: 'Upload' },
];

export default async function Page() {
  const directUpload = await video.uploads.create({
    cors_origin: '*',
    new_asset_settings: {
      playback_policy: ['public'],
      mp4_support: 'capped-1080p',
    },
  });

  return (
    <div className="flex flex-col p-8">
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <div className="flex flex-col py-6 gap-2 h-full">
        <UploadField
          uploadUrl={directUpload.url}
          uploadId={directUpload.id}
        />
        <Separator />
      </div>
    </div>
  );
}
