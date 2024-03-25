"use client";
import React, { useState } from "react";
import PostImage1 from "../../../public/feedPostImg1.png";
import PostImage2 from "../../../public/feedPostImg2.png";
import FeedSinglePost from "../components/FeedSinglePost";
import UserImage from "../../../public/feedUserImage.png";
import PlusIcon from "../../../public/plusIcon.svg";
import Image from "next/image";
import AddNewPost from "../components/AddNewPost";

const posts = [
  {
    userName: "User Name",
    postDate: "Post Date",
    postName: "Post Name",
    feedImg: PostImage1.src,
    userImage: UserImage.src,
    likesCount: 15,
    commentsCount: 15,
    shareCount: 7,
  },
  {
    userName: "User Name",
    postDate: "Post Date",
    postName: "Post Name",
    feedImg: PostImage2.src,
    userImage: UserImage.src,
    likesCount: 15,
    commentsCount: 15,
    shareCount: 7,
  },
];
const Feed = () => {
  const [showAddNewPost, setShowAddNewPost] = useState(false);

  return (
    <>
      <main className="w-full h-screen mx-auto pt-9 px-16 ">
        <div className="flex flex-col gap-4">
          <div className="w-[571px] mx-auto flex mb-2">
            <div
              className="center p-1 gap-2 cursor-pointer"
              onClick={() => setShowAddNewPost(true)}
            >
              <p className="text-[#68BB59] font-normal">Garden Journal Entry</p>
              <Image src={PlusIcon} alt="" />
            </div>
          </div>
          {posts.map((post, index) => {
            return (
              <>
                <FeedSinglePost key={index} post={post} />
              </>
            );
          })}
        </div>
      </main>
      {showAddNewPost && <AddNewPost onClose={() => setShowAddNewPost(false)} />}
    </>
  );
};

export default Feed;
