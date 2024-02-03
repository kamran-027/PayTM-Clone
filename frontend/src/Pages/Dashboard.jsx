import React from "react";
import AppBar from "../components/AppBar";
import UserSection from "../components/UserSection";

const Dashboard = () => {
  return (
    <div>
      <AppBar />
      <div className="font-bold p-5">Your balance is Rs. 10,000</div>
      <UserSection to={"/transfer"} />
    </div>
  );
};

export default Dashboard;
