import Image from "next/image";
import React from "react";
import GetAdviceImg from "../../../public/getAdvice.svg";

const GetAdviceSection = () => {
  return (
    <section className="w-full center bg-[#0f0701] py-16 px-10">
      <div className="flex flex-col gap-4 max-w-[1036px]">
        <div className="flex flex-wrap justify-center items-center gap-7">
          <div className="rounded-full bg-[#68bb59] w-[65px] h-[65px]">
            <Image src={GetAdviceImg} alt="" className="ml-2" />
          </div>
          <h2 className="text-white text-[28px] font-medium text-center">
            Get Expert Plant Core Advice
          </h2>
        </div>
        <div className="flex flex-col items-center gap-8">
          <p className="text-white leading-7 text-center">
            Unlock the secrets to successful plant care with guidance from our
            team of seasoned experts. Access a wealth of knowledge and receive
            personalized advice tailored to your specific plants and gardening
            goals. From troubleshooting common issues to mastering advanced
            techniques, our platform equips you with the expertise you need to
            nurture your plants and watch them flourish.
          </p>
          <button className="center text-white bg-[#68bb59] py-[14px] px-[22px] rounded-md w-[138px] h-[46px]">
            GET ADVICE
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetAdviceSection;
