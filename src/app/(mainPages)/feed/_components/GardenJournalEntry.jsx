'use client'
import Image from "next/image";
import BusinessIcon from "@public/icons/blueBusinessIcon.webp";
import UploadImage from "@public/icons/userUploadImage.webp";
// import ArrowIcon from "@public/icons/arrowDown.webp";
import ChooseDiary from "./ChooseDiary";
import ChooseActivities from "./ChooseActivities";
import { useState } from "react";

const WriteTheNews = () => {
  const [diary, setDiary] = useState(null)
  const [selectedActivities, setSelectedActivities] = useState([])
  

  // onKeyDown={handleKeyPress}

  return (
    <div className="w-full border border-[#68BB59] rounded-md px-4 py-6 mt-6"> 
      <div className="flex gap-2">
        <Image
          src={BusinessIcon}
          alt="News Icon"
          width={62}
          height={62}
          // style={{ width: "auto" }}
          className="h-[62px] w-[62px]"
          priority
        />
        <input
          type="text"
          placeholder="write the news"
          className="w-full bg-[#EBEBEB] px-6 py-5 rounded-[32px] outline-none"
        />
      </div>
      <div className="flex justify-between mt-3">
        <ChooseDiary setDiary={setDiary} />
        <ChooseActivities 
          setSelectedActivities={setSelectedActivities} 
          selectedActivities={selectedActivities} 
        />
        <button className="self-end flex text-[#808080]">
          <Image src={UploadImage} alt="Upload Image" className="mr-2" />
          Upload image
        </button>
      </div>
    </div>
  );
};

export default WriteTheNews;
