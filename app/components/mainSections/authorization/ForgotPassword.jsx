"use client";
import React, { useState } from "react";
import EmailValidation from "./EmailValidation";

const ForgotPassword = ({ onClose }) => {
  const [showEmailValidation, setShowEmailValidation] = useState(false);
  const handleClose = () => {
    onClose();
  };
  return (
    <>
      <div className="absolute z-50 top-0 left-0 right-0 bottom-0 center bg-white py-16 pb-[294px] rounded-md">
        <div className="flex flex-col w-full px-16">
          <h2 className="text-xl font-medium">Forgot Password?</h2>
          <p className="text-sm font-normal mt-1">
            Please, enter your email address
          </p>
          <div className="relative mt-6">
            <p className="absolute left-4 px-[5px] bg-white text-[#808080] text-xs">
              Email
            </p>
            <input
              type="password"
              className="w-full mt-2 border border-[#808080] px-5 rounded-md h-[54px] text-black text-sm outline-none"
            />
          </div>
          <div className="flex flex-col gap-3 mt-[38px]">
            <button
              className="center bg-[#68BB59] text-white w-full py-[14px] rounded-md"
              onClick={() => setShowEmailValidation(true)}
            >
              Reset password
            </button>
            <button
              className="center w-full py-[14px] border border-[#808080] text-[#808080] rounded-md"
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      {showEmailValidation && <EmailValidation />}
    </>
  );
};

export default ForgotPassword;
