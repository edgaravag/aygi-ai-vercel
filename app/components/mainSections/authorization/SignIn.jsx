"use client";
import React, { useState } from "react";
import FacebookIcon from "../../../../public/colorfullFacebookIcon.svg";
import GoogleIcon from "../../../../public/googleIcon.svg";
import Image from "next/image";
import ForgotPassword from "./ForgotPassword";

const SignIn = ({ onClose }) => {
  const [showForgot, setShowForgot] = useState(false);

  return (
    <>
      <form className="mt-12" autoComplete="off">
        <div className="relative">
          <div className="flex flex-col gap-4">
            <div>
              <p className="absolute left-4 px-[5px] bg-white text-[#808080] text-xs">
                Email
              </p>
              <input
                type="email"
                className="w-full mt-2 border border-[#808080] px-5 rounded-md h-[54px] text-black text-sm outline-none"
              />
            </div>
            <div>
              <p className="absolute left-4 px-[5px] bg-white text-[#808080] text-xs">
                Password
              </p>
              <input
                type="password"
                className="w-full mt-2 border border-[#808080] px-5 rounded-md h-[54px] text-black text-sm outline-none"
              />
            </div>
          </div>
          <button className="w-full center mt-6 h-[54px] text-white bg-[#68bb59] font-medium rounded-md">
            Sign in
          </button>
          <button
            className="text-sm font-normal text-black opacity-60 mt-5"
            onClick={(e) => {
              e.preventDefault();
              setShowForgot(!showForgot);
            }}
          >
            Forgot Password?
          </button>
        </div>
        <div className="flex items-center justify-between mt-5">
          <div className="border border-[#bfbfbf] w-[43%] h-[1.5px]"></div>
          <p className="text-[#bfbfbf] text-sm">Or</p>
          <div className="border border-[#bfbfbf] w-[43%] h-[1.5px]"></div>
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <button className="center py-[14px] gap-4 border border-[#808080] rounded-md">
            <Image src={FacebookIcon} alt="" />
            <p className="text-[#808080]">Sign in with Facebook</p>
          </button>
          <button className="center py-[14px] gap-4 border border-[#808080] rounded-md">
            <Image src={GoogleIcon} alt="" />
            <p className="text-[#808080]">Sign in with Google</p>
          </button>
        </div>
      </form>
      {showForgot && <ForgotPassword onClose={onClose} />}
    </>
  );
};

export default SignIn;
