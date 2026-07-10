const Button = ({ children, secondary }) => {
  return (
    <button
      className={`
px-8
py-3
rounded-full
font-semibold
transition
duration-300

${
  secondary
    ? "bg-white text-gray-900 hover:bg-gray-200"
    : "bg-[#F4B400] text-black hover:bg-yellow-500"
}

`}
    >
      {children}
    </button>
  );
};

export default Button;
