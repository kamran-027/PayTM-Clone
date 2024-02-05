import React, { useEffect, useState } from "react";
import AppBar from "../components/AppBar";
import UserSection from "../components/UserSection";
import axios from "axios";

const Dashboard = () => {
  const [userBalanceDetails, setUserBalanceDetails] = useState("");
  const [userDetails, setUserDetails] = useState();
  const [refreshBalance, setRefreshBalance] = useState(false);

  const getUserBalance = async () => {
    const resp = await axios.get(
      `http://localhost:3000/api/v1/account/balance`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    );
    setUserBalanceDetails(resp.data);
  };

  const getUserDetails = async () => {
    const resp = await axios.get(`http://localhost:3000/api/v1/user/self`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    setUserDetails(resp.data.user);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  useEffect(() => {
    getUserBalance();
  }, [refreshBalance]);

  return (
    <div>
      <AppBar userDetails={userDetails} />
      <div className="font-bold p-5">
        Your balance is Rs {userBalanceDetails}
      </div>
      <UserSection setRefreshBalance={setRefreshBalance} />
    </div>
  );
};

export default Dashboard;
