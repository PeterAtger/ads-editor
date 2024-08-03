import {
  json,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';
import { InferSelectModel } from 'drizzle-orm';
import { users } from './auth';
import { MetaDataType, VideoStatusType } from '../../../types/VideoType';
import { AdsConfigType } from '../../../types/AdsTypes';

export const videos = pgTable('videos', {
  id: serial('id').primaryKey(),
  url: text('url'),
  streamId: text('streamId'),
  uploadId: text('uploadId'),
  status: varchar('status').$type<VideoStatusType>(),
  user: text('user').notNull().references(() => (users.id)),
  ads: json('ads').$type<AdsConfigType[]>(),
  meta: json('meta').$type<MetaDataType>(),
  created: timestamp('created').notNull().defaultNow(),
});

export type VideosDbType = InferSelectModel<typeof videos>;
