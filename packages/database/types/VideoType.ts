export type MetaDataType = {
  title?: string;
  description?: string;
  thumbnail?: string;
};

export const ViedoStatus = {
  UPLOADING: 'uploading',
  PROCESSING: 'processing',
  READY: 'ready',
} as const;

export type VideoStatusType = typeof ViedoStatus[keyof typeof ViedoStatus];
