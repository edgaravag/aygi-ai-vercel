"use client";
import Button from "@/src/components/ui/Button";
import dynamic from 'next/dynamic';
import { useState } from "react";
const MakeDetection = dynamic(() =>
  import('@/src/components/popups/MakeDetection'),
);
const MakeDetections = () => {
  const [showMakeDetections, setShowMakeDetections] = useState(false);

  return (
    <>
      <Button
        className="p-3 text-[#68BB59] text-sm font-normal tracking-widest border border-[#68BB59]"
        onClick={() => setShowMakeDetections(true)}
      >
        Make Detection
      </Button>
      {showMakeDetections && <MakeDetection onClose={() => setShowMakeDetections(false)} />}
    </>
  );
};

export default MakeDetections;
