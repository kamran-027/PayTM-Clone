import React from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import FormFooter from "../components/FormFooter";
import InputBox from "../components/InputBox";
import SignButton from "../components/SignButton";

const Signup = () => {
  return (
    <div className="bg-gray-300 flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-stretch gap-3 p-5 bg-white rounded-lg">
        <Heading label={"Sign up"} />
        <SubHeading text={"Enter your information to create an account"} />
        <InputBox type={"text"} placeholder={"John"} label={"First Name"} />
        <InputBox type={"text"} placeholder={"Doe"} label={"Last Name"} />
        <InputBox
          type={"text"}
          placeholder={"johnd@email.com"}
          label={"Email"}
        />
        <InputBox type={"text"} placeholder={1234} label={"Password"} />
        <SignButton text={"Sign Up"} redirect={"/dashboard"} />
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
