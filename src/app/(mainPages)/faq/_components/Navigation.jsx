import Image from "next/image";
import SearchIcon from "@public/icons/greenSearchIcon.webp";

const Navigation = () => {
  return (
    <nav className="w-full flex justify-between items-center py-4 gap-[94px] mb-8 flex-shrink-0">
      <h2 className="font-semibold text-lg">All questions about account</h2>
      <div className="relative flex-shrink-0">
        <input
          type="search"
          placeholder="Type keywords to find answers"
          className="bg-white w-[360px] border border-[#68BB59] rounded-md px-4 py-2.5 opacity-40 placeholder:text-black outline-none"
        />
        <Image
          src={SearchIcon}
          alt="Search Icon"
          className="absolute right-3 top-3.5 cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navigation;
