import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = (event) => {
  throw new Error('My special endpoint error.')
};


