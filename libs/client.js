import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'samuraienergy',
  apiKey: process.env.API_KEY,
});