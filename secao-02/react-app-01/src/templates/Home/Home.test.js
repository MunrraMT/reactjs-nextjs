import { render } from '@testing-library/react';
import Home from '.';

describe('Deve testar o componente Home', () => {
  test('Deve renderizar sem erros', () => {
    render(<Home />);
  });
});
