// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) =>
    res(ctx.status(200), ctx.json([])),
  ),

  rest.get('https://jsonplaceholder.typicode.com/photos', (req, res, ctx) =>
    res(ctx.status(200), ctx.json([])),
  ),
];

export default handlers;
