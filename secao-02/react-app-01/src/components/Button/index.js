import './styles.css';

const Button = ({ disabled, handleClick, text }) => (
  <button
    disabled={disabled}
    className='btn-more-posts'
    type='button'
    onClick={handleClick}
  >
    {text}
  </button>
);

export default Button;
