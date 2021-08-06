import { func, string, bool } from 'prop-types';
import './styles.css';

const Button = ({ handleClick, disabled, text }) => (
  <button
    className='btn-more-posts'
    type='button'
    onClick={handleClick}
    disabled={disabled}
  >
    {text}
  </button>
);

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  handleClick: func.isRequired,
  disabled: bool,
  text: string.isRequired,
};

export default Button;
