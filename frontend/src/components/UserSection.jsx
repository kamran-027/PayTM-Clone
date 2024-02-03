import React from "react";
import { useNavigate } from "react-router-dom";

const UserSection = ({ to }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col p-5 gap-2">
      <div className="font-bold">Users</div>
      <input
        className="border-2 w-full border-gray-300 p-1 rounded-sm"
        placeholder="Search Users"
      />
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center gap-2">
          <div className="rounded-full text-center h-7 w-7 bg-gray-200">K</div>
          <div>Kamran Khan</div>
        </div>
        <button
          className="bg-black text-white px-4 py-2 rounded-md"
          onClick={() => navigate(to)}
        >
          Send Money
        </button>
      </div>
    </div>
  );
};

export default UserSection;
