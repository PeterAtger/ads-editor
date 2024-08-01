/* eslint-disable @typescript-eslint/no-shadow */
import { logger } from '@repo/utils/loggers';
import {
  desc, eq, count,
} from 'drizzle-orm';
import ResourceModelInterface from '../ResourceModelInterface';
import { videos } from '../schema';
import { VideoType } from '../../../types/VideoType';

export default class VideoResource extends ResourceModelInterface {
  async addVideo(vid: VideoType): Promise<number | false> {
    try {
      const [{ insertedId }] = await this.db.insert(videos)
        .values(vid).returning({ insertedId: videos.id });

      return insertedId;
    } catch (e) {
      logger.error(`Could not insert user ${e}`);

      return false;
    }
  }

  async getUserVideos(userId: string): Promise<false | VideoType[]> {
    const data = await this.db.query.videos.findMany({
      where: eq(videos.user, userId),
      orderBy: [desc(videos.created)],
    });

    if (!data) {
      logger.info(`Could not find any videos for user: ${userId}`);

      return false;
    }

    return data;
  }

  async getVideoById(videoId: number): Promise<false | VideoType> {
    const data = await this.db.query.videos.findFirst({
      where: eq(videos.id, videoId),
    });

    if (!data) {
      logger.info(`Could not find video with id: ${videoId}`);

      return false;
    }

    return data;
  }

  async getVideosCount(userId: string): Promise<number> {
    const result = await this.db
      .select({ count: count() })
      .from(videos)
      .where(eq(videos.user, userId));

    return result[0].count;
  }
}
