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
    <main className="w-full h-screen mx-auto pt-9">
      <div className="flex flex-col gap-4">
        {posts.map((post, index) => {
          return (
            <>
              {index === 0 && (
                  <div className="flex mx-auto mb-6">
                    <div
                      className="center p-1 gap-2 cursor-pointer"
                      // onClick={() => setShowAddDiary(!showAddDiary)}
                    >
                      <p className="text-[#68BB59] font-normal">
                        Add New Post
                      </p>
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          id="Ellipse 44"
                          cx="20"
                          cy="20"
                          r="19.5"
                          stroke="#68BB59"
                        />
                        <foreignObject x="10" y="10" width="20" height="20">
                          <div xmlns="http://www.w3.org/1999/xhtml">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="content/add_24px">
                                <path
                                  id=" &#226;&#134;&#179;Color"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M15.8827 10.7518H11.1769V15.2616H9.60823V10.7518H4.90234V9.24857H9.60823V4.73877H11.1769V9.24857H15.8827V10.7518Z"
                                  fill="#68BB59"
                                />
                              </g>
                            </svg>
                          </div>
                        </foreignObject>
                      </svg>
                    </div>
                  </div>
                )}
              <FeedSinglePost key={index} post={post} index={index} />
            </>
          );
        })}
      </div>
    </main>
  );
};

export default Feed;
