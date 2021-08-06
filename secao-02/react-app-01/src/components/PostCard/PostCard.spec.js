import { render } from '@testing-library/react';
import PostCard from '.';
import postCardPropsMock from './mock';

const { title, body, cover } = postCardPropsMock;

describe('Deve testar o <PostCard />', () => {
  test('Deve renderizar sem erros', () => {
    render(<PostCard cover={cover} title={title} body={body} />);
  });

  test('Deve renderizar uma imagem', () => {
    const { getByRole } = render(
      <PostCard cover={cover} title={title} body={body} />,
    );

    expect(getByRole('img')).toHaveAttribute('src', cover);
    expect(getByRole('img')).toHaveAttribute('alt', title);
  });

  test('Deve renderizar um título', () => {
    const { getByRole } = render(
      <PostCard cover={cover} title={title} body={body} />,
    );

    expect(getByRole('heading')).toHaveTextContent(title);
  });

  test('Deve renderizar um texto', () => {
    const { getByText } = render(
      <PostCard cover={cover} title={title} body={body} />,
    );

    expect(getByText(body)).toBeInTheDocument();
  });

  test('Deve fazer um Snapshot', () => {
    const { container } = render(
      <PostCard cover={cover} title={title} body={body} />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
