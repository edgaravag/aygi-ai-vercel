import React, { useState } from "react";
import Image from "next/image";
import DiaryPage from "../../popups/DiaryPage";
import EditDiary from "../../popups/EditDiary";
import NewDiary from "../../popups/NewDiary";
import Button from "@/app/components/ui/Button";
import DiaryImg from "@public/plants/diaryImg.webp";
import EditIcon from "@public/icons/grayEditIcon.svg";
import PlusIcon from "@public/icons/plusIcon.svg";
import PrivateIcon from '@public/icons/privateIcon.svg'

const diaries = [
  {
    diaryName: "Diary Name",
    creationDate: "05 March",
    img: DiaryImg.src,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    isPrivate: false,
  },
  {
    diaryName: "Diary Name",
    creationDate: "05 March",
    img: DiaryImg.src,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    isPrivate: false,
  },
  {
    diaryName: "Diary Name",
    creationDate: "05 March",
    img: DiaryImg.src,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    isPrivate: true,
  },
  {
    diaryName: "Diary Name",
    creationDate: "06 March",
    img: DiaryImg.src,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    isPrivate: true,
  },
];

const MyGardenComponent = () => {
  const [showDiaryPage, setShowDiaryPage] = useState(false);
  const [showEditDiary, setShowEditDiary] = useState(false);
  const [showNewDiary, setShowNewDiary] = useState(false);

  return (
    <>
      <main className="w-full h-screen mx-auto py-9 px-16">
        <button
          className="flex items-center w-[704px] mb-6 mx-auto p-1 gap-2 text-[#68BB59] font-normal"
          onClick={() => setShowNewDiary(true)}
        >
          Add New Diary
          <Image src={PlusIcon} alt="" />
        </button>
        <div className="center flex-wrap mx-auto gap-4 max-[2166px]:w-[704px] max-[1440px]:w-auto">
          {diaries.map((diary, index) => {
            return (
              <div key={index} className="relative w-[344px]">
                <div
                  className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200 active:scale-95"
                  onClick={() => setShowDiaryPage(true)}
                >
                  <div className="flex justify-between items-center gap-14 pl-3 py-2">
                    <div className="flex flex-col">
                      <p className="font-medium tracking-wider">
                        {diary.diaryName}
                      </p>
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
                      <Image src={EditIcon} alt="" />
                    </div>
                  </div>
                  <Image
                    src={diary.img}
                    alt=""
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
                        <p className="text-[#808080] text-sm font-normal">
                          Private
                        </p>
                        <Image alt="" src={PrivateIcon} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-end mx-auto w-[704px] mt-9 text-sm font-semibold gap-[20px]">
          <button>Previous</button>
          <div className="p-2 bg-[#68BB59] bg-opacity-20 rounded-md cursor-pointer">
            1
          </div>
          <div className="p-2 cursor-pointer">2</div>
          <div className="p-2 cursor-pointer">3</div>
          <button>Next</button>
        </div>
      </main>
      {showDiaryPage && <DiaryPage onClose={() => setShowDiaryPage(false)} />}
      {showEditDiary && <EditDiary onClose={() => setShowEditDiary(false)} />}
      {showNewDiary && <NewDiary onClose={() => setShowNewDiary(false)} />}
    </>
  );
};

export default MyGardenComponent;
