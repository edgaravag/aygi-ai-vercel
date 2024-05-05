"use client";
import Image from "next/image";
import UserImg from "@public/users/profileUserImg.webp";
import ShowEditProfile from "./ShowEditProfile";
import ShowFollowers from "./ShowFollowers";
import ShowFollowings from "./ShowFollowings";
import { useSelector } from "react-redux";

const ProfileInfo = () => {
  const userData = useSelector((state) => state?.userData?.userData);
  console.log(userData)
  
  return (
    <div className="flex gap-8">
      <div>
        <Image src={UserImg} alt="" />
      </div>
      <div className="w-full">
        <div className="flex gap-3 items-center justify-between">
          <div className="flex gap-3">
            <p className="text-2xl font-semibold">{userData?.username}</p>
            <p className="text-sm font-normal px-[13px] py-1.5 bg-[#dddddd] rounded-md  opacity-2-">
              Armenia
            </p>
          </div>
          <ShowEditProfile />
        </div>
        <p className="font-normal text-black opacity-60 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <div className="flex justify-between mt-3">
          <button className="font-normal">
            <span className="font-semibold">40</span> Diary
          </button>
          <ShowFollowers />
          <ShowFollowings />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
