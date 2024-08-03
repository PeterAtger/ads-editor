'use client';

import MuxUploader from '@mux/mux-uploader-react';
import { useFormState } from 'react-dom';
import onUploadStart from '@/server/actions/onUploadStart';

type UploadFieldProps = {
  uploadUrl: string;
  uploadId: string;
};

export default function UploadField({ uploadUrl, uploadId }: UploadFieldProps) {
  const [,onSubmit] = useFormState(onUploadStart, { success: false, message: '' });

  const handleUploadStart = () => {
    const data = new FormData();
    data.append('uploadId', uploadId);

    onSubmit(data);
  };

  return (
    <MuxUploader
      endpoint={uploadUrl}
      onUploadStart={handleUploadStart}
    />
  );
}
