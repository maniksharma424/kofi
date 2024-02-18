import React from "react";

const Button = ({ className, children }) => {
  return (
    <div className={`${className} text-gray-10  bg-red  `}>{children}</div>
  );
};

export default Button;
