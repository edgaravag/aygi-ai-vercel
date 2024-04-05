import Image from "next/image";
import React from "react";
import facebookIcon from "@public/socialMediaIcons/facebookIcon.svg";
import xIcon from "@public/socialMediaIcons/xIcon.svg";
import pinterestIcon from "@public/socialMediaIcons/pinterestIcon.svg";
import youtubeIcon from "@public/socialMediaIcons/youtubeIcon.svg";
import instagramIcon from "@public/socialMediaIcons/instagramIcon.svg";
import facebookIconHover from "@public/socialMediaIcons/facebookIcon-hover.svg";
import xIconHover from "@public/socialMediaIcons/xIconHover.svg";
import pinterestIconHover from "@public/socialMediaIcons/pinterestIcon-hover.svg";
import youtubeIconHover from "@public/socialMediaIcons/youtubeIcon-hover.svg";
import instagramIconHover from "@public/socialMediaIcons/instagramIcon-hover.svg";
import Button from "@/src/components/ui/Button";
const Footer = () => {
  return (
    <footer className="w-full bg-[#0F0701]">
      <div className="center justify-around gap-20 flex-wrap max-w-[1440px] mx-auto py-36 px-[200px] max-[1460px]:px-[100px] max-[1190px]:px-[50px]">
        <div>
          <h2 className="text-white text-[26px] font-medium mb-2 max-[1090px]:text-center">
            AYGI AI
          </h2>
          <p className="text-white leading-[22px] max-w-[310px] mb-[37px] max-[1090px]:text-center">
            The best free plant identifier app for plant lovers and experts
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <Button className="text-white p-[10px] border font-medium gap-2 tracking-wider">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M20.1663 10.5606L16.9147 8.68262L13.5859 12.0114L16.9145 15.34L20.1773 13.4557C20.6861 13.1466 20.9897 12.6066 20.9897 12.0114C20.9897 11.4162 20.6859 10.8762 20.1663 10.5606Z"
                  fill="#FFCE00"
                />
                <path
                  d="M13.5856 12.0111L4.5186 2.87891C4.35792 3.03809 4.23039 3.22754 4.14339 3.43632C4.05638 3.6451 4.01163 3.86905 4.01172 4.09523V19.8992C4.01172 20.3723 4.20324 20.8002 4.5186 21.1158L13.5856 12.0111Z"
                  fill="url(#paint0_linear_1312_118)"
                />
                <path
                  d="M13.5865 12.0112L16.9153 8.68244L16.9206 8.67716L12.4604 6.10916L6.58089 2.65364C6.05145 2.327 5.40945 2.31572 4.86873 2.6198C4.74489 2.69852 4.63209 2.77748 4.51953 2.87876L13.5865 12.0112Z"
                  fill="#00F076"
                />
                <path
                  d="M4.51953 21.1156C4.63209 21.2169 4.74489 21.2959 4.86873 21.3746C5.13897 21.521 5.42073 21.6 5.70225 21.6C6.00633 21.6 6.29913 21.51 6.56961 21.3523L12.4602 17.9133L16.9203 15.3453L16.9151 15.34L13.5865 12.0112L4.51953 21.1156Z"
                  fill="#F63448"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1312_118"
                    x1="-0.0404412"
                    y1="16.5565"
                    x2="9.07788"
                    y2="7.43795"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00E2FF" />
                    <stop offset="1" stopColor="#00C5FF" />
                  </linearGradient>
                </defs>
              </svg>
              Google Play
            </Button>
            <Button className="text-white p-[10px] border font-medium gap-2 tracking-wider">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
              >
                <g clipPath="url(#clip0_1122_1393)">
                  <path
                    d="M17.5041 0.000976562H4.73428C2.34261 0.000976562 0.40625 1.71788 0.40625 3.83849V15.1635C0.40625 17.2817 2.34261 18.9986 4.73428 18.9986H17.5068C19.8958 18.9986 21.8348 17.2817 21.8348 15.1611V3.83849C21.8321 1.71788 19.8958 0.000976562 17.5041 0.000976562Z"
                    fill="url(#paint0_linear_1122_1393)"
                  />
                  <path
                    d="M11.0286 4.36557L11.4625 3.70065C11.7303 3.28506 12.3275 3.14497 12.7962 3.38243C13.2649 3.6199 13.4229 4.14945 13.1551 4.56504L8.97436 10.9815H11.9981C12.9783 10.9815 13.5273 12.0026 13.1015 12.7103H4.23659C3.69561 12.7103 3.26172 12.3256 3.26172 11.8459C3.26172 11.3662 3.69561 10.9815 4.23659 10.9815H6.72201L9.90378 6.09197L8.91016 4.56266C8.64234 4.14707 8.80034 3.62227 9.26904 3.38006C9.73775 3.1426 10.3296 3.28268 10.6028 3.69827L11.0286 4.36557ZM7.26836 13.6008L6.33098 15.0422C6.06317 15.4578 5.46593 15.5979 4.99722 15.3604C4.52852 15.123 4.37052 14.5934 4.63834 14.1778L5.33468 13.1092C6.12206 12.8932 6.76215 13.0594 7.26836 13.6008Z"
                    fill="white"
                  />
                  <path
                    d="M15.3407 10.9861H17.877C18.418 10.9861 18.8519 11.3708 18.8519 11.8505C18.8519 12.3302 18.418 12.7149 17.877 12.7149H16.4682L17.419 14.1777C17.6868 14.5933 17.5288 15.1181 17.0601 15.3603C16.5914 15.5978 15.9995 15.4577 15.7263 15.0421C14.1248 12.5795 12.9222 10.7368 12.1241 9.50906C11.3072 8.25996 11.8911 7.00611 12.4669 6.58105C13.1071 7.55469 14.0632 9.02463 15.3407 10.9861Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_1122_1393"
                    x1="11.1205"
                    y1="0.000976562"
                    x2="11.1205"
                    y2="18.9986"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00BFFC" />
                    <stop offset="1" stopColor="#0073F6" />
                  </linearGradient>
                  <clipPath id="clip0_1122_1393">
                    <path
                      d="M0.40625 4C0.40625 1.79086 2.19711 0 4.40625 0H17.8348C20.044 0 21.8348 1.79086 21.8348 4V15C21.8348 17.2091 20.044 19 17.8348 19H4.40625C2.19711 19 0.40625 17.2091 0.40625 15V4Z"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
              App Store
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-end pt-8 gap-[43px] max-[1090px]:items-center">
          <div className="flex justify-center flex-wrap items-center gap-6">
            <div className="relative w-[55px] h-[55px] center">
              <Image
                src={facebookIcon}
                alt=""
                className="absolute hover:opacity-1"
              />
              <Image
                src={facebookIconHover}
                alt=""
                className="opacity-0 hover:opacity-100 z-10"
              />
            </div>
            <div className="relative w-[55px] h-[55px] center">
              <Image
                src={xIcon}
                alt=""
                className="absolute hover:opacity-1"
              />
              <Image
                src={xIconHover}
                alt=""
                className="opacity-0 hover:opacity-100 z-10"
              />
            </div>
            <div className="relative w-[55px] h-[55px] center">
              <Image
                src={pinterestIcon}
                alt=""
                className="absolute hover:opacity-1"
              />
              <Image
                src={pinterestIconHover}
                alt=""
                className="opacity-0 hover:opacity-100 z-10"
              />
            </div>
            <div className="relative w-[55px] h-[55px] center">
              <Image
                src={youtubeIcon}
                alt=""
                className="absolute hover:opacity-1"
              />
              <Image
                src={youtubeIconHover}
                alt=""
                className="opacity-0 hover:opacity-100 z-10"
              />
            </div>
            <div className="relative w-[55px] h-[55px] center">
              <Image
                src={instagramIcon}
                alt=""
                className="absolute hover:opacity-1"
              />
              <Image
                src={instagramIconHover}
                alt=""
                className="opacity-0 hover:opacity-100 z-10"
              />
            </div>
          </div>
          <div className="flex justify-center flex-wrap gap-6 py-2">
            <button className="text-white p-2 bg-transparent hover:text-[#318C21]">
              Privacy and policy
            </button>
            <div className="w-[1px] h-[39px] bg-[#68bb59]"></div>
            <button className="text-white p-2 bg-transparent hover:text-[#318C21]">
              Terms of Use
            </button>
            <div className="w-[1px] h-[39px] bg-[#68bb59]"></div>
            <button className="text-white p-2 bg-transparent hover:text-[#318C21]">
              FAQ
            </button>
            <div className="w-[1px] h-[39px] bg-[#68bb59]"></div>
            <button className="text-white p-2 bg-transparent hover:text-[#318C21]">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
