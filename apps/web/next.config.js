// eslint-disable-next-line import/no-unresolved
import { withNextVideo } from 'next-video/process';

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.mjs');

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      { hostname: 'dvox5jdzkt9hx.cloudfront.net' },
    ],
  },
};

export default withNextVideo(config);
