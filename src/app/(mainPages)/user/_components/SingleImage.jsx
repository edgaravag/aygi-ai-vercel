"use client";
import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const DiaryPage = dynamic(() => import("@/src/components/modals/DiaryPage"));

const SingleImage = ({ image }) => {
  const [showDiaryPage, setShowDiaryPage] = useState(false);

  return (
    <>
      <Image
        src={image}
        alt=""
        priority
        width={206}
        height={242}
        className="cursor-pointer"
        onClick={() => setShowDiaryPage(true)}
      />
      {showDiaryPage && <DiaryPage onClose={() => setShowDiaryPage(false)} />}
    </>
  );
};

export default SingleImage;
