const Button = ({ children, onClick, className, type, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`center rounded-md ${className}`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
