import React, { useState } from "react";
import Image from "next/image";
import OpenCard from "../../popups/OpenCard";
import UserImage from "@public/users/UserImageWithoutImage.png";
import MoreIcon from "@public/icons/moreIcon.png";
import LikeIcon from "@public/icons/likeIcon.png";
import CommentIcon from "@public/icons/commentIcon.png";
import ShareIcon from "@public/icons/shareIcon.png";
import ColorIcon from "@public/icons/closeIcon.png";

const FeedSinglePost = ({ post }) => {
  const [showOpenCard, setShowOpenCard] = useState(false);

  return (
    <>
      <div className="border-2 border-[#f8f8f8] rounded py-4 px-2 w-[571px] mx-auto bg-white">
        <div className="flex justify-between">
          <div className="flex justify-start gap-4">
            <div>
              <Image src={UserImage} alt="" />
            </div>
            <div>
              <p>{post.userName}</p>
              <p className="text-sm font-normal text-[#808080]">
                {post.postDate}
              </p>
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
        <div className="px-2 pt-8 pb-6">
          <Image src={post.feedImg} alt="" width={539} height={277} />
        </div>
        <div className="flex justify-between px-4">
          <div className="center gap-[9px]">
            <p className="text-sm font-normal text-[#808080]">
              {post.likesCount}
            </p>
            <button>
              <Image src={LikeIcon} alt="" />
            </button>
          </div>
          <div className="flex gap-[20px]">
            <div className="flex gap-[9px]">
              <p className="text-sm font-normal text-[#808080]">
                {post.commentsCount}
              </p>
              <button>
                <Image src={CommentIcon} alt="" />
              </button>
            </div>
            <div className="flex gap-[9px]">
              <p className="text-sm font-normal text-[#808080]">
                {post.shareCount}
              </p>
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
            <button
              className="font-normal text-[#808080]"
              onClick={() => setShowOpenCard(true)}
            >
              Comment
            </button>
          </div>
          <div className="center gap-4">
            <div>
              <Image src={ShareIcon} alt="" />
            </div>
            <button className="font-normal text-[#808080]">Share</button>
          </div>
        </div>
      </div>
      {showOpenCard && <OpenCard onClose={() => setShowOpenCard(false)} />}
    </>
  );
};

export default FeedSinglePost;
