import Image from "next/image";
import SearchIcon from "@public/icons/greenSearchIcon.webp";
import SingleQuestion from "./_components/SingleQuestion";

const questions = [
  {
    question: "Account",
    description:
      "Choose a category to find information you  need about account",
  },
  {
    question: "Detection",
    description:
      "Choose a category to find information you  need about detection",
  },
  {
    question: "AI Chat",
    description: "Choose a category to find information you  need about chat",
  },
  {
    question: "Community",
    description:
      "Choose a category to find information you  need about community",
  },
  {
    question: "General",
    description:
      "Choose a category to find information you  need about general",
  },
  {
    question: "Experts",
    description:
      "Choose a category to find information you  need about experts",
  },
  {
    question: "Social Platform",
    description: "Choose a category to find information you  need about chat",
  },
  {
    question: "Lorem Ipsum",
    description:
      "Choose a category to find information you  need about community",
  },
];

const FaqPage = () => {
  return (
    <div className="px-[156px]">
      <div className="flex justify-between items-center gap-[94px] mb-8">
        <h2 className="font-semibold text-lg">
          Frequently Asked Questions Aygi AI How we can help you?
        </h2>
        <div className="relative flex-shrink-0">
          <input
            type="search"
            placeholder="Type keywords to find answers"
            className="w-[360px] border border-[#68BB59] rounded-md px-4 py-2.5 opacity-40 placeholder:text-black outline-none"
          />
          <Image
            src={SearchIcon}
            alt="Search Icon"
            className="absolute right-3 top-3.5 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {questions.map((question) => {
          return <SingleQuestion key={question.question} question={question} />;
        })}
      </div>
    </div>
  );
};

export default FaqPage;
