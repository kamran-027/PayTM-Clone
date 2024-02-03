import React from "react";

const AppBar = () => {
  return (
    <div>
      <div className="flex items-center justify-between m-5 ">
        <div>PayTM App</div>
        <div className="gap-2 flex items-center justify-center">
          <h1>Hello</h1>
          <div className="text-lg rounded-full w-7 h-7 text-center bg-gray-200 ">
            U
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-200"></div>
    </div>
  );
};

export default AppBar;
