"use client";
import { useState } from "react";
import Image from "next/image";
import PlusIcon from "@public/icons/plusIcon.svg";
import dynamic from "next/dynamic";
const NewDiary = dynamic(() =>
  import("@/src/components/modals/NewDiary/NewDiary")
);

const ShowNewDiary = () => {
  const [showNewDiary, setShowNewDiary] = useState(false);

  return (
    <>
      <button
        className="flex items-center w-[704px] mb-6 mx-auto p-1 gap-2 text-[#68BB59] font-normal"
        onClick={() => setShowNewDiary(true)}
      >
        Add New Diary
        <Image src={PlusIcon} alt="" />
      </button>
      {showNewDiary && <NewDiary onClose={() => setShowNewDiary(false)} />}
    </>
  );
};

export default ShowNewDiary;
