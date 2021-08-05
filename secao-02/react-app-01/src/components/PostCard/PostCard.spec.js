import { render } from '@testing-library/react';
import PostCard from '.';
import postCardPropsMock from './mock';

const props = postCardPropsMock;

describe('Deve testar o <PostCard />', () => {
  test('Deve renderizar sem erros', () => {
    render(<PostCard />);
  });

  test('Deve renderizar uma imagem', () => {
    const { getByRole } = render(<PostCard {...props} />);

    expect(getByRole('img')).toHaveAttribute('src', props.cover);
    expect(getByRole('img')).toHaveAttribute('alt', props.title);
  });

  test('Deve renderizar um título', () => {
    const { getByRole } = render(<PostCard {...props} />);

    expect(getByRole('heading')).toHaveTextContent(props.title);
  });

  test('Deve renderizar um texto', () => {
    const { getByText } = render(<PostCard {...props} />);

    expect(getByText(props.body)).toBeInTheDocument();
  });

  test('Deve fazer um Snapshot', () => {
    const { container } = render(<PostCard {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
