import React from "react";

interface InputProps {
  icon?: {
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
  };
  onChange?: (value: string) => void;
  placeholder?: string;
  value?: string;
  className?: string;
  [key: string]: any;
}

const Input: React.FC<InputProps> = ({
  icon,
  onChange,
  placeholder,
  value,
  className,
  dark,
  ...key
}) => {
  return (
    <div className="relative w-full">
      {icon?.iconLeft}
      <input
        className={`w-full h-10 rounded-lg border focus:outline-none pl-10 transition-colors pr-10 !font-medium text-sm ${
          !dark
            ? "border-grayBorder bg-[#373737]  text-white"
            : "border-lightBorder bg-lightBg text-grayText"
        } ${className}
          transition-colors duration-200`}
        placeholder={placeholder || "Search..."}
        value={value || ""}
        onChange={(e) => onChange?.(e.target.value)}
        {...key}
      />
      {icon?.iconRight}
    </div>
  );
};

export default Input;
