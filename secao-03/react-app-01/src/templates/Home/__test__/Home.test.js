import {
  render,
  waitForElementToBeRemoved,
  waitFor,
} from '@testing-library/react';
import { setupServer } from 'msw/node';

import Home from '..';
import handlers from './handlers';
import { photos, posts } from './mock';

describe('Deve testar o componente Home', () => {
  const server = setupServer(...handlers);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('Deve renderizar sem erros', () => {
    render(<Home />);
  });

  test('Deve renderizar um título - "Estudo de ReactJS - App Posts"', () => {
    const { getByRole } = render(<Home />);

    expect(getByRole('heading')).toHaveTextContent(
      'Estudo de ReactJS - App Posts',
    );
  });

  test('Deve renderizar um input para pesquisa', () => {
    const { getByPlaceholderText } = render(<Home />);

    expect(getByPlaceholderText('Busque aqui')).toBeInTheDocument();
  });

  test('Deve renderizar um texto dizendo "Loading..." quando não ouver posts', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Loading...')).toBeInTheDocument();
  });

  test('Deve renderizar um button com o texto "Ver mais posts"', () => {
    const { getByRole } = render(<Home />);

    expect(getByRole('button')).toHaveTextContent('Ver mais posts');
  });

  test('Deve renderizar um texto dizendo "Loading..." até que os posts sejam recebidos pela API Externa', async () => {
    const { getByText } = render(<Home />);

    const message = getByText('Loading...');

    expect(message).toBeInTheDocument();

    await waitForElementToBeRemoved(message);
  });
});
