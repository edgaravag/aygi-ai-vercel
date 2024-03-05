'use client'
import React, { useState } from "react";
import DiaryImg from "../../../public/diaryImg.png";
import Image from "next/image";
import { CreateDiary } from "../components/CreateDiary";
import DiaryPage from "../components/DiaryPage";

const diaries = [
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
];

const MyGarden = () => {
  const [showAddDiary, setShowAddDiary] = useState(false)
  const [showDiaryPage, setShowDiaryPage] = useState(false)

  return (
    <main className="w-full h-screen px-16 py-[52px]">
      <div className="flex justify-start">
        <div 
          className="center p-1 gap-2 cursor-pointer"
          onClick={() => setShowAddDiary(!showAddDiary)}
        >
          <p className="text-[#68BB59] font-normal">Add New Diary</p>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle id="Ellipse 44" cx="20" cy="20" r="19.5" stroke="#68BB59" />
            <foreignObject x="10" y="10" width="20" height="20">
              <div xmlns="http://www.w3.org/1999/xhtml">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="content/add_24px">
                    <path
                      id=" &#226;&#134;&#179;Color"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.8827 10.7518H11.1769V15.2616H9.60823V10.7518H4.90234V9.24857H9.60823V4.73877H11.1769V9.24857H15.8827V10.7518Z"
                      fill="#68BB59"
                    />
                  </g>
                </svg>
              </div>
            </foreignObject>
          </svg>
        </div>
      </div>
      <div className="center flex-wrap gap-4 mt-11">
        {diaries.map((diary) => {
          return (
            <div 
              key={Math.random()} 
              className="w-[344px] cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200 active:scale-95"
              onClick={() => setShowDiaryPage(true)}
            >
              <div className="flex justify-between items-center gap-14">
                <div className="flex flex-col p-3 pb-2">
                  <p className="font-medium tracking-wider">
                    {diary.diaryName}
                  </p>
                  <p className="text-sm font-normal text-[#808080]">
                    {diary.creationDate}
                  </p>
                </div>
                <div className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_3369_7837)">
                      <path
                        d="M11.1159 3.02331L1.21212 12.9279C1.16225 12.9779 1.12671 13.0403 1.1092 13.1087L0.0114199 17.5149C-0.00472561 17.5803 -0.00373616 17.6487 0.0142927 17.7136C0.0323216 17.7785 0.0667806 17.8377 0.114341 17.8853C0.187394 17.9581 0.286304 17.9991 0.389444 17.9992C0.421261 17.9991 0.452956 17.9952 0.483812 17.9875L4.88995 16.8895C4.95846 16.8723 5.02099 16.8368 5.07086 16.7868L14.9756 6.88289L11.1159 3.02331ZM17.4292 1.67283L16.3267 0.570409C15.5899 -0.166413 14.3057 -0.165682 13.5697 0.570409L12.2192 1.92089L16.0787 5.78032L17.4292 4.42988C17.7972 4.06198 17.9999 3.57227 17.9999 3.05145C17.9999 2.53063 17.7972 2.04091 17.4292 1.67283Z"
                        fill="#808080"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3369_7837">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <Image src={diary.img} alt="" width={344} height={194} />
              <div className="px-3 py-[10px]">
                <p className="text-sm text-[#808080] font-normal tracking-wider">
                  {diary.description}
                </p>
              </div>
              <div className="flex justify-between">
                <button className="center py-[10px] px-2 text-[#68BB59] text-sm font-medium tracking-widest underline">
                  MORE
                </button>
                {diary.isPrivate && (
                  <div className="flex items-center mt-3 gap-1">
                    <p className="text-[#808080] text-sm font-normal">
                      Private
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="30"
                      viewBox="0 0 29 30"
                      fill="none"
                    >
                      <path
                        d="M21.7084 10.2505H20.5V9.04216C20.5 7.43981 19.8635 5.90308 18.7305 4.77005C17.5974 3.63702 16.0607 3.00049 14.4584 3.00049C12.856 3.00049 11.3193 3.63702 10.1863 4.77005C9.05322 5.90308 8.41669 7.43981 8.41669 9.04216V10.2505H7.20836C6.88789 10.2505 6.58054 10.3778 6.35394 10.6044C6.12733 10.831 6.00002 11.1384 6.00002 11.4588V20.8355C5.99758 21.5105 6.18417 22.1727 6.53866 22.7472C6.89316 23.3217 7.40141 23.7854 8.00586 24.0859L13.9146 27.0342C14.0826 27.1215 14.2691 27.1671 14.4584 27.1671C14.6476 27.1671 14.8341 27.1215 15.0021 27.0342L20.9109 24.0859C21.5153 23.7854 22.0236 23.3217 22.3781 22.7472C22.7325 22.1727 22.9191 21.5105 22.9167 20.8355V11.4588C22.9167 11.1384 22.7894 10.831 22.5628 10.6044C22.3362 10.3778 22.0288 10.2505 21.7084 10.2505ZM15.6667 18.7088C15.6667 19.0293 15.5394 19.3366 15.3128 19.5632C15.0862 19.7898 14.7788 19.9172 14.4584 19.9172C14.1379 19.9172 13.8305 19.7898 13.6039 19.5632C13.3773 19.3366 13.25 19.0293 13.25 18.7088V16.2922C13.25 15.9717 13.3773 15.6643 13.6039 15.4377C13.8305 15.2111 14.1379 15.0838 14.4584 15.0838C14.7788 15.0838 15.0862 15.2111 15.3128 15.4377C15.5394 15.6643 15.6667 15.9717 15.6667 16.2922V18.7088ZM18.0834 10.2505H10.8334V9.04216C10.8334 8.08075 11.2153 7.15871 11.8951 6.47889C12.5749 5.79907 13.4969 5.41716 14.4584 5.41716C15.4198 5.41716 16.3418 5.79907 17.0216 6.47889C17.7014 7.15871 18.0834 8.08075 18.0834 9.04216V10.2505Z"
                        fill="#808080"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      { showAddDiary && <CreateDiary onClose={() => setShowAddDiary(false)} /> }
      { showDiaryPage && <DiaryPage onClose={() => setShowDiaryPage(false)} /> }
    </main>
  );
};

export default MyGarden;
