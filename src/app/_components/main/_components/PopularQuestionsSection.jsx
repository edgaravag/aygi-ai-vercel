"use client";
import { useState } from "react";

const questions = [
  {
    question: "Snap any plant, mushroom or cactae",
    answer:
      "first answer ooooooooo ooooooooo oooooooo ooooooooooooo ooooooooo oooooooooo ooooooooooo oooooo oooooo oooooooo ooooooo ooooooo",
  },
  {
    question: "See info about this plant",
    answer: "second answer oooooooooooo oooooooooooooo ooooooooooooooooooo",
  },
  {
    question: "See info about this plant",
    answer: "third answer oooooooooooo oooooooooooooo ooooooooooooooooooo",
  },
  {
    question: "Snap any plant, mushroom or cactae",
    answer:
      "Snap any plant, mushroom or cactae,Snap any plant, mushroom or cactae mushroom or cactae,Snap any plant, mushroom or cactae",
  },
];

const PopularQuestionsSection = () => {
  const [acrdState, setActiveAccordion] = useState(-1);
  function toogleAccordion(index) {
    if (index === acrdState) {
      setActiveAccordion(-1);
      return;
    }
    setActiveAccordion(index);
  }
  return (
    <section className="w-full">
      <div className="max-w-[1440px] mx-auto py-16 px-[50px] xl:px-[200px] lg:px-[100px]">
        <h2 className="text-[#68bb59] text-[32px] font-semibold p-2">
          Popular questions
        </h2>
        <div className="flex flex-col gap-3">
          {questions.map((question, index) => {
            return (
              <div
                key={index}
                onClick={() => toogleAccordion(index)}
                className="border-b-2 border-b-[#68bb59] last:border-none cursor-pointer"
              >
                <div className="flex justify-between py-2 pb-3">
                  <h3 className="p-2 font-normal text-[20px] text-black">
                    {question.question}
                  </h3>
                  <svg
                    className={
                      acrdState === index
                        ? "transition ease-in-out duration-[350ms]"
                        : "rotate-180 transition ease-in-out duration-500"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 12L9 21L11.115 23.115L18 16.245L24.885 23.115L27 21L18 12Z"
                      fill="#68BB59"
                    />
                  </svg>
                </div>
                <div className="pb-3 px-8 last:pb-0">
                  <p
                    className={
                      acrdState === index
                        ? "text-[#808080] text-[18px] font-normal leading-7 mb-4"
                        : "hidden"
                    }
                  >
                    {question.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularQuestionsSection;
