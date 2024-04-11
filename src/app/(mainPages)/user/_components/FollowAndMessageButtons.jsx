import Image from "next/image";
import Button from "@/src/components/ui/Button";
import FriendFollow from "@public/icons/followFriendIcon.webp";
import UserMessageIcon from "@public/icons/userMessage.webp";

const FollowAndMessageButtons = () => {
  return (
    <div className="flex gap-3 mt-8">
      <Button className="py-2.5 px-3 gap-6 bg-[#68BB59] text-white rounded">
        Follow
        <Image src={FriendFollow} alt="" />
      </Button>
      <Button className="py-2.5 px-3 gap-3 bg-[#C2C2C2] text-white rounded">
        Message
        <Image src={UserMessageIcon} alt="" />
      </Button>
    </div>
  );
};

export default FollowAndMessageButtons;
