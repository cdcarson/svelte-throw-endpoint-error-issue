import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = (event) => {
  throw new Error('This always throws this error from this endpoint.')
};


