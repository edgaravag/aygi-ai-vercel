"use client";
import React, { useState } from "react";
import Image from "next/image";
import DiaryPage from "../components/DiaryPage";
// import { CreateDiary } from "../components/CreateDiary";
import DiaryImg from "../../../public/diaryImg.png";
import EditIcon from "../../../public/grayEditIcon.svg";
import EditDiary from "../components/EditDiary";

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
    creationDate: "05 March",
    img: DiaryImg.src,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    isPrivate: true,
  },
];

const MyGarden = () => {
  const [showDiaryPage, setShowDiaryPage] = useState(false);
  const [showEditDiary, setShowEditDiary] = useState(false);

  return (
    <main className="w-full h-screen mx-auto py-[122px] px-16">
      <div className="center flex-wrap mx-auto gap-4 max-[2166px]:w-[704px] max-[1440px]:w-auto">
        {diaries.map((diary, index) => {
          return (
            <div
              key={index}
              className={`${index === 0 && "mt-[-70px]"} relative w-[344px]`}
              onClick={() => setShowDiaryPage(true)}
            >
              {index === 0 && (
                <div className="flex mb-6">
                  <div
                    className="center p-1 gap-2 cursor-pointer"
                    // onClick={() => setShowAddDiary(!showAddDiary)}
                  >
                    <p className="text-[#68BB59] font-normal">Add New Diary</p>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        id="Ellipse 44"
                        cx="20"
                        cy="20"
                        r="19.5"
                        stroke="#68BB59"
                      />
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
              )}
              <div className=" cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200 active:scale-95">
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
                <Image src={diary.img} alt="" width={344} height={194} className={diary.isPrivate && "opacity-50"} />
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
              {index === diaries.length - 1 && (
                <div className="absolute flex left-[105px] mt-9 text-sm font-semibold gap-[20px]">
                  <button>Previous</button>
                  <div className="p-2 bg-[#68BB59] bg-opacity-20 rounded-md cursor-pointer">
                    1
                  </div>
                  <div className="p-2 cursor-pointer">2</div>
                  <div className="p-2 cursor-pointer">3</div>
                  <button>Next</button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* {showAddDiary && <CreateDiary onClose={() => setShowAddDiary(false)} />} */}
      {showDiaryPage && <DiaryPage onClose={() => setShowDiaryPage(false)} />}
      {showEditDiary && <EditDiary onClose={() => setShowEditDiary(false)} />}
    </main>
  );
};

export default MyGarden;
