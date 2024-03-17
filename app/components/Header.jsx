"use client";
import React, { useState } from "react";
import SignIn from "./mainSections/authorization/SignIn";
import SignUp from "./mainSections/authorization/SignUp";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <header className="fixed z-10 scroll-auto h-auto py-[29px] flex justify-around items-center flex-wrap bg-black w-full gap-x-12 gap-y-5 px-4 2xl:px-[237px] xl:px-32 lg:px-14 sm:justify-between sm:px-10">
        <div>
          <p className="text-white text-2xl font-bold font-aygiFont cursor-pointer">AYGI AI</p>
        </div>
        <div className="flex gap-4">
          <button
            className="center px-[24px] py-[10px] text-white bg-[#68bb59] rounded-md font-medium font-aygiFont"
            onClick={() => setShowSignIn(true)}
          >
            Sign In
          </button>
          <button 
            className="center px-[24px] py-[10px] text-white bg-transparent border border-[#68bb59] rounded-md font-medium font-aygiFont"
            onClick={() => setShowSignUp(true)}
          >
            Sign Up
          </button>
        </div>
      </header>
      {showSignIn && <SignIn onClose={() => setShowSignIn(false)} showSignUp={showSignUp} />}
      {showSignUp && <SignUp onClose={() => setShowSignUp(false)} showSignIn={showSignIn} />}
    </>
  );
};

export default Header;
