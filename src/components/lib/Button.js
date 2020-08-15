import React from "react";

const Button = React.forwardRef(({ label, type, ...rest }, ref) => (
  <button
    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
    type={type}
    style={{ transition: "all .15s ease" }}
    {...rest}
  >
    {label}
  </button>
));

export default Button;
