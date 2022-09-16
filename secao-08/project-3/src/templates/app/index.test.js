import { screen } from '@testing-library/react';

import renderTheme from '../../styles/render-theme';
import Home from '.';
import theme from '../../styles/theme';

describe('Home', () => {
  test('testando comunicação com tema', () => {
    renderTheme(<Home />);
    const headingContainer = screen.getByTestId('wrapper');
    expect(headingContainer).toHaveStyle({
      background: theme.colors.mainBg,
    });
    expect(headingContainer).toMatchSnapshot();
  });
});
