import React from "react";
import TomatoImg from "@public/landing/tomato.webp";
import CornImg from "@public/landing/corn.webp";
import RaspberriesImg from "@public/landing/raspberries.webp";
import Image from "next/image";
import Button from "@/app/components/ui/Button";

const plants = [
  {
    img: TomatoImg.src,
    title: "Tomato plant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    freeDetect: true,
  },
  {
    img: CornImg.src,
    title: "Corn plant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    freeDetect: true,
  },
  {
    img: RaspberriesImg.src,
    title: "Raspberries plant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    freeDetect: false,
  },
];

const PlantExploringSection = () => {
  return (
    <section className="w-full py-16 px-8">
      <div className="flex justify-center max-w-[1440px] mx-auto">
        <div className="inline-flex flex-col gap-7 w-[1040px]">
          <h2 className="text-[#68bb59] font-semibold text-[32px] max-[1115px]:text-center">
            Explore the plant
          </h2>
          <div className="flex flex-wrap justify-around gap-x-4 gap-y-7">
            {plants.map((plant) => {
              return (
                <div
                  key={plant.title}
                  className="p-4 max-[355px]:px-[6px] border-2 border-[#68bb59] rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200 active:scale-95"
                >
                  <div className="relative">
                    <Image src={plant.img} alt="" width={300} height={216} />
                    {plant.freeDetect && (
                      <div className="absolute bg-[#68bb59] py-[5px] px-4 right-0 top-6 rounded-md font-medium text-sm">
                        Free detect
                      </div>
                    )}
                  </div>
                  <p className="text-[#0f0701] font-semibold mt-3">
                    {plant.title}
                  </p>
                  <p className="text-[#808080] text-sm text-justify w-[300px] mt-6">
                    {plant.description}
                  </p>
                  <Button className="gap-2 font-semibold text-[#68bb59] mt-10">
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="22"
                      viewBox="0 0 20 22"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1305_749)">
                        <path
                          d="M19.7709 10.3917L19.7702 10.3909L15.688 5.92212C15.3821 5.58735 14.8875 5.5886 14.5831 5.92504C14.2787 6.26145 14.2799 6.80556 14.5857 7.14037L17.3265 10.1406H0.78125C0.349766 10.1406 0 10.5254 0 11C0 11.4746 0.349766 11.8594 0.78125 11.8594H17.3264L14.5857 14.8596C14.2799 15.1944 14.2788 15.7385 14.5831 16.075C14.8875 16.4114 15.3822 16.4126 15.688 16.0779L19.7702 11.6091L19.7709 11.6083C20.0769 11.2724 20.0759 10.7265 19.7709 10.3917Z"
                          fill="#68BB59"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1305_749">
                          <rect width="20" height="22" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantExploringSection;
