import React from "react";
import PostImage1 from "../../../public/feedPostImg1.png";
import PostImage2 from "../../../public/feedPostImg2.png";
import FeedSinglePost from "../components/FeedSinglePost";
import UserImage from "../../../public/feedUserImage.png";

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
  return (
    <main className="w-full h-screen px-[130px] pt-9">
      <div className="flex flex-col gap-4">
        {posts.map((post, index) => {
          return (
            <div key={index}>
              <FeedSinglePost post={post} index={index} />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Feed;
