"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
const OpenCard = dynamic(() =>
  import("@/src/components/modals/OpenCard/OpenCard")
);

const ShowOpenCard = () => {
  const [showOpenCard, setShowOpenCard] = useState(false);

  return (
    <>
      <button
        className="font-normal text-[#808080]"
        onClick={() => setShowOpenCard(true)}
      >
        Comment
      </button>
      {showOpenCard && <OpenCard onClose={() => setShowOpenCard(false)} />}
    </>
  );
};

export default ShowOpenCard;
