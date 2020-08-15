import React from "react";

const Checkbox = React.forwardRef(({ label, id }, ref) => (
  <label className="inline-flex items-center cursor-pointer">
    <input
      id={id}
      type="checkbox"
      className="form-checkbox text-gray-800 ml-1 w-5 h-5"
      style={{ transition: "all .15s ease" }}
    />
    <span className="ml-2 text-sm font-semibold text-gray-700">{label}</span>
  </label>
));

export default Checkbox