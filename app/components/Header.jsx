"use client";
import React, { useState } from "react";
import SignIn from "./mainSections/authorization/SignIn";
import SignUp from "./mainSections/authorization/SignUp";
import Button from "@/uiComponents/Button";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <header className="fixed z-10 scroll-auto h-auto py-[29px] flex justify-around items-center flex-wrap bg-black w-full gap-x-12 gap-y-5 px-4 2xl:px-[237px] xl:px-32 lg:px-14 sm:justify-between sm:px-10 max-[412px]:pb-4 max-[412px]:pt-3">
        <div>
          <p className="text-white text-2xl font-bold font-aygiFont cursor-pointer">AYGI AI</p>
        </div>
        <div className="flex gap-4">
          <Button
            className="px-[24px] py-[10px] text-white bg-[#68bb59] font-medium"
            onClick={() => setShowSignIn(true)}
          >
            Sign In
          </Button>
          <Button 
            className="px-[24px] py-[10px] text-white bg-transparent border border-[#68bb59] font-medium"
            onClick={() => setShowSignUp(true)}
          >
            Sign Up
          </Button>
        </div>
      </header>
      {showSignIn && <SignIn onClose={() => setShowSignIn(false)} showSignUp={showSignUp} />}
      {showSignUp && <SignUp onClose={() => setShowSignUp(false)} showSignIn={showSignIn} />}
    </>
  );
};

export default Header;
