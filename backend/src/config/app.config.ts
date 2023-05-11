import { registerAs } from '@nestjs/config';
import * as process from 'process';

export const appConfig = registerAs('app', () => ({
  nodeEnv: process.env.NODE_ENV,
  port: process.env.SERVER_PORT || 3000,
  name: process.env.SERVER_NAME,
  apiEndpoints: {
    photos: process.env.API_ENDPOINT_PHOTOS,
    images: process.env.API_ENDPOINT_IMAGES,
  },
  version: process.env.VERSION,
}));
