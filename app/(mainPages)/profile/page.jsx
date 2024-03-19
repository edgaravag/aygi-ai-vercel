"use client";
import React, { useState } from "react";
import Image from "next/image";
import UserImg from "../../../public/profileUserImg.png";
import GreenPen from "../../../public/greenPen.png";
import EditProfile from "../components/EditProfile";
import ProfileImg1 from "../../../public/profileImg1.png";
import ProfileImg2 from "../../../public/profileImg2.png";
import ProfileImg3 from "../../../public/profileImg3.png";
import ProfileImg4 from "../../../public/profileImg4.png";
import ProfileImg5 from "../../../public/profileImg5.png";
import ProfileImg6 from "../../../public/profileImg6.png";

const images = [
  ProfileImg1.src,
  ProfileImg2.src,
  ProfileImg3.src,
  ProfileImg4.src,
  ProfileImg5.src,
  ProfileImg6.src,
];

const Profile = () => {
  const [openSettings, setOpenSetting] = useState(false);
  const [myDiaries, setMyDiaries] = useState(true);
  return (
    <main className="h-screen mx-auto py-9 px-[95px]">
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
              <p className="font-normal cursor-pointer">
                <span className="font-semibold">40</span> Diary
              </p>
              <p className="font-normal cursor-pointer">
                <span className="font-semibold">200</span> Followers
              </p>
              <p className="font-normal cursor-pointer">
                <span className="font-semibold">500</span> Followings
              </p>
            </div>
          </div>
        </div>
        <button className="center p-1 gap-2 cursor-pointer text-[#68BB59] font-normal mt-8">
          Add New Post
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
        </button>
        <div className="flex bg-white w-80 mt-[40px]">
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
      </div>
      {openSettings && <EditProfile setOpenSetting={setOpenSetting} />}
    </main>
  );
};

export default Profile;
