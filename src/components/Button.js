import React from 'react';

const sizes = {
  default: `py-3 px-6`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({ children, className = '', size }) => {
  return (
    <button
      type="button"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-yellow-400
        hover:bg-yellow-500
        rounded-full
        text-white
    `}
    >
      {children}
    </button>
  );
};

export default Button;
