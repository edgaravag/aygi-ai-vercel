import Image from "next/image";
import UserImage from "@public/users/UserImageWithoutImage.webp";
import MoreIcon from "@public/icons/moreIcon.webp";
import LikeIcon from "@public/icons/likeIcon.webp";
import CommentIcon from "@public/icons/commentIcon.webp";
import ShareIcon from "@public/icons/shareIcon.webp";
import OpenCardLemon from "@public/plants/OpenCard.webp";

const saved = [
  {
    img: OpenCardLemon.src,
    username: "User name",
    publishedTime: "5 hours ago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    likesCount: 15,
    commentsCount: 14,
    shareCount: 7,
  },
  {
    img: "",
    username: "User name",
    publishedTime: "5 hours ago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    likesCount: 15,
    commentsCount: 14,
    shareCount: 7,
  },
  {
    img: "",
    username: "User name",
    publishedTime: "5 hours ago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    likesCount: 15,
    commentsCount: 14,
    shareCount: 7,
  },
];

const Saved = () => {
  return (
    <div className="flex flex-col gap-4 mt-8">
      {saved.map((save, index) => {
        return (
          <div
            key={index}
            className="bg-white border-2 border-[#f8f8f8] w-[571px] rounded-md py-4 px-4 shadow-lg"
          >
            <div className="flex justify-between items-center">
              <div className="flex justify-start gap-4">
                <div>
                  <Image src={UserImage} alt="" />
                </div>
                <div>
                  <p>{save.username}</p>
                  <p className="text-sm font-normal text-[#808080]">
                    {save.publishedTime}
                  </p>
                </div>
              </div>
              <button className="w-6 h-[6px]">
                <Image src={MoreIcon} alt="" />
              </button>
            </div>
            <div className="mt-[20px]">
              <p className="text-sm text-[#808080] opacity-70 font-normal">
                {save.description}
                <span className="text-sm text-[#4a4949] font-medium opacity-100">
                  ...More
                </span>
              </p>
            </div>
            {save.img && (
              <div className="py-6">
                <Image src={save.img} alt="" width={539} height={277} />
              </div>
            )}
            <div className={`flex justify-between px-4 ${!save.img && "mt-7"}`}>
              <div className="center gap-[9px]">
                <p className="text-sm font-normal text-[#808080]">
                  {save.likesCount}
                </p>
                <button>
                  <Image src={LikeIcon} alt="" />
                </button>
              </div>
              <div className="flex gap-[20px]">
                <div className="flex gap-[9px]">
                  <p className="text-sm font-normal text-[#808080]">
                    {save.commentsCount}
                  </p>
                  <button>
                    <Image src={CommentIcon} alt="" />
                  </button>
                </div>
                <div className="flex gap-[9px]">
                  <p className="text-sm font-normal text-[#808080]">
                    {save.shareCount}
                  </p>
                  <button>
                    <Image src={ShareIcon} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-7 px-[20px]">
              <div className="center gap-4 cursor-pointer">
                <div>
                  <Image src={LikeIcon} alt="" />
                </div>
                <button className="font-normal text-[#808080]">Like</button>
              </div>
              <div className="center gap-4 cursor-pointer">
                <div>
                  <Image src={CommentIcon} alt="" />
                </div>
                <button className="font-normal text-[#808080]">Comment</button>
              </div>
              <div className="center gap-4 cursor-pointer">
                <div>
                  <Image src={ShareIcon} alt="" />
                </div>
                <button className="font-normal text-[#808080]">Share</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Saved;
