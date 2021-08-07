// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import { photos, posts } from './mock';

const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(posts)),
  ),

  rest.get('https://jsonplaceholder.typicode.com/photos', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(photos)),
  ),
];

export default handlers;
