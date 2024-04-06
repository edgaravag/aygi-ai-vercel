'use client'
import { useState } from "react";
import Button from "@/src/components/ui/Button";
import React from "react";
import dynamic from 'next/dynamic';
const SignUp = dynamic(() => import("../../header/_components/authorization/SignUp"))

const ShowSignUp = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <Button
        className="text-white bg-[#68bb59] mt-8 py-[12px] px-[24px] max-[1160px]:mx-auto max-[1160px]:border-2 border-white"
        onClick={() => setShowSignUp(true)}
      >
        Let's start
      </Button>
      {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}
    </>
  );
};

export default ShowSignUp;
