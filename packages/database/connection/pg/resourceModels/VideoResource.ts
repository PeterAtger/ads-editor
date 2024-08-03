/* eslint-disable @typescript-eslint/no-shadow */
import { logger } from '@repo/utils/loggers';
import {
  desc, eq, count,
} from 'drizzle-orm';
import ResourceModelInterface from '../ResourceModelInterface';
import { VideosDbType, videos } from '../schema';

export default class VideoResource extends ResourceModelInterface {
  async addVideo(vid: Omit<VideosDbType, 'id'>): Promise<number | false> {
    try {
      const [{ insertedId }] = await this.db.insert(videos)
        .values(vid).returning({ insertedId: videos.id });

      return insertedId;
    } catch (e) {
      logger.error(`Could not insert video ${e}`);

      return false;
    }
  }

  async updateVideo(vid: VideosDbType): Promise<number | false> {
    try {
      const [{ id }] = await this.db.update(videos)
        .set(vid)
        .where(eq(videos.id, vid.id))
        .returning({ id: videos.id });

      if (!id) {
        return false;
      }

      return id;
    } catch (e) {
      logger.error(`Could not update video ${e}`);

      return false;
    }
  }

  async getUserVideos(userId: string): Promise<false | VideosDbType[]> {
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

  async getVideoById(videoId: number): Promise<false | VideosDbType> {
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

  async getVideoByUploadId(uploadId: string): Promise<false | VideosDbType> {
    const data = await this.db.query.videos.findFirst({
      where: eq(videos.uploadId, uploadId),
    });

    if (!data) {
      logger.info(`Could not find video with uploadId: ${uploadId}`);

      return false;
    }

    return data;
  }

  async deleteVideo(videoId: number): Promise<boolean> {
    try {
      await this.db.delete(videos)
        .where(eq(videos.id, videoId));

      return true;
    } catch (e) {
      logger.error(`Could not delete video ${e}`);

      return false;
    }
  }
}
