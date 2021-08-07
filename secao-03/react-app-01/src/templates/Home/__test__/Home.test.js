import {
  render,
  waitForElementToBeRemoved,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  test('Deve renderizar um texto dizendo "Loading..." quando não ouver posts', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Loading...')).toBeInTheDocument();
  });

  test('Deve renderizar um texto dizendo "Loading..." até que os posts sejam recebidos pela API Externa', async () => {
    const { getByText } = render(<Home />);

    const message = getByText('Loading...');

    expect(message).toBeInTheDocument();

    await waitForElementToBeRemoved(message);
  });

  test('Deve renderizar os <PostCard /> pelo componente <Posts />, quando receber os dados da API Externa', async () => {
    const { getAllByRole, getByText, getByAltText } = render(<Home />);

    await waitFor(() => {
      expect(getAllByRole('article')).toHaveLength(3);

      expect(getByText(posts[0].title)).toBeInTheDocument();
      expect(getByText(posts[0].body)).toBeInTheDocument();
      expect(getByAltText(posts[0].title)).toHaveAttribute(
        'src',
        photos[0].url,
      );

      expect(getByText(posts[1].title)).toBeInTheDocument();
      expect(getByText(posts[1].body)).toBeInTheDocument();
      expect(getByAltText(posts[1].title)).toHaveAttribute(
        'src',
        photos[1].url,
      );

      expect(getByText(posts[2].title)).toBeInTheDocument();
      expect(getByText(posts[2].body)).toBeInTheDocument();
      expect(getByAltText(posts[2].title)).toHaveAttribute(
        'src',
        photos[2].url,
      );
    });
  });

  test('Deve renderizar o componente <TextIpunt />', () => {
    const { getByPlaceholderText } = render(<Home />);

    expect(getByPlaceholderText('Busque aqui')).toBeInTheDocument();
  });

  test('Deve pesquisar por posts através do componente <TextInput />', async () => {
    const { getAllByRole, getByPlaceholderText, getByText, getByAltText } =
      render(<Home />);

    await waitFor(() => {
      expect(getAllByRole('article')).toHaveLength(3);
    });

    userEvent.type(getByPlaceholderText('Busque aqui'), posts[1].title);

    await waitFor(() => {
      expect(getAllByRole('article')).toHaveLength(1);

      expect(getByText(posts[1].title)).toBeInTheDocument();
      expect(getByText(posts[1].body)).toBeInTheDocument();
      expect(getByAltText(posts[1].title)).toHaveAttribute(
        'src',
        photos[1].url,
      );
    });
  });

  test('Deve renderizar o texto "Busca não encontrada" quando não encontrar o texto pesquisado pelo componente <TextInput />', async () => {
    const { getAllByRole, queryAllByRole, getByPlaceholderText, getByText } =
      render(<Home />);

    await waitFor(() => {
      expect(getAllByRole('article')).toHaveLength(3);
    });

    userEvent.type(getByPlaceholderText('Busque aqui'), 'Não vai encontrar');

    await waitFor(() => {
      expect(queryAllByRole('article')).toHaveLength(0);
      expect(getByText('Busca não encontrada')).toBeInTheDocument();
    });
  });

  test('Deve renderizar o componente <Button /> com o texto "Ver mais posts"', () => {
    const { getByRole } = render(<Home />);

    expect(getByRole('button')).toHaveTextContent('Ver mais posts');
  });

  test('Deve mostrar mais posts quando o componente <Button /> for clicado', async () => {
    const { getAllByRole, getByRole } = render(<Home />);

    await waitFor(() => {
      expect(getAllByRole('article')).toHaveLength(3);
    });

    userEvent.click(getByRole('button'));

    await waitFor(() => {
      expect(getAllByRole('article')).toHaveLength(6);
    });
  });

  test('Deve fazer um Snapshot', async () => {
    const { getAllByRole, container } = render(<Home />);

    await waitFor(() => {
      expect(getAllByRole('article')).toHaveLength(3);
      expect(container).toMatchSnapshot();
    });
  });
});
