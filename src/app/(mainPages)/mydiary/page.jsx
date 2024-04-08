"use client";
import Image from "next/image";
import React, { useState } from "react";
import OpenCard from "@/src/components/popups/OpenCard";
import EditDiary from "@/src/components/popups/EditDiary.jsx";
import AddNewPost from "@/src/components/popups/AddNewPost.jsx";
import Button from "@/src/components/ui/Button.jsx";
import MoreIcon from "@public/icons/moreIcon.webp";
import DiaryImage from "@public/plants/diaryPageImage.webp";
import UserImage from "@public/users/UserImageWithoutImage.webp";
import EditIcon from "@public/icons/editIcon.webp";
import PlusIcon from "@public/icons/plusIcon.svg";

const posts = [
  {
    img: UserImage.src,
    postDate: "3 days ago",
    title: "My Favorite plants",
    comment:
      "Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsm",
  },
  {
    img: UserImage.src,
    postDate: "3 days ago",
    title: "My Favorite plants",
    comment:
      "Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsm",
  },
  {
    img: UserImage.src,
    postDate: "3 days ago",
    title: "My Favorite plants",
    comment:
      "Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsm",
  },
];

const DiaryPage = () => {
  const [showOpenCard, setShowOpenCard] = useState(false);
  const [showEditDiary, setShowEditDiary] = useState(false);
  const [showAddNewPost, setShowAddNewPost] = useState(false);

  return (
    <>
      <div className="relative w-full h-[900px] px-[72px] py-9 bg-[#f7f7f7] rounded-md">
        <div className="w-[688px] mx-auto">
          <div className="flex items-center justify-between gap-5">
            <h2 className="font-semibold tracking-widest">
              Information about Pepper Plant
            </h2>
            <div
              className="flex gap-2 cursor-pointer"
              onClick={() => setShowEditDiary(true)}
            >
              <button className="flex-shrink-0">
                <Image src={EditIcon} alt="" />
              </button>
              <Button className="font-normal text-[#68BB59]">Edit</Button>
            </div>
          </div>
          <div>
            <p className="text-[#808080] leading-[22px] text-justify mt-4">
              Unite with a global network of dedicated gardeners who are as
              passionate about plants as you are. From beginners to seasoned
              experts, our community offers a platform to connect, learn, and
              grow together. Engage in discussions, share your gardening
              achievements, and seek advice from experienced gardeners across
              continents. Together, we nurture a thriving community that
              celebrates the beauty and joy of gardening.
            </p>
          </div>
          <div className="mt-4">
            <Image src={DiaryImage} alt="" className="w-full" />
          </div>
          <div className="flex items-center justify-between gap-5 my-[20px]">
            <div className="flex">
              <Button
                className="p-1 gap-2 cursor-pointer text-[#68BB59] font-normal"
                onClick={() => setShowAddNewPost(true)}
              >
                Garden Journal Entry
                <Image src={PlusIcon} alt="" />
              </Button>
            </div>
            <label className="center gap-2 text-xs font-normal">
              <input
                type="checkbox"
                className="w-[20px] h-[20px] rounded-full flex-shrink-0 border border-[#D1D1D6] appearance-none checked:bg-[#68BB59]"
              />
              Make Private
            </label>
          </div>
          <div className="flex flex-col gap-6">
            {posts.map((post, index) => {
              return (
                <div key={index}>
                  <div className="flex justify-between items-center gap-5">
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
                  <div
                    className="bg-[#F6F6F6] py-[10px] px-2 mt-2 cursor-pointer rounded-md"
                    onClick={() => setShowOpenCard(!showOpenCard)}
                  >
                    <p className="text-sm font-normal">{post.comment}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {showOpenCard && <OpenCard onClose={() => setShowOpenCard(false)} />}
      {showEditDiary && <EditDiary onClose={() => setShowEditDiary(false)} />}
      {showAddNewPost && (
        <AddNewPost onClose={() => setShowAddNewPost(false)} />
      )}
    </>
  );
};

export default DiaryPage;
