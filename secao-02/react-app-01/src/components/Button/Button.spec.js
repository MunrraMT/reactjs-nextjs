import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '.';

describe('Deve testar <Button />', () => {
  const fn = jest.fn();
  const text = 'load more';

  test('Deve renderizar sem erros', () => {
    render(<Button text={text} handleClick={fn} />);
  });

  test('Deve ter uma classe - "btn-more-posts"', () => {
    const { getByRole } = render(<Button text={text} handleClick={fn} />);
    const button = getByRole('button');

    expect.assertions(1);
    expect(button).toHaveAttribute('class', 'btn-more-posts');
  });

  test('Deve conter um texto - "Load more"', () => {
    const { getByRole } = render(<Button text={text} handleClick={fn} />);
    const button = getByRole('button', { name: /load more/i });

    expect.assertions(1);
    expect(button).toBeInTheDocument();
  });

  test('Deve chamar uma função quando clicado - fireEvent', () => {
    const { getByRole } = render(<Button text={text} handleClick={fn} />);

    fireEvent.click(getByRole('button'));

    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('Deve chamar uma função quando clicado - userEvent', () => {
    const { getByRole } = render(<Button text={text} handleClick={fn} />);

    userEvent.click(getByRole('button'));

    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('Deve estar disabled quando disabled for passado como true', () => {
    const { getByRole } = render(
      <Button disabled text={text} handleClick={fn} />,
    );

    expect(getByRole('button')).toBeDisabled();
  });

  test('Deve estar enabled quando disabled for passado como false', () => {
    const { getByRole } = render(
      <Button disabled={false} text={text} handleClick={fn} />,
    );

    expect(getByRole('button')).toBeEnabled();
  });

  test('Deve fazer um Snapshot', () => {
    const { container } = render(
      <Button disabled={false} text={text} handleClick={fn} />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
