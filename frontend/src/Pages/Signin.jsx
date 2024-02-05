import React, { useState } from "react";
import FormFooter from "../components/FormFooter";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SignButton from "../components/SignButton";
import SubHeading from "../components/SubHeading";
import axios from "axios";

const Signin = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const signInUser = async () => {
    const resp = await axios.post(
      `http://localhost:3000/api/v1/user/signin`,
      userDetails
    );
    sessionStorage.setItem("token", resp.data.token);
  };

  return (
    <div className="bg-gray-300 flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-stretch gap-3 p-5 bg-white rounded-lg">
        <Heading label={"Sign In"} />
        <SubHeading text={"Enter your credentials to access your account"} />
        <InputBox
          type={"text"}
          placeholder={"johnd@email.com"}
          label={"Email"}
          user={userDetails}
          setUserDetails={setUserDetails}
        />
        <InputBox
          type={"password"}
          placeholder={1234}
          label={"Password"}
          user={userDetails}
          setUserDetails={setUserDetails}
        />
        <SignButton
          text={"Sign In"}
          redirect={"/dashboard"}
          signUser={signInUser}
        />
        <FormFooter
          content={"Dont have an account? "}
          redirectText={"Sign Up"}
          redirect={"/signup"}
        />
      </div>
    </div>
  );
};

export default Signin;
