"use client";
import Button from "@/src/components/ui/Button";
import dynamic from "next/dynamic";
import { useState } from "react";
const MakeDetection = dynamic(() =>
  import("@/src/components/modals/MakeDetection/MakeDetection")
);
const DetectionResult = dynamic(() =>
  import("@/src/components/modals/DetectionResult/DetectionResult")
);

const MakeDetections = () => {
  const [showMakeDetections, setShowMakeDetections] = useState(false);
  const [showDetectionResult, setShowDetectionResult] = useState(false);

  return (
    <>
      <Button
        className="p-3 text-[#68BB59] text-sm font-normal tracking-widest border border-[#68BB59]"
        onClick={() => setShowMakeDetections(true)}
      >
        Make Detection
      </Button>
      {showMakeDetections && (
        <MakeDetection
          onClose={() => setShowMakeDetections(false)}
          setShowDetectionResult={setShowDetectionResult}
        />
      )}
      {showDetectionResult && (
        <DetectionResult onClose={() => setShowDetectionResult(false)} />
      )}
    </>
  );
};

export default MakeDetections;
