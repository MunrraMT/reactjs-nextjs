import { render } from '@testing-library/react';
import Posts from '.';
import postsPropsMock from './mock';

const props = postsPropsMock;

describe('Deve testar o componente <Posts />', () => {
  test('Deve renderizar sem erros', () => {
    render(<Posts />);
  });

  test('Deve renderizar texto "Não existem posts" se não for passado posts por props', () => {
    const { getByText } = render(<Posts />);

    expect(getByText('Não existem posts')).toBeInTheDocument();
  });

  test('Deve renderizar texto "Loading..." se for passado um array vazio por props', () => {
    const { getByText } = render(<Posts posts={[]} />);

    expect(getByText('Loading...')).toBeInTheDocument();
  });

  test('Deve renderizar uma lista de <PostCard /> baseado no array passado por props', () => {
    const { getAllByRole } = render(<Posts posts={props} />);

    expect(getAllByRole('article')).toHaveLength(props.length);
    expect(getAllByRole('img')).toHaveLength(props.length);
    expect(getAllByRole('heading')).toHaveLength(props.length);
  });

  test('Deve fazer um Snapshot', () => {
    const { container } = render(<Posts posts={props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
