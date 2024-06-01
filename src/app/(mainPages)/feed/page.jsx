"use client";
import { useEffect, useState } from "react";
import axiosInstance from "@/src/utils/axiosInstance";
import FeedSinglePost from "./_components/FeedSinglePost";
import GardenJournalEntry from "./_components/GardenJournalEntry";
import PostImage1 from "@public/plants/feedPostImg1.webp";
import PostImage2 from "@public/plants/feedPostImg2.webp";
import UserImage from "@public/users/UserImageWithoutImage.webp";

const posts = [
  {
    userName: "User Name",
    createdDate: "Post Date",
    feedImg: PostImage1.src,
    userImage: UserImage.src,
    likes: 15,
    comments: [ 15 ],
    shareCount: 7,
  },
  {
    userName: "User Name",
    createdDate: "Post Date",
    feedImg: PostImage2.src,
    userImage: UserImage.src,
    likesCount: 15,
    commentsCount: 15,
    shareCount: 7,
  },
];

const FeedComponent = () => {
  const [posts1, setPosts] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/post/all")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="w-[571px] mx-auto flex mb-2">
          <GardenJournalEntry />
        </div>
        {posts.map((post, index) => {
          return (
            <div key={index}>
              <FeedSinglePost post={post} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FeedComponent;
