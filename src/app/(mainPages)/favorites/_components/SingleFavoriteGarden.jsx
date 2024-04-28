"use client";
import { useState } from "react";
import Image from "next/image";
import HeartIcon from '@public/icons/heartIcon.svg'

const SingleFavoriteGarden = ({ image }) => {
  const [showHover, setShowHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setShowHover(true)}
      onMouseLeave={() => setShowHover(false)}
      className={`relative cursor-pointer ${
        showHover ? "bg-black bg-opacity-40" : ""
      }`}
    >
      <Image alt="Favorite's Image" src={image} width={206} height={242} />
      {showHover && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 pl-4 pb-4"
          style={{ pointerEvents: "none" }}
        >
          <div className="mt-[185px]">
            <p className="text-white font-semibold">Diary Name</p>
            <div className="flex items-center gap-1">
              <Image src={HeartIcon} alt="Heart icon" />
              <p className="text-white text-sm">10,8k</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleFavoriteGarden;
