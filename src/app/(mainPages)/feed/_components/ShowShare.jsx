import Image from "next/image";
import BlackShareIcon from "@public/icons/blackShareIcon.svg";
import ChatIcon from "@public/icons/aichat.webp";

const ShowShare = () => {
  return (
    <div className="absolute z-10 right-[-8px] top-10 bg-white border border-black rounded-md pl-4 pr-12">
      <div className="flex items-center gap-2 py-2">
        <Image src={BlackShareIcon} />
        <p className="w-[123px]">Share in profile</p>
      </div>
      <div className="flex items-center gap-2 py-2">
        <Image src={ChatIcon} />
        <p className="w-[150px]">Send by chat</p>
      </div>
    </div>
  );
};

export default ShowShare;
