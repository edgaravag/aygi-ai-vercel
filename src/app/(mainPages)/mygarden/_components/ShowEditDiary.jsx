"use client";
import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import EditIcon from "@public/icons/grayEditIcon.svg";
const EditDiary = dynamic(() => import("@/src/components/popups/EditDiary"));

const ShowEditDiary = () => {
  const [showEditDiary, setShowEditDiary] = useState(false);

  return (
    <>
      <div
        className="center cursor-pointer w-10 h-10" 
        onClick={() => setShowEditDiary(true)}
      >
        <Image src={EditIcon} alt="" />
      </div>
      {showEditDiary && <EditDiary onClose={() => setShowEditDiary(false)} />}
    </>
  );
};

export default ShowEditDiary;
