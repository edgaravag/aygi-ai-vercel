'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import ArrowIcon from "@public/icons/arrowDown.webp";
import axiosInstance from "@/src/utils/axiosInstance";
import dynamic from "next/dynamic";
const NewDiary = dynamic(() =>
  import("@/src/components/modals/NewDiary/NewDiary")
);

const ChooseDiary = ({ setDiaryId }) => {
  const [showChooseDiary, setShowChooseDiary] = useState(false);
  const [showAddNewDiary, setShowAddNewDiary] = useState(false);
  const [diaries, setDiaries] = useState([])

  useEffect(() => {
    axiosInstance
      .get('/diary')
      .then((response) => {
        setDiaries(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

 
  return (
    <>
      <div className="relative">
        <button
          className="flex items-center gap-2 text-[#808080]"
          onClick={() => setShowChooseDiary(!showChooseDiary)}
        >
          Choose Diary
          <Image src={ArrowIcon} alt="Arrow Icon" />
        </button>
        {showChooseDiary && (
          <div className="absolute right-[-18px] bg-white w-[160px] border border-[#68BB59] rounded-md">
            <button className="px-4 w-full bg-[#E5F7E2] text-[#68BB59] text-sm py-2" onClick={() => setShowAddNewDiary(true)}>
              Add new diary
            </button>
            <>
              {diaries.length === 0 ? (
                <p className="px-4 text-sm text-center py-2">
                  You don't have any diaries yet
                </p>
              ) : (
                diaries.map((diary) => {
                  return (
                    <div
                      className="px-4 py-2 cursor-pointer"
                      key={diary.id}
                      onClick={() => {
                        setShowChooseDiary(false);
                        setDiaryId(diary.id);
                      }}
                    >
                      <p className="text-[#808080] text-sm">{diary.name}</p>
                    </div>
                  );
                })
              )}
            </>
          </div>
        )}
      </div>
      {showAddNewDiary && <NewDiary />}
    </>
  );
}

export default ChooseDiary