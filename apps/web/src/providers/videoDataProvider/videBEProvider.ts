import { VideoModel } from '@repo/database';
import { VideoReduxType } from '@/types/Videos';

export default class VideoBEProvider {
  static async getVideos(userId: string) {
    const videoModel = new VideoModel();
    const userVideos = await videoModel.getUserVideos(userId) || [];

    const userRVideos: VideoReduxType = {};
    userVideos.forEach((video: VideoModel) => {
      userRVideos[video.id!] = {
        id: video.id,
        title: video.meta?.title,
        description: video.meta?.description,
        url: video.url ?? '',
        thumbnail: video.meta?.thumbnail,
        createdAt: video.created.toISOString(),
      };
    });

    return userRVideos;
  }
}
