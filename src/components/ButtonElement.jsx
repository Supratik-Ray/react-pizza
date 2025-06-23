function ButtonElement({ disabled, onButtonClick, children, padding }) {
  return (
    <button
      disabled={disabled}
      onClick={onButtonClick}
      className={`${padding ? padding : "py-2 px-4"} ${
        disabled ? "bg-gray-300 text-gray-800" : "bg-amber-600  text-white"
      } rounded hover:cursor-pointer hover:bg-amber-500 transition duration-300`}
    >
      {children}
    </button>
  );
}

export default ButtonElement;
