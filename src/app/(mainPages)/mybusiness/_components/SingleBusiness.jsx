import Image from "next/image";
import PostInfo from "./PostInfo";
import LikesCommentsSharedCount from "./LikesCommentsSharedCount";
import LikeCommentShareButtons from "./LikeCommentShareButtons";

const SingleBusiness = ({ business }) => {
  return (
    <>
      <div className="border-2 border-[#f8f8f8] rounded py-4 px-2 w-[571px] mx-auto bg-white">
        <PostInfo business={business} />
        <div className="px-2 pt-8 pb-6">
          <Image
            src={business.businessImg}
            alt=""
            loading="eager"
            width={539}
            height={277}
          />
        </div>
        <LikesCommentsSharedCount business={business} />
        <LikeCommentShareButtons />
      </div>
    </>
  );
};

export default SingleBusiness;
