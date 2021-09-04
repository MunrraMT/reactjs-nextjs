const Button = ({ children, onBtnClick, disabled }) => (
  <button disabled={disabled} onClick={onBtnClick} type="button">
    {children}
  </button>
);

export default Button;
