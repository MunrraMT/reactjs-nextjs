import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextInput from '.';

describe('Deve testar o componente <TextInput />', () => {
  const text = 'Estou pesquisando';
  const fn = jest.fn();

  test('Deve renderizar sem erros', () => {
    render(<TextInput searchValue={text} handleInput={fn} />);
  });

  test('Deve renderizar um texto "Busque aqui" no placeholder', () => {
    const { getByPlaceholderText } = render(
      <TextInput searchValue={text} handleInput={fn} />,
    );

    expect(getByPlaceholderText('Busque aqui')).toBeInTheDocument();
  });

  test('Deve renderizar um texto passado por searchValue no campo value', () => {
    const { getByDisplayValue } = render(
      <TextInput searchValue={text} handleInput={fn} />,
    );

    expect(getByDisplayValue(text)).toBeInTheDocument();
  });

  test('Deve chamar uma função a cada tecla digitada', () => {
    const { getByPlaceholderText } = render(
      <TextInput searchValue={text} handleInput={fn} />,
    );

    userEvent.type(getByPlaceholderText('Busque aqui'), text);

    expect(fn).toHaveBeenCalledTimes(text.length);
  });

  test('Deve gerar um Snapshot', () => {
    const { container } = render(
      <TextInput searchValue={text} handleInput={fn} />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
