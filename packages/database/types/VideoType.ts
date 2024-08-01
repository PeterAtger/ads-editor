import { InferSelectModel } from 'drizzle-orm';
import { videos } from '../connection/pg/schema';

export type VideoType = InferSelectModel<typeof videos>;

export type MetaDataType = VideoType['meta'];
