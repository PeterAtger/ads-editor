import { logger } from '@repo/utils/loggers';
import { VideoResource } from '../../connection';
import { MetaDataType, VideoStatusType } from '../../types/VideoType';
import { VideosDbType } from '../../connection/pg/schema';
import { AdsConfigType } from '../../types/AdsTypes';

export default class VideoModel {
  id?: number;

  url: string;

  user:string;

  uploadId: string;

  streamId: string;

  status: VideoStatusType | null;

  meta: MetaDataType | null;

  ads: AdsConfigType[] | null;

  created: Date;

  resource : VideoResource;

  constructor(video: Partial<VideosDbType> = {}) {
    const {
      id, url, user,
      meta, created, ads,
      uploadId, status, streamId,
    } = video;
    this.id = id;
    this.url = url || '';
    this.uploadId = uploadId || '';
    this.streamId = streamId || '';
    this.status = status || null;
    this.user = user || '';
    this.meta = meta || null;
    this.ads = ads || null;
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

  setAds(value: AdsConfigType[]) {
    this.ads = value;

    return this;
  }

  setUploadId(value: string) {
    this.uploadId = value;

    return this;
  }

  setStreamId(value: string) {
    this.streamId = value;

    return this;
  }

  setStatus(value: VideoStatusType) {
    this.status = value;

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
    const { user } = this;

    if (!user) {
      return false;
    }

    if (this.id) {
      // Typescript is not convinced
      return this.resource.updateVideo({
        ...this,
        id: this.id,
      });
    }

    return this.resource.addVideo(this);
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

    return true;
  }

  async loadVideoByUploadId(uploadId: string) {
    const videoData = await this.resource.getVideoByUploadId(uploadId);

    if (!videoData) {
      logger.info('Could not find video');

      return false;
    }

    Object.assign(this, videoData);

    return true;
  }

  async getVideosCount(userId: string) {
    return this.resource.getVideosCount(userId);
  }

  async deleteVideo() {
    if (!this.id) {
      return false;
    }

    return this.resource.deleteVideo(this.id);
  }
}
