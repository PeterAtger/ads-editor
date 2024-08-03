import { VideosQueue } from '@repo/queue';
import express, {
  Request, Response, Application,
} from 'express';

const app: Application = express();
const port = process.env.PORT || 8000;

app.get('/', async (req: Request, res: Response) => {
  const queue = VideosQueue.getInstance({ host: 'redis', port: 6379 });
  const nextJob = await queue.addVideo('tata');
  console.log(nextJob);

  res.send('Welcome to Express & the TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
