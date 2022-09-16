import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}

body {
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBG};
  `};
}
`;

export default GlobalStyles;
