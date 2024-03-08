import Image from "next/image";
import React from "react";
import MoreIcon from "../../../public/moreIcon.png";
import DiaryImage from "../../../public/diaryPageImage.png";
import DiaryPostImage from "../../../public/diaryPost.png";

const posts = [
  {
    img: DiaryPostImage.src,
    postDate: "3 days ago",
    title: "My Favorite plants",
    comment:
      "Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsm",
  },
  {
    img: DiaryPostImage.src,
    postDate: "3 days ago",
    title: "My Favorite plants",
    comment:
      "Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsm",
  },
  {
    img: DiaryPostImage.src,
    postDate: "3 days ago",
    title: "My Favorite plants",
    comment:
      "Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsm",
  },
];

const DiaryPage = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <div
      className="center z-50 bg-black bg-opacity-60 fixed top-0 left-0 right-0 bottom-0"
      onClick={handleClose}
    >
      <div className="w-[816px] h-[909px] px-16 py-8 bg-white rounded-md overflow-y-scroll">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold tracking-widest">
            Information about Pepper Plant
          </h2>
          <div className="cursor-pointer">
            <Image src={MoreIcon} alt="" width={24} height={6} />
          </div>
        </div>
        <div>
          <p className="text-[#808080] leading-[22px] text-justify mt-4">
            Unite with a global network of dedicated gardeners who are as
            passionate about plants as you are. From beginners to seasoned
            experts, our community offers a platform to connect, learn, and grow
            together. Engage in discussions, share your gardening achievements,
            and seek advice from experienced gardeners across continents.
            Together, we nurture a thriving community that celebrates the beauty
            and joy of gardening.
          </p>
        </div>
        <div className="mt-4">
          <Image src={DiaryImage} alt="" />
        </div>
        <div className="flex justify-start items-center p-1 gap-2 mt-6 cursor-pointer">
          <p className="text-[#68BB59] font-normal">Add New Diary</p>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle id="Ellipse 44" cx="20" cy="20" r="19.5" stroke="#68BB59" />
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
        <div className="flex flex-col gap-6">
          {posts.map((post) => {
            return (
              <div key={Math.random()}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center justify-start gap-4">
                    <div>
                      <Image src={post.img} alt="" width={40} height={40} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm text-[#979797] font-normal">
                        {post.postDate}
                      </p>
                      <p className="text-sm font-normal">{post.title}</p>
                    </div>
                  </div>
                  <div>
                    <Image src={MoreIcon} alt="" className="cursor-pointer" />
                  </div>
                </div>
                <div className="bg-[#F6F6F6] py-[10px] px-2 mt-2">
                  <p className="text-sm font-normal">{post.comment}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DiaryPage;
