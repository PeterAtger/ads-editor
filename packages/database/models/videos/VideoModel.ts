import { logger } from '@repo/utils/loggers';
import { VideoResource } from '../../connection';
import { MetaDataType, VideoType } from '../../types/VideoType';

export default class VideoModel {
  id: number;

  url: string;

  user:string;

  meta: MetaDataType;

  created: Date;

  resource : VideoResource;

  constructor(video: Partial<VideoType> = {}) {
    const {
      id, url, user, meta, created,
    } = video;
    this.id = id || 0;
    this.url = url || '';
    this.user = user || '';
    this.meta = meta || null;
    this.created = created || new Date();
    this.resource = new VideoResource();
  }

  setUrl(value: string) {
    this.url = value;

    return this;
  }

  setMetaData(value: MetaDataType) {
    this.meta = value;

    return this;
  }

  setUser(value: string) {
    this.user = value;

    return this;
  }

  setCreated(value: Date) {
    this.created = value;

    return this;
  }

  async save() {
    const {
      id, url, user, meta,
    } = this;

    if (!id || !url || !user) {
      logger.error('Missing required fields');

      return false;
    }

    return this.resource.addVideo({
      id,
      url,
      user,
      meta,
      created: new Date(),
    });
  }

  async getUserVideos(userId: string): Promise<false | VideoModel[]> {
    const videos = await this.resource.getUserVideos(userId);

    if (!videos) {
      logger.info('Could not find any videos');

      return false;
    }

    return videos.map((video) => new VideoModel(video));
  }

  async loadVideoById(videoId: number) {
    const videoData = await this.resource.getVideoById(videoId);

    if (!videoData) {
      logger.info('Could not find video');

      return false;
    }

    Object.assign(this, videoData);

    return this;
  }

  async getVideosCount(userId: string) {
    return this.resource.getVideosCount(userId);
  }
}
