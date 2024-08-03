import { VideoModel } from '@repo/database';
import { logger } from '@repo/utils/loggers';

function composeUrl(videoId: string) {
  return `https://stream.mux.com/${videoId}/capped-1080p.mp4`;
}

export async function POST(request: Request) {
  const body = await request.json();
  const { type, data } = body;

  const response = Response.json({ message: 'ok' });

  if (type !== 'video.asset.ready') {
    return response;
  }

  const { playback_ids: playbackIds, upload_id: uploadId } = data ?? {};

  if (!playbackIds || !uploadId) {
    return response;
  }

  try {
    const publicId = playbackIds.find((id:any) => id?.policy === 'public')?.id;

    if (!publicId) {
      return response;
    }

    const video = new VideoModel();
    const loaded = await video.loadVideoByUploadId(uploadId);

    if (!loaded) {
      logger.error('Could not find uploaded video once upload was complete');

      return response;
    }

    video
      .setStreamId(publicId)
      .setUrl(composeUrl(publicId))
      .setStatus('ready');

    const saved = await video.save();

    if (!saved) {
      logger.error('Could not save video after upload was complete');
    }

    return response;
  } catch (e) {
    logger.error(e);

    return response;
  }
}
