import Image from "next/image";
import UserImage from "@public/users/UserImageWithoutImage.webp";
import ColorIcon from "@public/icons/closeIcon.webp";
import ShowMoreButton from "./ShowMoreButton";

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
      <div className="relative flex items-center h-6 gap-3 px-2">
        <ShowMoreButton />
        <button>
          <Image src={ColorIcon} alt="" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PostInfo;
