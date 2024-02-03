import React from "react";

const InputBox = ({ label, type, placeholder }) => {
  return (
    <div className="flex flex-col gap-1 justify-start">
      <div className="font-semibold text-red text-left">{label}</div>
      <input
        type={type}
        className="rounded-md px-2 py-1 text-left border-gray-200 border-solid border-2"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputBox;
