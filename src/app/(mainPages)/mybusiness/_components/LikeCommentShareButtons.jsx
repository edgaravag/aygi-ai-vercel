import Image from "next/image";
import LikeIcon from "@public/icons/likeIcon.webp";
import CommentIcon from "@public/icons/commentIcon.webp";
import ShareIcon from "@public/icons/shareIcon.webp";

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
        <button className="font-normal text-[#808080]">Comment</button>
      </div>
      <div className="center gap-4">
        <div>
          <Image src={ShareIcon} alt="" />
        </div>
        <button className="font-normal text-[#808080]">Share</button>
      </div>
    </div>
  );
};

export default LikeCommentShareButtons;
