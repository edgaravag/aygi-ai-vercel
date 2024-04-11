import Image from "next/image";
import UserImage from "@public/users/UserImageWithoutImage.webp";
import MoreIcon from "@public/icons/moreIcon.webp";
import ColorIcon from "@public/icons/closeIcon.webp";

const PostInfo = ({ post }) => {
  return (
    <div className="flex justify-between">
      <div className="flex justify-start gap-4">
        <div>
          <Image src={UserImage} alt="" />
        </div>
        <div>
          <p>{post.userName}</p>
          <p className="text-sm font-normal text-[#808080]">{post.postDate}</p>
          <p className="text-sm font-normal text-[#808080] mt-1">
            {post.postName}
          </p>
        </div>
      </div>
      <div className="flex justify-end gap-3 px-2 pb-9">
        <button>
          <Image src={MoreIcon} alt="" className="w-6 h-[6px]" />
        </button>
        <button>
          <Image src={ColorIcon} alt="" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PostInfo;
