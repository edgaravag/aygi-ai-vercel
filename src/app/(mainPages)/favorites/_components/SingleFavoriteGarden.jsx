'use client'
import { useState } from "react";
import Image from "next/image";
import dynamic from 'next/dynamic';
const DiaryPage = dynamic(() => import("@/src/components/popups/DiaryPage"))

const SingleFavoriteGarden = ({ image }) => {
  const [showDiaryPage, setShowDiaryPage] = useState(false);

  return (
    <>
      <Image
        alt=""
        src={image}
        width={206}
        height={242}
        className="cursor-pointer"
        onClick={() => setShowDiaryPage(true)}
      />
      {showDiaryPage && <DiaryPage onClose={() => setShowDiaryPage(false)} />}
    </>
  );
};

export default SingleFavoriteGarden;
