import Image from "next/image";
import LikeIcon from "@public/icons/likeIcon.webp";
import CommentIcon from "@public/icons/commentIcon.webp";
import ShowOpenCard from "./ShowOpenCard";
import ShowShareButton from "./ShowShareButton";

const LikeCommentShareButtons = () => {
  return (
    <div className="flex justify-between mt-7 px-[20px]">
      <div className="center gap-4">
        <div>
          <Image src={LikeIcon} alt="" />
        </div>
        <button className="font-normal text-[#808080]">Like</button>
      </div>
      <div className="center gap-4">
        <div>
          <Image src={CommentIcon} alt="" />
        </div>
        <ShowOpenCard />
      </div>
      <ShowShareButton />
    </div>
  );
};

export default LikeCommentShareButtons;
