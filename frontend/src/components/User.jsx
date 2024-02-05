import React, { useState } from "react";
import TransferMoney from "../Pages/TransferMoney";

const User = ({ userDetails, setRefreshBalance }) => {
  const [showTransferModal, setShowTransferModal] = useState(false);

  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center gap-2">
            <div className="rounded-full text-center h-7 w-7 bg-gray-200">
              {userDetails.firstName.split("")[0]}
            </div>
            <div>
              {userDetails.firstName} {userDetails.lastName}
            </div>
          </div>
          <button
            className="bg-black text-white px-4 py-2 rounded-md"
            onClick={() => {
              setShowTransferModal(true);
            }}
          >
            Send Money
          </button>
        </div>
      </div>
      {showTransferModal ? (
        <div
          className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          aria-hidden="true"
          tabIndex={-1}
        >
          <TransferMoney
            userDetails={userDetails}
            setShowTransferModal={setShowTransferModal}
            setRefreshBalance={setRefreshBalance}
          />
        </div>
      ) : null}
    </div>
  );
};

export default User;
