import React from "react";

const InputBox = ({ label, type, placeholder, user, setUserDetails }) => {
  return (
    <div className="flex flex-col gap-1 justify-start">
      <div className="font-semibold text-red text-left">{label}</div>
      <input
        type={type}
        className="rounded-md px-2 py-1 text-left border-gray-200 border-solid border-2"
        placeholder={placeholder}
        onChange={(e) => {
          label == "First Name"
            ? setUserDetails({ ...user, firstName: e.target.value })
            : label == "Last Name"
            ? setUserDetails({ ...user, lastName: e.target.value })
            : label == "Email"
            ? setUserDetails({ ...user, username: e.target.value })
            : setUserDetails({ ...user, password: e.target.value });
        }}
      />
    </div>
  );
};

export default InputBox;
