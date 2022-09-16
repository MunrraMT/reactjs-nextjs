import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.mainBg};
  `}
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
