"use client";
import { useEffect, useState } from "react";
import axiosInstance from "@/src/utils/axiosInstance";
import FeedSinglePost from "./_components/FeedSinglePost";
import GardenJournalEntry from "./_components/GardenJournalEntry";

const FeedComponent = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts)

  useEffect(() => {
    axiosInstance
      .get("post/all")
      .then((response) => {
        // console.log(response.data);
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
        {posts.length === 0 ? (
          <p className="px-4 text-center py-2">
            You don't have any posts yet
          </p>
        ) : (
          posts.map((post, index) => {
            return (
              <div key={index}>
                <FeedSinglePost post={post} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default FeedComponent;
