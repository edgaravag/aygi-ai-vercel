import Image from "next/image";
import React from "react";
import FunctionalityImg1 from "../../../public/functionalityImg1.svg";
import FunctionalityImg2 from "../../../public/functionalityImg2.svg";
import FunctionalityImg3 from "../../../public/functionalityImg3.svg";
import FunctionalityImg4 from "../../../public/functionalityImg4.svg";

const infos = [
  {
    img: FunctionalityImg1.src,
    title: "Connect with Passionate Gardeners Worldwide",
    description:
      "Unite with a global network of dedicated gardeners who are as passionate about plants as you are. From beginners to seasoned experts, our community offers a platform to connect, learn, and grow together. Engage in discussions, share your gardening achievements, and seek advice from experienced gardeners across continents. Together, we nurture a thriving community that celebrates the beauty and joy of gardening.",
  },
  {
    img: FunctionalityImg2.src,
    title: "Manage Your Garden and Plants with Ease",
    description:
      "Take control of your gardening endeavors effortlessly. Our user-friendly platform empowers you to efficiently manage your garden and plants with just a few clicks. From organizing planting schedules and tracking watering reminders to documenting plant progress and accessing care guidelines, our intuitive tools simplify the process, allowing you to focus on what matters most – watching your garden thrive.",
  },
  {
    img: FunctionalityImg3.src,
    title: "AI -Powered Disease Detection",
    description:
      "Leverage the unmatched capabilities of artificial intelligence to detect and diagnose plant diseases with unparalleled accuracy. Our state-of-the-art algorithms analyze visual cues, leaf patterns, and other factors to swiftly identify potential health concerns. By harnessing the power of AI, we help you proactively protect your plants, ensuring their continued growth and resilience.",
  },
  {
    img: FunctionalityImg4.src,
    title: "Engage in AI-Powered Chat",
    description:
      "Chat with our intelligent AI system specifically designed to assist with all your plant-related inquiries. Get answers to your questions, seek advice, and receive personalized recommendations based on your specific plant care needs. Our AI chat feature is here to enhance your gardening experience and provide you with real-time support.",
  },
];

const AppFunctionalitySection = () => {
  return (
    <section className='w-full bg-[#68bb59] bg-[url("../../public/green_plants_background.png")] bg-right-bottom bg-auto bg-no-repeat'>
      <div className="max-w-[1440px] mx-auto py-16 px-[200px] max-[1465px]:px-[100px] max-[1250px]:px-[40px] max-[950px]:px-[20px]">
        <div className="flex flex-col gap-[60px]">
          {infos.map((info) => {
            return (
              <div
                key={info.title}
                className="flex justify-center flex-wrap gap-[18px] md:flex-nowrap"
              >
                <div className="flex-shrink-0">
                  <Image
                    src={info.img}
                    alt=""
                    width={69}
                    height={64}
                    className="mt-[10px] w-auto"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-white font-semibold text-[28px] leading-9 text-center max-w-full md:max-w-[437px] md:text-start">
                    {info.title}
                  </h2>
                  <p className="text-white text-center leading-7 md:text-justify">
                    {info.description}
                  </p>
                </div>
              </div>
            );
          })}
          <button className="center self-center text-white md:self-end bg-[#0F0701] w-[150px] h-11 p-[10px] font-medium tracking-wider rounded-md">
            Let's Start
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppFunctionalitySection;
