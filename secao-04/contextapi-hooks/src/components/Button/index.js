const Button = ({ children, onBtnClick }) => (
  <button onClick={onBtnClick} type="button">
    {children}
  </button>
);

export default Button;
