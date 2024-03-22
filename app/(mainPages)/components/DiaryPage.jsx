"use client";
import Image from "next/image";
import React, { useState } from "react";
import MoreIcon from "../../../public/moreIcon.png";
import DiaryImage from "../../../public/diaryPageImage.png";
import DiaryPostImage from "../../../public/diaryPost.png";
import EditIcon from "../../../public/editIcon.png";
import PlusIcon from "../../../public/plusIcon.svg";
import OpenCard from "./OpenCard";
import EditDiary from "./EditDiary";
import PopUpWrap from "@/uiComponents/PopUpWrap";
import Button from "@/uiComponents/Button";

const posts = [
  {
    img: DiaryPostImage.src,
    postDate: "3 days ago",
    title: "My Favorite plants",
    comment:
      "Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsm",
  },
  {
    img: DiaryPostImage.src,
    postDate: "3 days ago",
    title: "My Favorite plants",
    comment:
      "Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsm",
  },
  {
    img: DiaryPostImage.src,
    postDate: "3 days ago",
    title: "My Favorite plants",
    comment:
      "Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsm",
  },
];

const DiaryPage = ({ onClose }) => {
  const [showOpenCard, setShowOpenCard] = useState(false);
  const [showEditDiary, setShowEditDiary] = useState(false);

  return (
    <>
      {!showEditDiary && !showOpenCard && (
        <PopUpWrap
          onClose={onClose}
          className={`relative w-[816px] max-h-screen px-12 py-8 bg-white rounded-md ${
            (showOpenCard && "hidden", showEditDiary && "hidden")
          }`}
        >
          <div className="flex items-center justify-between">
            <h2 className="font-semibold tracking-widest">
              Information about Pepper Plant
            </h2>
            <div
              className="flex gap-2 cursor-pointer"
              onClick={() => setShowEditDiary(true)}
            >
              <button>
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
          <div className="flex items-center justify-between my-[20px]">
            <div className="flex">
              <Button className="p-1 gap-2 cursor-pointer text-[#68BB59] font-normal">
                Add New Post
                <Image src={PlusIcon} alt="" />
              </Button>
            </div>
            <label className="center gap-2 text-xs font-normal">
              <div className="center rounded-full">
                <input
                  type="checkbox"
                  className="w-[20px] h-[20px] rounded-full"
                />
              </div>
              Make Private
            </label>
          </div>
          <div className="flex flex-col gap-6">
            {posts.map((post, index) => {
              return (
                <div key={index}>
                  <div className="flex justify-between items-center">
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
                    className="bg-[#F6F6F6] py-[10px] px-2 mt-2 cursor-pointer"
                    onClick={() => setShowOpenCard(!showOpenCard)}
                  >
                    <p className="text-sm font-normal">{post.comment}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </PopUpWrap>
      )}
      {showOpenCard && <OpenCard onClose={onClose} />}
      {showEditDiary && <EditDiary onClose={onClose} />}
    </>
  );
};

export default DiaryPage;
