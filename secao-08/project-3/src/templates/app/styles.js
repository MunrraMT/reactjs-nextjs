import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  ${({ background }) => css`
    background: ${background};
  `}
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
