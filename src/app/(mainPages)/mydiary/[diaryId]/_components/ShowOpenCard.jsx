"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
const OpenCard = dynamic(() => import("@/src/components/modals/OpenCard"));

const ShowOpenCard = ({ post }) => {
  const [showOpenCard, setShowOpenCard] = useState(false);

  return (
    <>
      <div
        className="bg-[#F6F6F6] px-2 cursor-pointer rounded-md"
        onClick={() => setShowOpenCard(!showOpenCard)}
      >
        <p className="text-sm font-normal">{post.comment}</p>
      </div>
      {showOpenCard && <OpenCard onClose={() => setShowOpenCard(false)} />}
    </>
  );
};

export default ShowOpenCard;
