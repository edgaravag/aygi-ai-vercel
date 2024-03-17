"use client";
import React, { useState } from "react";
import FacebookIcon from "../../../../public/colorfullFacebookIcon.svg";
import GoogleIcon from "../../../../public/googleIcon.svg";
import CloseIcon from "../../../../public/closeIcon.svg";
import Image from "next/image";
import ForgotPassword from "./ForgotPassword";
import SignUp from "./SignUp";

const SignIn = ({ onClose }) => {
  const [showForgot, setShowForgot] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <div
        className={`center z-30 bg-black bg-opacity-60 fixed top-0 left-0 right-0 bottom-0 ${!showForm && "hidden"}`}
        onClick={handleClose}
      >
        <div onClick={(e) => e.stopPropagation()}>
          <div className="relative max-w-[448px] py-11 px-16 bg-white rounded-md">
            <button
              className="absolute z-[100] center w-[41px] h-[41px] top-[-18px] right-[-18px] bg-[#68bb59] rounded-full"
              onClick={handleClose}
            >
              <Image src={CloseIcon} alt="" />
            </button>
            <div className="flex flex-col">
              <div className="flex">
                <button
                  className={`center py-4 font-medium text-sm ${
                    showForm
                      ? "border-b-2 border-b-[#68bb59] text-[#68bb59]"
                      : "text-[#808080]"
                  } w-[160px] tracking-widest`}
                  onClick={() => setShowForm(!showForm)}
                >
                  SIGN IN
                </button>
                <button
                  className={`center py-4 font-medium text-sm ${
                    !showForm
                      ? "border-b-2 border-b-[#68bb59] text-[#68bb59]"
                      : "text-[#808080]"
                  } w-[160px] tracking-widest`}
                  onClick={() => setShowForm(!showForm)}
                >
                  SIGN UP
                </button>
              </div>
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
                    Forgot Password ?
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
            </div>
          </div>
        </div>
      </div>
      {!showForm && <SignUp onClose={handleClose} />}
    </>
  );
};

export default SignIn;
