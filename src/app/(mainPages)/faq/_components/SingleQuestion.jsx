import Link from "next/link";

const SingleQuestion = ({ question }) => {
  return (
    <Link
      href={question.link}
      className="group w-[235px] h-[200px] flex flex-col items-center py-9 px-12 border border-[#68BB59] rounded-md cursor-pointer hover:bg-[#68BB59]"
    >
      <p className="text-black text-lg font-semibold group-hover:text-white">
        {question.question}
      </p>
      <div className="bg-[#318C21] w-[60px] h-px group-hover:bg-white"></div>
      <p className="mt-3 text-sm text-center text-[#808080] group-hover:text-white">
        {question.description}
      </p>
    </Link>
  );
};

export default SingleQuestion;
