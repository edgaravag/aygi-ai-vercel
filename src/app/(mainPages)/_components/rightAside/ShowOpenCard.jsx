"use client";
import { useState } from "react";
import Button from "@/src/components/ui/Button";
import dynamic from "next/dynamic";
const OpenCard = dynamic(() => import("@/src/components/modals/OpenCard/OpenCard"))

const ShowOpenCard = () => {
  const [showOpenCard, setShowOpenCard] = useState(false);

  return (
    <>
      <Button
        className="bg-[#68BB59] text-white font-normal text-sm px-[15px] py-[1px]"
        onClick={() => setShowOpenCard(true)}
      >
        View
      </Button>
      {showOpenCard && <OpenCard onClose={() => setShowOpenCard(false)} />}
    </>
  );
};

export default ShowOpenCard;
