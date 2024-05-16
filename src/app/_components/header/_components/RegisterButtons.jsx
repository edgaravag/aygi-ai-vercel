"use client";
import { useState } from "react";
import Button from "@/src/components/ui/Button";
import dynamic from "next/dynamic";
const SignIn = dynamic(() => import("./authorization/SignIn"));
const SignUp = dynamic(() => import("./authorization/SignUp"));
const EmailValidation = dynamic(() => import("./authorization/EmailValidation")) 
const ConfirmEmail = dynamic(() => import("./authorization/ConfirmEmail")) 

const RegisterButtons = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showEmailValidation, setShowEmailValidation] = useState(false);
  const [showConfirmEmail, setShowConfirmEmail] = useState(false);

  return (
    <>
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
      {showSignIn && <SignIn onClose={() => setShowSignIn(false)} />}
      {showSignUp && (
        <SignUp
          onClose={() => setShowSignUp(false)}
          setShowEmailValidation={setShowEmailValidation}
        />
      )}
      {showEmailValidation && (
        <EmailValidation
          onClose={() => setShowEmailValidation(false)}
          setShowConfirmEmail={setShowConfirmEmail}
        />
      )}
      {showConfirmEmail && (
        <ConfirmEmail
          onClose={() => setShowConfirmEmail(false)}
          showEmailValidation={showEmailValidation}
        />
      )}
    </>
  );
};

export default RegisterButtons;
