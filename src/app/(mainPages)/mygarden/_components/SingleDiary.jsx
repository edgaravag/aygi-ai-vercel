"use client"
import React, { useState } from 'react';
import Image from "next/image";
import PrivateIcon from "@public/icons/privateIcon.svg";
import Button from "@/src/components/ui/Button";
import dynamic from 'next/dynamic'
const DiaryPage = dynamic(() => import("@/src/components/popups/DiaryPage"))
const EditDiary = dynamic(() => import("@/src/components/popups/EditDiary"))

const SingleDiary = ({ diary }) => {
  const [showDiaryPage, setShowDiaryPage] = useState(false);
  const [showEditDiary, setShowEditDiary] = useState(false);

  return (
    <>
      <div className="relative w-[344px]">
        <div
          className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200 active:scale-95"
          onClick={() => setShowDiaryPage(true)}
        >
          <div className="flex justify-between items-center gap-14 pl-3 py-2">
            <div className="flex flex-col">
              <p className="font-medium tracking-wider">{diary.diaryName}</p>
              <p className="text-sm font-normal text-[#808080]">
                {diary.creationDate}
              </p>
            </div>
            <div
              className="center cursor-pointer w-10 h-10"
              onClick={(e) => {
                e.stopPropagation();
                setShowEditDiary(true);
              }}
            >
            </div>
          </div>
          <Image
            src={diary.img}
            alt="Diary Image"
            loading="eager"
            priority
            width={344}
            height={194}
            className={diary.isPrivate ? "opacity-50" : undefined}
          />
          <div className="px-3 py-[10px]">
            <p className="text-sm text-[#808080] font-normal tracking-wider">
              {diary.description}
            </p>
          </div>
          <div className="flex justify-between">
            <Button className="py-[10px] px-2 text-[#68BB59] text-sm font-medium tracking-widest underline">
              MORE
            </Button>
            {diary.isPrivate && (
              <div className="flex items-center mt-3 gap-1">
                <p className="text-[#808080] text-sm font-normal">Private</p>
                <Image alt="" src={PrivateIcon} />
              </div>
            )}
          </div>
        </div>
      </div>
      {showDiaryPage && <DiaryPage onClose={() => setShowDiaryPage(false)} />}
      {showEditDiary && <EditDiary onClose={() => setShowEditDiary(false)} />}
    </>
  );
};

export default SingleDiary;
