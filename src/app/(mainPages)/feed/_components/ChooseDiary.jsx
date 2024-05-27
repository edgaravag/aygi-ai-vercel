'use client'
import { useState } from "react";
import Image from "next/image";
import ArrowIcon from "@public/icons/arrowDown.webp";

const ChooseDiary = () => {
  const [showChooseDiary, setShowChooseDiary] = useState(false);

  return (
    <div className="relative">
      <button className="flex items-center gap-2 text-[#808080]" onClick={() => setShowChooseDiary(!showChooseDiary)}>
        Choose Diary
        <Image src={ArrowIcon} alt="" />
      </button>
      {showChooseDiary && (
        <div className="border border-[#68BB59] rounded-md">
          
        </div>
      )}
    </div>
  )
}

export default ChooseDiary