import Image from "next/image";
import MobileImg from "@public/landing/mobile.webp";
import ImageComp from "@public/landing/laptop.webp";
import ShowSignUp from "./ShowSignUp";

const WelcomeSection = () => {
  return (
    <section className='center min-h-[633px] gap-0 xl:gap-10 max-[1160px]:gap-12 flex-wrap w-full h-full px-10 max-[975px]:px-3 bg-[url("../../../public/landing/welcome.webp")] bg-cover bg-center pb-[84px] pt-[208px]'>
      <div>
        <h1 className="text-[#0f0701] font-bold text-[46px] leading-[48px] max-[1160px]:text-center">
          Welcome to <br />
          <span className="text-[#68bb59] font-bold text-5xl">Aygi AI</span>
        </h1>
        <p className="text-black text-lg font-normal mt-5 leading-6 max-[1160px]:text-center">
          Enhance Your Gardening Journey, all <br /> what your plant need in one
          app.
        </p>
        <ShowSignUp />
      </div>
      <div className="center flex-wrap gap-x-9 gap-y-8 max-[1160px]:gap-x-40 max-[990px]:gap-x-36 max-[885px]:gap-x-28">
        <div className="relative flex-shrink h-[456px] max-[460px]:mr-3 max-[410px]:h-[356px]">
          <Image src={ImageComp} alt="" priority />
          <Image
            src={MobileImg}
            alt=""
            priority
            width={174}
            height={347}
            className="absolute max-w-full h-auto right-0 top-[80px] max-[410px]:w-[124px] max-[410px]:h-[247px]"
          />
        </div>
        <div className="center flex-wrap gap-12 max-[661px]:gap-20">
          <div className="flex items-center max-[1160px]:flex-row-reverse max-[1160px]:mr-7 max-[850px]:mr-0">
            <div className='center h-[212px] w-[2px] bg-[url("../../../public/landing/welcomeLine.webp")] max-[1160px]:ml-[34px] max-[918px]:hidden'>
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
            <div className="flex flex-col justify-between gap-11 ml-[34px] mt-1 max-[1160px]:ml-2">
              <p className="text-white font-medium leading-[18px] max-[850px]:text-black max-[822px]:text-center">
                Manage Your Garden and <br /> Plants with Ease
              </p>
              <p className="text-white font-medium max-[850px]:text-black max-[822px]:text-center">
                Get Expert Plant Care Advice
              </p>
              <p className="text-white font-medium max-[850px]:text-black max-[822px]:text-center">
                AI-Powered Disease Detection
              </p>
              <p className="text-white font-medium max-[850px]:text-black leading-[18px] max-[822px]:text-center">
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
