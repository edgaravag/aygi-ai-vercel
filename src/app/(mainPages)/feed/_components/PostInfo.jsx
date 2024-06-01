import Image from "next/image";
import UserImage from "@public/users/UserImageWithoutImage.webp";
import ShowMoreButton from "./ShowMoreButton";

const PostInfo = ({ post }) => {
  return (
    <div className="flex justify-between">
      <div className="flex justify-start gap-4">
        <div>
          <Image src={UserImage} alt="User Image" />
        </div>
        <div>
          <p>{post.userName}</p>
          <p className="text-sm font-normal text-[#808080]">{post.createdDate}</p>
        </div>
      </div>
      <div className="relative flex items-center h-6 gap-3 px-2">
        <ShowMoreButton />
      </div>
    </div>
  );
};

export default PostInfo;
