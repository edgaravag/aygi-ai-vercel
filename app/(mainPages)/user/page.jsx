'use client'
import React, { useState } from "react";
import Image from "next/image";
import UserImg from "../../../public/profileUserImg.png";
import ProfileImg1 from "../../../public/profileImg1.png";
import ProfileImg2 from "../../../public/profileImg2.png";
import ProfileImg3 from "../../../public/profileImg3.png";
import ProfileImg4 from "../../../public/profileImg4.png";
import ProfileImg5 from "../../../public/profileImg5.png";
import ProfileImg6 from "../../../public/profileImg6.png";
import FriendFollow from "../../../public/followFriendIcon.png";
import UserMessageIcon from "../../../public/userMessage.png";
import Button from "@/uiComponents/Button";
import DiaryPage from "../components/DiaryPage";

const images = [
  ProfileImg1.src,
  ProfileImg2.src,
  ProfileImg3.src,
  ProfileImg4.src,
  ProfileImg5.src,
  ProfileImg6.src,
];

const Profile = () => {
  const [showDiaryPage, setShowDiaryPage] = useState(false);

  return (
    <>
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
                <button className="font-normal">
                  <span className="font-semibold">40</span> Diary
                </button>
                <button className="font-normal">
                  <span className="font-semibold">200</span> Followers
                </button>
                <button className="font-normal">
                  <span className="font-semibold">500</span> Followings
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-8">
            <Button className="py-2.5 px-3 gap-6 bg-[#68BB59] text-white rounded">
              Follow
              <Image src={FriendFollow} alt="" />
            </Button>
            <Button className="py-2.5 px-3 gap-3 bg-[#C2C2C2] text-white rounded">
              Message
              <Image src={UserMessageIcon} alt="" />
            </Button>
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
                  onClick={() => setShowDiaryPage(true)}
                />
              );
            })}
          </div>
        </div>
      </main>
      {showDiaryPage && <DiaryPage onClose={() => setShowDiaryPage(false)}/>}
    </>
  );
};

export default Profile;
