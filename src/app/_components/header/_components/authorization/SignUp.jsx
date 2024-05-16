import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Image from "next/image";
import SignIn from "./SignIn";
import Button from "@/src/components/ui/Button";
import FacebookIcon from "@public/socialMediaIcons/colorfullFacebookIcon.svg";
import GoogleIcon from "@public/socialMediaIcons/googleIcon.svg";
import PopUpWrap from "@/src/components/ui/PopUpWrap";

const SignUp = ({ onClose }) => {
  const [showForm, setShowForm] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleSignUp = (data) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_AUTH_URL}/signup`, data)
      .then((data) => console.log(data))
      .catch((error) => {
        console.error(error);
        setError("root", {
          message: "This user already exists",
        });
        throw new Error("Registration failed");
      });
    // console.log(data)
  };

  const onSubmitHandler = async (data) => {
    try {
      await handleSignUp(data);
    } catch (error) {
      console.error(error);
      throw new Error("Registration failed");
    }
  };

  return (
    <>
      {!showForm && (
        <PopUpWrap onClose={onClose} className="max-w-[448px] py-11 px-16">
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
            <form
              className="mt-8"
              autoComplete="off"
              onSubmit={handleSubmit(onSubmitHandler)}
            >
              <div className="flex flex-col gap-4 relative">
                <div>
                  <p
                    className={`absolute left-4 px-[5px] bg-white ${
                      errors.username || errors.root
                        ? "text-[#C31031]"
                        : "text-[#808080]"
                    } text-xs`}
                  >
                    Your name
                  </p>
                  <input
                    {...register("username", {
                      required: "Username is required",
                      pattern: /^[a-zA-Z0-9_]{3,16}$/,
                      minLength: {
                        value: 3,
                        message: "Username must have at least 3 characters",
                      },
                    })}
                    type="text"
                    className={`w-full mt-2 border ${
                      errors.username || errors.root
                        ? "border-[#C31031]"
                        : "border-[#808080]"
                    } px-5 rounded-md h-[54px] text-black text-sm outline-none`}
                  />
                  {errors.username && (
                    <p className="text-[#C31031] text-xs mt-[5px]">
                      {errors.username.message}
                    </p>
                  )}
                </div>
                <div>
                  <p
                    className={`absolute left-4 px-[5px] bg-white ${
                      errors.email || errors.root
                        ? "text-[#C31031]"
                        : "text-[#808080]"
                    } text-xs`}
                  >
                    Email
                  </p>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    })}
                    type="email"
                    className={`w-full mt-2 border ${
                      errors.email || errors.root
                        ? "border-[#C31031]"
                        : "border-[#808080]"
                    } px-5 rounded-md h-[54px] text-black text-sm outline-none`}
                  />
                  {errors.email && (
                    <p className="text-[#C31031] text-xs mt-[5px]">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <p
                    className={`absolute left-4 px-[5px] bg-white ${
                      errors.password || errors.root
                        ? "text-[#C31031]"
                        : "text-[#808080]"
                    } text-xs`}
                  >
                    Password
                  </p>
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must have at least 8 characters",
                      },
                    })}
                    type="password"
                    className={`w-full mt-2 border ${
                      errors.password || errors.root
                        ? "border-[#C31031]"
                        : "border-[#808080]"
                    } px-5 rounded-md h-[54px] text-black text-sm outline-none`}
                  />
                  {errors.password && (
                    <p className="text-[#C31031] text-xs mt-[5px]">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full mt-6 h-[54px] text-white bg-[#68bb59] font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Loading..." : "Sign Up"}
                </Button>
              </div>
              <div className="flex items-center justify-between mt-5">
                <div className="border border-[#bfbfbf] w-[43%] h-[1.5px]"></div>
                <p className="text-[#bfbfbf] text-sm">Or</p>
                <div className="border border-[#bfbfbf] w-[43%] h-[1.5px]"></div>
              </div>
              <div className="flex flex-col gap-5 mt-5">
                <Button className="py-[14px] gap-4 border border-[#808080] text-[#808080]">
                  <Image src={FacebookIcon} alt="" />
                  Sign in with Facebook
                </Button>
                <Button className="py-[14px] gap-4 border border-[#808080] text-[#808080]">
                  <Image src={GoogleIcon} alt="" />
                  Sign in with Google
                </Button>
              </div>
            </form>
          </div>
        </PopUpWrap>
      )}
      {showForm && <SignIn onClose={onClose} />}
    </>
  );
};

export default SignUp;
