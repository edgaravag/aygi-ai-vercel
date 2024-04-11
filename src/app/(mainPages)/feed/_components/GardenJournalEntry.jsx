'use client'
import { useState } from "react";
import Button from "@/src/components/ui/Button";
import PlusIcon from "@public/icons/plusIcon.svg";
import Image from "next/image";
import dynamic from 'next/dynamic';
const AddNewPost = dynamic(() => import("@/src/components/popups/AddNewPost")) 

const GardenJournalEntry = () => {
  const [showAddNewPost, setShowAddNewPost] = useState(false);

  return (
    <>
      <Button
        className="center p-1 gap-2 cursor-pointer"
        onClick={() => setShowAddNewPost(true)}
      >
        <p className="text-[#68BB59] font-normal">Garden Journal Entry</p>
        <Image src={PlusIcon} alt="" />
      </Button>
      {showAddNewPost && <AddNewPost onClose={() => setShowAddNewPost(false)} />}
    </>
  );
};

export default GardenJournalEntry;
