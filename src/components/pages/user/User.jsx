import React, { useState } from "react";
import Image from "next/image";
import DiaryPage from "../../popups/DiaryPage";
import Followers from "../../popups/Followers";
import Followwings from "../../popups/Followings";
import Button from "@/app/components/ui/Button";
import UserImg from "@public/users/profileUserImg.webp";
import ProfileImg1 from "@public/plants/profileImg1.webp";
import ProfileImg2 from "@public/plants/profileImg2.webp";
import ProfileImg3 from "@public/plants/profileImg3.webp";
import ProfileImg4 from "@public/plants/profileImg4.webp";
import ProfileImg5 from "@public/plants/profileImg5.webp";
import ProfileImg6 from "@public/plants/profileImg6.webp";
import FriendFollow from "@public/icons/followFriendIcon.webp";
import UserMessageIcon from "@public/icons/userMessage.webp";

const images = [
  ProfileImg1.src,
  ProfileImg2.src,
  ProfileImg3.src,
  ProfileImg4.src,
  ProfileImg5.src,
  ProfileImg6.src,
];

const UserProfileComponent = () => {
  const [showDiaryPage, setShowDiaryPage] = useState(false);
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
                  priority
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
      {showDiaryPage && <DiaryPage onClose={() => setShowDiaryPage(false)} />}
      {showFollowers && <Followers onClose={() => setShowFollowers(false)} />}
      {showFollowings && <Followwings onClose={() => setShowFollowings(false)} />}
    </>
  );
};

export default UserProfileComponent;
