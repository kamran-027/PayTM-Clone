import React from "react";
import { Link } from "react-router-dom";

const SignButton = ({ text, redirect, signUser }) => {
  return (
    <Link to={redirect}>
      <button
        className="bg-gray-900 text-white w-full p-1 rounded-md"
        onClick={signUser}
      >
        {text}
      </button>
    </Link>
  );
};

export default SignButton;
