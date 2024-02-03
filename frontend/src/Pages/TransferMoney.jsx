import React from "react";

const TransferMoney = () => {
  return (
    <div className="flex justify-center h-screen items-center bg-gray-300">
      <div className="flex flex-col bg-white gap-2 p-10 w-3/12 rounded-md">
        <div className="font-extrabold text-2xl mb-8 text-center">
          Send Money
        </div>
        <div className="flex gap-2 justify-start items-center">
          <div className="text-center text-2xl h-9 w-9 text-white bg-green-500 rounded-full">
            A
          </div>
          <div className="font-bold text-2xl">Friend's Name</div>
        </div>
        <div className="font-bold">Amount (in Rs)</div>
        <input
          className="w-full border-2 p-2 rounded-md border-gray-200"
          placeholder="Enter Amount"
        />
        <button className="w-full bg-green-500 p-2 rounded-md text-white text-center">
          Initiate Transfer
        </button>
      </div>
    </div>
  );
};

export default TransferMoney;
