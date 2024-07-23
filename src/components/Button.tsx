const Button = (props: any) => {
  const { className, icon, children, onClick } = props;
  return (
    <button
      className={`flex gap-2 items-center bg-[#2E2E2E] text-white py-1 px-5 rounded-md hover:shadow-xl hover:border ${className}`}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
