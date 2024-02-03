import React from "react";
import FormFooter from "../components/FormFooter";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SignButton from "../components/SignButton";
import SubHeading from "../components/SubHeading";

const Signin = () => {
  return (
    <div className="bg-gray-300 flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-stretch gap-3 p-5 bg-white rounded-lg">
        <Heading label={"Sign In"} />
        <SubHeading text={"Enter your credentials to access your account"} />
        <InputBox
          type={"text"}
          placeholder={"johnd@email.com"}
          label={"Email"}
        />
        <InputBox type={"text"} placeholder={1234} label={"Password"} />
        <SignButton text={"Sign In"} redirect={"/dashboard"} />
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
