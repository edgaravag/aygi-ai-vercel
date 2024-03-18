"use client";
import React, { useState } from "react";
import Image from "next/image";
import UserImg from "../../../public/profileUserImg.png";
import GreenPen from "../../../public/greenPen.png";
import ProfileSettings from "../components/ProfileSettings";
import ProfileImg1 from "../../../public/profileImg1.png";
import ProfileImg2 from "../../../public/profileImg2.png";
import ProfileImg3 from "../../../public/profileImg3.png";
import ProfileImg4 from "../../../public/profileImg4.png";
import ProfileImg5 from "../../../public/profileImg5.png";
import ProfileImg6 from "../../../public/profileImg6.png";
import FriendFollow from "../../../public/followFriendIcon.png"
import UserMessageIcon from "../../../public/userMessage.png"

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

        <div className="flex w-[224px] h-[36px] top-[271px] left-[338px] gap-3 mt-8">
          <button className="center w-[106px] h-[36px] gap-3 bg-[#68BB59] text-white rounded">
            Follow
            <Image src={FriendFollow} alt=""/>
          </button>
          
          <button className="center w-[106px] h-[36px] gap-3 bg-[#C2C2C2] text-white rounded">
            Message
            <Image  src={UserMessageIcon} alt=""/>
          </button>
        </div>
        <div className="grid grid-rows-2 grid-cols-3 gap-3 mt-8">
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
      {openSettings && <ProfileSettings setOpenSetting={setOpenSetting} />}
    </main>
  );
};

export default Profile;
