import Image from "next/image";
import React, { useState } from "react";
import ResetPassword from "./ResetPassword";
import PopUpWrap from "@/app/components/ui/PopUpWrap";
import Button from "@/app/components/ui/Button";
import ValidationIcon from "@public/icons/emailValidation.png";

const EmailValidation = ({ onClose }) => {
  const [showResetPassword, setShowResetPassword] = useState(false);
  return (
    <>
      {!showResetPassword && (
        <PopUpWrap
          onClose={onClose}
          className="w-[448px] center pt-[66px] pb-[235px]"
        >
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
              <Button
                className="bg-[#68BB59] text-white w-full py-[14px]"
                onClick={() => setShowResetPassword(true)}
              >
                Go to email
              </Button>
              <Button className="text-[#68BB59] text-sm font-normal w-full">
                Resend link again
              </Button>
            </div>
          </div>
        </PopUpWrap>
      )}
      {showResetPassword && <ResetPassword onClose={onClose} />}
    </>
  );
};

export default EmailValidation;
