"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import FacebookIcon from "../../../../public/colorfullFacebookIcon.svg";
import GoogleIcon from "../../../../public/googleIcon.svg";
import Image from "next/image";

const handleSignUp = (data) => {
  axios.post(`${process.env.NEXT_PUBLIC_AUTH_URL}/signup`, data)
  .catch((error) => {
    console.error(error)
    throw new Error('Registration is failed')
  }) 
}

const onSubmitHandler = async (data) => {
  try {
    await handleSignUp(data)
  } catch (error) {
    console.error(error)
    throw new Error('Registration is failed')
  }
  console.log(data)
}


const SignUp = () => {
  const { 
    register,
    handleSubmit,
    formState: { errors } 
  } = useForm();

  return (
    <form 
      className="mt-12" 
      autoComplete="off"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      
      <div className="flex flex-col gap-4 relative">
        <div>
          <p className={`absolute left-4 px-[5px] bg-white ${errors.username ? "text-[#C31031]" : "text-[#808080]"} text-xs`}>
            Your name
          </p>
          <input
            {...register("username", {
              required: "Username is required"
            })}
            type="text"
            className={`w-full mt-2 border ${errors.username ? "border-[#C31031]" : "border-[#808080]"} px-5 rounded-md h-[54px] text-black text-sm outline-none`}
          />
          {errors.username && (
            <p className="text-[#C31031] text-xs mt-[5px]">{errors.username.message}</p>
          )}
        </div>
        <div>
          <p className={`absolute left-4 px-[5px] bg-white ${errors.email ? "text-[#C31031]" : "text-[#808080]"} text-xs`}>
            Email
          </p>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
            type="email"
            className={`w-full mt-2 border ${errors.email ? "border-[#C31031]" : "border-[#808080]"} px-5 rounded-md h-[54px] text-black text-sm outline-none`}
          />
          {errors.email && (
            <p className="text-[#C31031] text-xs mt-[5px]">{errors.email.message}</p>
          )}
        </div>
        <div>
          <p className={`absolute left-4 px-[5px] bg-white ${errors.password ? "text-[#C31031]" : "text-[#808080]"} text-xs`}>
            Password
          </p>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: 6,
            })}
            type="password"
            className={`w-full mt-2 border ${errors.password ? "border-[#C31031]" : "border-[#808080]"} px-5 rounded-md h-[54px] text-black text-sm outline-none`}
          />
          {errors.password && (
            <p className="text-[#C31031] text-xs mt-[5px]">{errors.password.message}</p>
          )}
        </div>
        <button 
          type="submit"
          className="w-full center mt-6 h-[54px] text-white bg-[#68bb59] font-medium rounded-md"
        >
          Sign Up
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
  );
};

export default SignUp;
