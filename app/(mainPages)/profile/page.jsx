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
import PlusIcon from "../../../public/plusIcon.svg";
import Followers from "../components/Followers";
import Button from "@/uiComponents/Button";
import Followwings from "../components/Followings";

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
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowings, setShowFollowings] = useState(false);

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
            Add New Post
            <Image src={PlusIcon} alt="" />
          </Button>
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
          ) : null}
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

export default Profile;
