const Button = ({ children, onClick, className, type }) => {
  return (
    <button
      onClick={onClick}
      className={`center rounded-md ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
