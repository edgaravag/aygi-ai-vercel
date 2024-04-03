import React, { useState } from "react";
import Image from "next/image";
import AddNewPost from "../../popups/AddNewPost";
import FeedSinglePost from "./FeedSinglePost";
import PostImage1 from "@public/plants/feedPostImg1.webp";
import PostImage2 from "@public/plants/feedPostImg2.webp";
import UserImage from "@public/users/UserImageWithoutImage.webp";
import PlusIcon from "@public/icons/plusIcon.svg";

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

const FeedComponent = () => {
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
              <div key={index}>
                <FeedSinglePost post={post} />
              </div>
            );
          })}
        </div>
      </main>
      {showAddNewPost && <AddNewPost onClose={() => setShowAddNewPost(false)} />}
    </>
  );
};

export default FeedComponent;
