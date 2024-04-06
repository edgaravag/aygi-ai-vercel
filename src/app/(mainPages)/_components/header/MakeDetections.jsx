'use client'
import { useState } from "react";
import Button from "@/src/components/ui/Button";
import MakeDetection from "@/src/components/popups/MakeDetection";

const MakeDetections = () => {
  const [showMakeDetection, setShowMakeDetection] = useState(false);

  return (
    <>
      <Button
        className="p-3 text-[#68BB59] text-sm font-normal tracking-widest border border-[#68BB59]"
        onClick={() => setShowMakeDetection(true)}
      >
        Make Detection
      </Button>
      {showMakeDetection && <MakeDetection onClose={() => setShowMakeDetection(false)} />}
    </>
  );
};

export default MakeDetections;
