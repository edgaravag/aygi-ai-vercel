"use client";
import { useState } from "react";
import Button from "@/src/components/ui/Button";
import MakeDetection from "@/src/components/popups/MakeDetection";
import { useSelector, useDispatch } from "react-redux";
import {
  getModalState,
  setIsOpen,
} from "@/src/store/features/modalSlice/modalSlice";
const MakeDetections = () => {
  // const [showMakeDetection, setShowMakeDetection] = useState(false);
  const isOpen = useSelector(getModalState);
  const dispatch = useDispatch();
  const handleModalClick = () => {
    dispatch(setIsOpen(!isOpen));
  };
  return (
    <>
      <Button
        className="p-3 text-[#68BB59] text-sm font-normal tracking-widest border border-[#68BB59]"
        onClick={handleModalClick}
      >
        Make Detection
      </Button>
      {/* {showMakeDetection && (
        <MakeDetection onClose={() => setShowMakeDetection(false)} />
      )} */}
    </>
  );
};

export default MakeDetections;
