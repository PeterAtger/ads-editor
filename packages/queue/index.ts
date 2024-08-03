import type { QueueOptions } from 'bull';

export type RedisOptions = QueueOptions['redis'];

export { VideosQueue } from './src/queues/Videos';
