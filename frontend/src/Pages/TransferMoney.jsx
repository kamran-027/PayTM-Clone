import axios from "axios";
import React, { useState } from "react";

const TransferMoney = ({
  userDetails,
  setShowTransferModal,
  setRefreshBalance,
}) => {
  const [amount, setAmount] = useState("");

  const transferMoney = async () => {
    await axios.post(
      `http://localhost:3000/api/v1/account/transfer`,
      {
        to: userDetails.id,
        amount: Number(amount),
      },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    );
  };

  return (
    // <div className="flex justify-center h-screen items-center bg-gray-300">
    <div className="flex flex-col bg-white gap-2 p-10 w-3/12 rounded-md border-2 border-gray-200">
      <div
        className="font-bold flex justify-end mr-5 cursor-pointer"
        onClick={() => setShowTransferModal(false)}
      >
        x
      </div>
      <div className="font-extrabold text-2xl mb-8 text-center">Send Money</div>
      <div className="flex gap-2 justify-start items-center">
        <div className="text-center text-2xl h-9 w-9 text-white bg-green-500 rounded-full">
          {userDetails && userDetails.firstName.split("")[0]}
        </div>
        <div className="font-bold text-2xl">
          {userDetails && `${userDetails.firstName} ${userDetails.lastName}`}
        </div>
      </div>
      <div className="font-bold">Amount (in Rs)</div>
      <input
        className="w-full border-2 p-2 rounded-md border-gray-200"
        placeholder="Enter Amount"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
      />
      <button
        className="w-full bg-green-500 p-2 rounded-md text-white text-center"
        onClick={() => {
          transferMoney();
          setAmount("");
          setShowTransferModal(false);
          setRefreshBalance((state) => !state);
        }}
      >
        Initiate Transfer
      </button>
      {/* </div> */}
    </div>
  );
};

export default TransferMoney;
