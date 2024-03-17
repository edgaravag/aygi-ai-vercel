import React from "react";
import ModbileImg from "../../../public/mobile.png";
import Image from "next/image";
import ImageComp from "../../../public/Rectangle.png";

const WelcomeSection = () => {
  return (
    <section className='center flex-wrap w-full h-full px-10 bg-[url("../../public/welcome.png")] bg-cover bg-center pb-[84px] pt-[168px]'>
      <div>
        <h1 className="text-[#0f0701] font-bold text-[46px] leading-[48px] max-[1259px]:text-center">
          Welcome to <br />
          <span className="text-[#68bb59] font-bold text-5xl">Aygi AI</span>
        </h1>
        <p className="text-black text-lg font-normal mt-5 leading-6 max-[1259px]:text-center">
          Enhance Your Gardening Journey, all <br /> what your plant need in one
          app.
        </p>
        <button className="center text-white bg-[#68bb59] mt-8 py-[12px] px-[24px] rounded-md max-[1259px]:mx-auto max-[1259px]:border-2 border-white">
          Let's start
        </button>
      </div>
      <div className="center flex-wrap">
        <div className="relative flex-shrink-0">
          <Image src={ImageComp} alt="" className="w-[553px] h-[456px]" />
          <Image
            src={ModbileImg}
            alt=""
            priority
            className="absolute bottom-[-25px] right-16 w-[174px] h-[347px]"
          />
        </div>
        <div className="center flex-wrap gap-12 mt-20 max-[661px]:gap-20">
          <div className="flex items-center max-[1259px]:flex-row-reverse">
            <div className='center h-[212px] w-[2px] bg-[url("../../public/welcomeLine.png")] max-[1259px]:ml-[34px] max-[932px]:hidden'>
              <div className="mt-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="237"
                  viewBox="0 0 24 237"
                  fill="none"
                >
                  <circle cx="12" cy="12" r="4" fill="white" />
                  <circle cx="12" cy="12" r="11.5" stroke="white" />
                  <circle cx="12" cy="83" r="4" fill="white" />
                  <circle cx="12" cy="83" r="11.5" stroke="white" />
                  <circle cx="12" cy="151" r="4" fill="white" />
                  <circle cx="12" cy="151" r="11.5" stroke="white" />
                  <ellipse cx="12" cy="225" rx="4" ry="4" fill="white" />
                  <circle cx="12" cy="225" r="11.5" stroke="white" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-11 ml-[34px] mt-1 max-[1259px]:ml-0 max-[661px]:mt-24">
              <p className="text-white font-medium leading-[18px] max-[1259px]:text-black max-[661px]:text-center">
                Manage Your Garden and <br /> Plants with Ease
              </p>
              <p className="text-white font-medium max-[1259px]:text-black max-[661px]:text-center">
                Get Expert Plant Care Advice
              </p>
              <p className="text-white font-medium max-[1259px]:text-black max-[661px]:text-center">
                AI-Powered Disease Detection
              </p>
              <p className="text-white font-medium leading-[18px] max-[1259px]:text-black max-[661px]:text-center">
                Connect with Passionate <br /> Gardeners Worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
