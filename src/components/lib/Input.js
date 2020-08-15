import React from "react";

const Input = React.forwardRef(
  ({ label, type, placeholder, requiredError }, ref) => (
    <>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {label}
      </label>
      <input
        className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
          requiredError && "border-red-500"
        }`}
        type={type}
        placeholder={placeholder}
        ref={ref}
      />
      {/* <p className="text-red-500 text-xs italic">{requiredError?.message}</p> */}
    </>
  )
);

export default Input;