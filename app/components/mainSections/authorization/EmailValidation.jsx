"use client";
import Image from "next/image";
import React, { useState } from "react";
import ValidationIcon from "../../../../public/emailValidation.png";
import ResetPassword from "./ResetPassword";

const EmailValidation = () => {
  const [showResetPassword, setShowResetPassword] = useState(false);
  return (
    <>
      <div className="absolute z-50 top-0 left-0 right-0 bottom-0 center bg-white pt-[66px] pb-[235px] rounded-md">
        <div className="flex flex-col items-center w-full px-16">
          <Image src={ValidationIcon} alt="" />
          <h2 className="text-xl font-medium text-center mt-4">
            Email validation panding
          </h2>
          <p className="text-sm font-normal text-center leading-[21px] mt-1 w-[332px]">
            We have sent a link to your email, please follow the link and
            confirm your registration by email
          </p>
          <div className="flex flex-col w-full gap-[14px] mt-16">
            <button 
				className="center bg-[#68BB59] text-white w-full py-[14px] rounded-md"
				onClick={() => setShowResetPassword(true)}
			>
              Go to email
            </button>
            <button className="center text-[#68BB59] text-sm font-normal w-full rounded-md">
              Resend link again
            </button>
          </div>
        </div>
      </div>
      {showResetPassword && <ResetPassword />}
    </>
  );
};

export default EmailValidation;
