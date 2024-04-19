import Image from "next/image";
import UserIcon from "@public/users/friendIcon.webp";
import BloomIcon from "@public/icons/bloomIcon.svg";
import ShareIcon from "@public/icons/shareIcon.webp";

const Comment = () => {
  return (
    <>
      <div className="flex gap-2">
        <Image src={UserIcon} alt="User Icon" width={62} height={62} />
        <div className="w-full px-6 py-2.5 rounded-[32px] bg-[#EBEBEB]">
          <p className="font-semibold text-[#68BB59]">John Doe</p>
          <p>I love this fertilizier!!! Super!!!</p>
        </div>
      </div>
      <div className="flex justify-between mt-4 border-b border-b-[#D9D9D9] pb-2">
        <div className="flex items-center gap-1">
          <Image src={BloomIcon} alt="Bloom Icon" width={24} height={18} />
          <p className="text-sm text-[#68BB59]">Bloom</p>
        </div>
        <div className="flex items-center gap-1">
          <Image src={ShareIcon} alt="Reply Icon" width={20} height={18} />
          <p className="text-sm text-[#808080]">Reply</p>
        </div>
        <p className="text-sm text-[#808080]">10 minutes ago</p>
      </div>
    </>
  );
};

export default Comment;
