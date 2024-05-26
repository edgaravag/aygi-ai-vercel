'use client'
import { useState } from "react";
import Image from "next/image";
import ArrowIcon from "@public/icons/arrowDown.webp";

const ChooseActivities = () => {
  const [showChooseActivities, setShowChooseActivities] = useState(true);

  return (
    <>
      <button className="flex items-center gap-2 text-[#808080]" onClick={() => setShowChooseActivities(!showChooseActivities)}>
        Choose Activities
        <Image src={ArrowIcon} alt="" />
      </button>
      {showChooseActivities && (
        <div></div>
      )}
    </>
  )
}

export default ChooseActivities