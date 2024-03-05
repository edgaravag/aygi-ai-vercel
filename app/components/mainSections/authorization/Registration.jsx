"use client";
import React, { useState } from "react";
import CloseIcon from "../../../../public/closeIcon.svg";
import Image from "next/image";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Registration = ({ onClose }) => {
  const [showForm, setShowForm] = useState(true);
  const handleClose = () => {
    onClose();
  };

  return (
    <div
      className="center z-30 bg-black bg-opacity-60 fixed top-0 left-0 right-0 bottom-0"
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
            {showForm ? <SignIn onClose={onClose} /> : <SignUp />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
