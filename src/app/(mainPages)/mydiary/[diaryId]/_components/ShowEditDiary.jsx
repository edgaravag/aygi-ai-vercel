"use client";
import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Button from "@/src/components/ui/Button";
import EditIcon from "@public/icons/editIcon.webp";
const EditDiary = dynamic(() =>
  import("@/src/components/modals/EditDiary/EditDiary")
);

const ShowEditDiary = () => {
  const [showEditDiary, setShowEditDiary] = useState(false);

  return (
    <>
      <div
        className="flex gap-2 cursor-pointer"
        onClick={() => setShowEditDiary(true)}
      >
        <button className="flex-shrink-0">
          <Image src={EditIcon} alt="" />
        </button>
        <Button className="font-normal text-[#68BB59]">Edit</Button>
      </div>
      {showEditDiary && <EditDiary onClose={() => setShowEditDiary(false)} />}
    </>
  );
};

export default ShowEditDiary;
