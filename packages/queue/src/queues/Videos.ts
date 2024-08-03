/* eslint-disable class-methods-use-this */
import Queue from 'bull';

export class VideosQueue {
  private static instance: VideosQueue;

  private queue: Queue.Queue;

  private constructor(options: Queue.QueueOptions['redis']) {
    this.queue = new Queue('videos', { redis: options });
  }

  public static getInstance(options: Queue.QueueOptions['redis']): VideosQueue {
    if (!VideosQueue.instance) {
      VideosQueue.instance = new VideosQueue(options);
    }

    return VideosQueue.instance;
  }

  public async addVideo(video: string): Promise<Queue.Job> {
    return this.queue.add({ video });
  }

  public async getNextJob(): Promise<Queue.Job | undefined> {
    return this.queue.getNextJob();
  }

  public async acknowledge(job: Queue.Job): Promise<void> {
    await job.remove();
  }
}
