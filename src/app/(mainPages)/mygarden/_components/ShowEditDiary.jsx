"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import EditIcon from "@public/icons/grayEditIcon.svg";
import Button from "@/src/components/ui/Button";
const EditDiary = dynamic(() => import("@/src/components/popups/EditDiary"));

const ShowEditDiary = () => {
  const [showEditDiary, setShowEditDiary] = useState(false);

  return (
    <>
      <Button
        className="w-10 h-10"
        onClick={() => setShowEditDiary(true)}
      >
        <Image src={EditIcon} alt="" />
      </Button>
      {showEditDiary && <EditDiary onClose={() => setShowEditDiary(false)} />}
    </>
  );
};

export default ShowEditDiary;
