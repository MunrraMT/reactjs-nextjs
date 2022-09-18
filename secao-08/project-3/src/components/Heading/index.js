import P from 'prop-types';

import * as Styled from './styles';

const Heading = ({ children }) => <Styled.Title>{children}</Styled.Title>;

Heading.propTypes = {
  children: P.string.isRequired,
};

export default Heading;
