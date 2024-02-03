import React from "react";
import { Link } from "react-router-dom";

const FormFooter = ({ content, redirectText, redirect }) => {
  return (
    <div className="text-sm text-center font-semibold">
      <span>{content}</span>
      <Link to={redirect}>
        <span className="underline">{redirectText}</span>
      </Link>
    </div>
  );
};

export default FormFooter;
