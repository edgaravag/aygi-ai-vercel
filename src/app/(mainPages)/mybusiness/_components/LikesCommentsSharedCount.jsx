import Image from "next/image";
import LikeIcon from "@public/icons/likeIcon.webp";
import CommentIcon from "@public/icons/commentIcon.webp";
import ShareIcon from "@public/icons/shareIcon.webp";

const LikesCommentsSharedCount = ({ business }) => {
  return (
    <div className="flex justify-between px-4">
      <div className="center gap-[9px]">
        <p className="text-sm font-normal text-[#808080]">
          {business.likesCount}
        </p>
        <button>
          <Image src={LikeIcon} alt="" />
        </button>
      </div>
      <div className="flex gap-[20px]">
        <div className="flex gap-[9px]">
          <p className="text-sm font-normal text-[#808080]">
            {business.commentsCount}
          </p>
          <button>
            <Image src={CommentIcon} alt="" />
          </button>
        </div>
        <div className="flex gap-[9px]">
          <p className="text-sm font-normal text-[#808080]">
            {business.shareCount}
          </p>
          <button>
            <Image src={ShareIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LikesCommentsSharedCount;
