import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import FormFooter from "../components/FormFooter";
import InputBox from "../components/InputBox";
import SignButton from "../components/SignButton";
import axios from "axios";

const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const addUser = () => {
    axios.post(`http://localhost:3000/api/v1/user/signup`, userDetails);
  };

  return (
    <div className="bg-gray-300 flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-stretch gap-3 p-5 bg-white rounded-lg">
        <Heading label={"Sign up"} />
        <SubHeading text={"Enter your information to create an account"} />
        <InputBox
          type={"text"}
          placeholder={"John"}
          label={"First Name"}
          setUserDetails={setUserDetails}
          user={userDetails}
        />
        <InputBox
          type={"text"}
          placeholder={"Doe"}
          label={"Last Name"}
          setUserDetails={setUserDetails}
          user={userDetails}
        />
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
          text={"Sign Up"}
          redirect={"/dashboard"}
          signUser={addUser}
        />
        <FormFooter
          content={"Already have an account? "}
          redirectText={"Sign in"}
          redirect={"/signin"}
        />
      </div>
    </div>
  );
};

export default Signup;
