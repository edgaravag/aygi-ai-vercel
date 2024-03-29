import React, { useState } from "react";
import Image from "next/image";
import EditProfile from "../../popups/EditProfile";
import Followers from "../../popups/Followers";
import Followwings from "../../popups/Followings";
import Button from "@/app/components/ui/Button";
import UserImg from "@public/users/profileUserImg.png";
import UserImage from "@public/users/UserImageWithoutImage.png";
import GreenPen from "@public/icons/greenPen.png";
import MoreIcon from "@public/icons/moreIcon.png";
import LikeIcon from "@public/icons/likeIcon.png";
import CommentIcon from "@public/icons/commentIcon.png";
import ShareIcon from "@public/icons/shareIcon.png";
import ProfileImg1 from "@public/plants/profileImg1.png";
import ProfileImg2 from "@public/plants/profileImg2.png";
import ProfileImg3 from "@public/plants/profileImg3.png";
import ProfileImg4 from "@public/plants/profileImg4.png";
import ProfileImg5 from "@public/plants/profileImg5.png";
import ProfileImg6 from "@public/plants/profileImg6.png";
import PlusIcon from "@public/icons/plusIcon.svg";
import OpenCardLemon from "@public/plants/OpenCard.png";

const images = [
  ProfileImg1.src,
  ProfileImg2.src,
  ProfileImg3.src,
  ProfileImg4.src,
  ProfileImg5.src,
  ProfileImg6.src,
];

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

const ProfileComponent = () => {
  const [openSettings, setOpenSetting] = useState(false);
  const [myDiaries, setMyDiaries] = useState(true);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowings, setShowFollowings] = useState(false);

  return (
    <>
      <main className="mx-auto py-9 px-[95px]">
        <div className="w-[617px]">
          <div className="flex gap-8">
            <div>
              <Image src={UserImg} alt="" />
            </div>
            <div className="w-full">
              <div className="flex gap-3 items-center justify-between">
                <div className="flex gap-3">
                  <p className="text-2xl font-semibold">User Name</p>
                  <p className="text-sm font-normal px-[13px] py-1.5 bg-[#dddddd] rounded-md  opacity-2-">
                    Armenia
                  </p>
                </div>
                <button
                  className="flex gap-2 font-normal underline text-[#68BB59]"
                  onClick={() => setOpenSetting(true)}
                >
                  Edit Profile
                  <Image src={GreenPen} alt="" />
                </button>
              </div>
              <p className="font-normal text-black opacity-60 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <div className="flex justify-between mt-3">
                <button className="font-normal">
                  <span className="font-semibold">40</span> Diary
                </button>
                <button
                  className="font-normal"
                  onClick={() => setShowFollowers(true)}
                >
                  <span className="font-semibold">200</span> Followers
                </button>
                <button
                  className="font-normal"
                  onClick={() => setShowFollowings(true)}
                >
                  <span className="font-semibold">500</span> Followings
                </button>
              </div>
            </div>
          </div>
          <Button className="p-1 gap-2 text-[#68BB59] font-normal mt-8">
            Garden Journal Entry
            <Image src={PlusIcon} alt="" />
          </Button>
          <div className="flex bg-white w-80 mt-[40px] shadow-lg rounded-md">
            <button
              className={`center w-40 px-8 py-4 font-medium tracking-widest text-sm ${
                myDiaries
                  ? "text-[#68BB59] border-b-2 border-b-[#68BB59] "
                  : "text-[#808080]"
              }`}
              onClick={() => setMyDiaries(!myDiaries)}
            >
              MY DIARIES
            </button>
            <button
              className={`center w-40 px-9 py-4 font-medium tracking-widest text-sm ${
                !myDiaries
                  ? "text-[#68BB59] border-b-2 border-b-[#68BB59] "
                  : "text-[#808080]"
              }`}
              onClick={() => setMyDiaries(!myDiaries)}
            >
              SAVED
            </button>
          </div>
          {myDiaries ? (
            <div className="grid grid-rows-2 grid-cols-3 gap-3 mt-3">
              {images.map((image, index) => {
                return (
                  <Image
                    key={index}
                    src={image}
                    alt=""
                    width={206}
                    height={242}
                    className="cursor-pointer"
                  />
                );
              })}
            </div>
          ) : (
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
                    {
                      save.img && (
                        <div className="py-6">
                          <Image src={save.img} alt="" width={539} height={277} />
                        </div>
                      )
                    }
                    <div className={`flex justify-between px-4 ${!save.img && "mt-7"}`}>
                      <div className="center gap-[9px]">
                        <p className="text-sm font-normal text-[#808080]">{save.likesCount}</p>
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
                        <button className="font-normal text-[#808080]">
                          Like
                        </button>
                      </div>
                      <div className="center gap-4 cursor-pointer">
                        <div>
                          <Image src={CommentIcon} alt="" />
                        </div>
                        <button className="font-normal text-[#808080]">
                          Comment
                        </button>
                      </div>
                      <div className="center gap-4 cursor-pointer">
                        <div>
                          <Image src={ShareIcon} alt="" />
                        </div>
                        <button className="font-normal text-[#808080]">
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
      {openSettings && <EditProfile setOpenSetting={setOpenSetting} />}
      {showFollowers && <Followers onClose={() => setShowFollowers(false)} />}
      {showFollowings && (
        <Followwings onClose={() => setShowFollowings(false)} />
      )}
    </>
  );
};

export default ProfileComponent;
