import './styles.css';

const Button = ({ disabled, handleClick, children }) => (
  <button
    disabled={disabled}
    className='btn-more-posts'
    type='button'
    onClick={handleClick}
  >
    {children}
  </button>
);

export default Button;
