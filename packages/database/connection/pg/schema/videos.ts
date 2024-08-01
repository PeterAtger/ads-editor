import {
  json,
  pgTable,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';
import { users } from './auth';

type MetaDataType = {
  title: string;
  description: string;
};

export const videos = pgTable('videos', {
  id: serial('id').primaryKey(),
  url: text('url').notNull(),
  user: text('user').notNull().references(() => (users.id)),
  meta: json('meta').$type<MetaDataType>(),
  created: timestamp('created').notNull().defaultNow(),
});
