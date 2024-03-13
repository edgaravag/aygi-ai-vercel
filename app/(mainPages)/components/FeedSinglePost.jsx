import React from "react";
import UserImage from "../../../public/openCardUserImg.png";
import Image from "next/image";
import MoreIcon from "../../../public/moreIcon.png";
import OpenCardImg from "../../../public/openCardImg.png";
import LikeIcon from "../../../public/likeIcon.png";
import CommentIcon from "../../../public/commentIcon.png";
import ShareIcon from "../../../public/shareIcon.png";
const FeedSinglePost = ({ post, index }) => {
  return (
    <div className="border-2 border-[#f8f8f8] rounded py-4 px-2 w-[571px] mx-auto bg-white">
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
        <button>
          <Image src={MoreIcon} alt="" className="w-6 h-[6px]" />
        </button>
      </div>
      <div className="px-2 pt-8 pb-6">
        <Image src={post.feedImg} alt="" width={539} height={277}/>
      </div>
      <div className="flex justify-between px-4">
        <div className="center gap-[9px]">
          <p className="text-sm font-normal text-[#808080]">{post.likesCount}</p>
          <button>
            <Image src={LikeIcon} alt="" />
          </button>
        </div>
        <div className="flex gap-[20px]">
          <div className="flex gap-[9px]">
            <p className="text-sm font-normal text-[#808080]">{post.commentsCount}</p>
            <button>
              <Image src={CommentIcon} alt="" />
            </button>
          </div>
          <div className="flex gap-[9px]">
            <p className="text-sm font-normal text-[#808080]">{post.shareCount}</p>
            <button>
              <Image src={ShareIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default FeedSinglePost;
