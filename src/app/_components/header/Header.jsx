import Image from "next/image";
import RegisterButtons from "./_components/RegisterButtons";
import LogoIcon from "@public/icons/AygiLogo.webp";

const Header = () => {
  return (
    <header className="fixed scroll-auto z-10 h-auto py-5 flex justify-around items-center flex-wrap bg-black w-full gap-x-12 gap-y-5 px-4 2xl:px-[237px] xl:px-32 lg:px-14 sm:justify-between sm:px-10 max-[412px]:pb-4 max-[412px]:pt-3">
      <div>
        <Image src={LogoIcon} alt="AygiAI Logo" priority />
      </div>
      <div className="flex gap-4">
        <RegisterButtons />
      </div>
    </header>
  );
};

export default Header;
