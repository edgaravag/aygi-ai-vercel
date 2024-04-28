import Image from "next/image";
import Link from "next/link";
import BackIcon from "@public/icons/backButton.webp";

const questions = [
  {
    question: "How we can help your plant",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer  took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    question: "How we can help your plant",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer  took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    question: "How we can help your plant",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer  took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    question: "How we can help your plant",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer  took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
];

const FaqAccountPage = () => {
  return (
    <>
      <Link href={"/faq/questions"} className="mt-6 flex items-center gap-4">
        <Image src={BackIcon} alt="Back Button" />
        Back to main
      </Link>
      <div className="w-[988px] flex flex-col gap-5 mt-10">
        {questions.map((question, index) => {
          return (
            <Link
              href={"/faq/questions/account/question"}
              key={index}
              className="flex flex-col gap-3"
            >
              <h3 className="font-semibold">{question.question}</h3>
              <p className="text-[#979797] leading-6">{question.answer}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default FaqAccountPage;
