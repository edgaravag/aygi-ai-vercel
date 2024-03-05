import React from "react";
import FirstImage from "../../../public/appDescriptionImg1.svg";
import SecondImage from "../../../public/appDescriptionImg2.svg";
import ThirdImage from "../../../public/appDescriptionImg3.svg";
import FourthImage from "../../../public/appDescriptionImg4.svg";
import Image from "next/image";

const descriptionData = [
  {
    img: FirstImage.src,
    title: "Guidance for Growing and Caring",
    description:
      "Learn invaluable tips and techniques from world-class botany experts on nurturing and maintaining your plants, ensuring their healthy growth and development.",
  },
  {
    img: SecondImage.src,
    title: "Timely Care Reminders",
    description:
      "Ever found yourself forgetting to water your plants, only to witness them wither? Worry not, as Aygi.AI will provide timely reminders for watering and fertilizing your plants.",
  },
  {
    img: ThirdImage.src,
    title: "Diagnosing Plant Diseases",
    description:
      "When perplexed by a browning leaf on your flower, rely on Aygi.AI to transform your device into a plant doctor. Accurately identify diseases, access detailed information on their causes, and learn how to effectively treat and prevent them.",
  },
  {
    img: FourthImage.src,
    title: "Capturing the Journey of Plant",
    description:
      "Growth Document the progress of your beloved plants, including the emergence of new leaves, blossoms, and capture these precious moments with attached photos, ensuring you don't miss any significant changes.",
  },
];

const AppDescriptionSection = () => {
  return (
    <section className="w-full py-16 px-10">
      <div className="max-w-[1440px] flex justify-center mx-auto">
        <div className="flex flex-col justify-center gap-[60px]">
          <h2 className="text-[#68bb59] text-[28px] font-semibold max-[1135px]:text-center">
            All what your plant need in one app
          </h2>
          <div className="grid grid-cols-2 grid-rows-2 gap-x-[107px] gap-y-4 max-[1135px]:grid-cols-1 max-[1135px]:gap-y-20">
            {descriptionData.map((data) => {
              return (
                <div key={data.title} className="flex flex-col gap-4 max-w-[464px]">
                  <div className="flex items-center gap-4 max-[1135px]:justify-center max-[500px]:flex-col">
                    <div className="center bg-[#95cf8b] rounded-full w-[65px] h-[65px]">
                      <Image
                        src={data.img}
                        alt=""
                        width={64}
                        height={64}
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>
                    <h3 className="text-[#0f0701] font-semibold text-lg text-center">
                      {data.title}
                    </h3>
                  </div>
                  <p className="text-black text-justify leading-7 max-[1135px]:text-center">
                    {data.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDescriptionSection;
