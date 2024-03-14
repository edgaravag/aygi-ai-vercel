import React from "react";
import Image from "next/image";
import UserImg from "../../../public/profileUserImg.png";
import GreenPen from "../../../public/greenPen.png";

const Profile = () => {
  return (
    <main className="h-screen mx-auto py-9">
      <div className="w-[617px]">
        <div className="flex gap-8">
          <div>
            <Image src={UserImg} alt="" />
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="flex gap-3">
              <p className="text-2xl font-semibold">User Name</p>
              <p className="text-sm font-normal px-[13px] py-1.5 bg-[#dddddd] rounded-md">
                Armenia
              </p>
            </div>
            <button className="flex gap-2 font-normal underline text-[#68BB59]">
                Edit Profile
                <Image src={GreenPen} alt="" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
