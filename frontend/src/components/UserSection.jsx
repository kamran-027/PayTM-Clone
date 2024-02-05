import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "./User";

const UserSection = ({ setRefreshBalance }) => {
  const [filterVal, setFilterVal] = useState("");
  const [users, setUsers] = useState([]);
  let delay;

  const getAllUsers = async (filterValue) => {
    const resp = await axios.get(`http://localhost:3000/api/v1/user/bulk`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      params: { filter: filterValue },
    });
    setUsers(resp.data.users);
  };

  useEffect(() => {
    delay = setTimeout(() => getAllUsers(filterVal), 500);
    return () => clearTimeout(delay);
  }, [filterVal]);

  return (
    <div className="flex flex-col p-5 gap-2">
      <div className="font-bold">Users</div>
      <input
        className="border-2 w-full border-gray-300 p-1 rounded-sm"
        placeholder="Search Users"
        onChange={(e) => setFilterVal(e.target.value)}
      />
      {users.map((user) => {
        return (
          <User
            key={user.id}
            userDetails={user}
            setRefreshBalance={setRefreshBalance}
          />
        );
      })}
    </div>
  );
};

export default UserSection;
