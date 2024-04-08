import React from "react";
import Image from "next/image";
import PopUpWrap from "../ui/PopUpWrap";
import MakeDetectionIcon1 from "@public/icons/makeDetectionIcon1.webp";
import MakeDetectionIcon2 from "@public/icons/makeDetectionIcon1.webp";
import UploadImage from "@public/icons/uploadImageIcon.svg";
import DetectionImage from "@public/plants/detectionImg.webp";
import GarbageIcon from "@public/icons/garbageIcon.webp";
import Button from "../ui/Button";

const MakeDetection = ({ onClose }) => {
  return (
    <PopUpWrap onClose={onClose} className="flex gap-12 p-16">
      <div className="pt-[26px] border-2 border-[#68BB59] rounded-md">
        <div className="px-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-[#66B059] py-2 px-4">
              <Image src={MakeDetectionIcon1} alt="" />
            </div>
            <p className="text-lg font-semibold">Plant Identification</p>
          </div>
          <p className="mt-4 w-[320px] leading-7">
            Press ‘Plant Identification’, upload a clear image of the plant in
            question, and get its name, detailed care instructions, and
            fascinating facts about it.
          </p>
        </div>
        <div className="mt-[26px] pt-4 pb-[26px] px-4 bg-[#68BB59]">
          <p className="text-lg font-semibold">
            Upload photo to identify plant
          </p>
          <div className="w-full mt-6 h-[208px] center flex-col bg-white rounded-md">
            <Image
              src={UploadImage}
              alt="Upload Image Icon"
              width={38}
              height={35}
              className="w-[38px] h-[35px]"
            />
            <p className="text-[#68BB59] text-xs">Drag & Drop or Browse</p>
            <p className="text-[#B3B3B3] text-xs mt-1">
              Support png /jpg / jpeg
            </p>
          </div>
          <Button className="mt-8 py-2.5 px-3 mx-auto text-white bg-[#808080]">
            Plant Identification
          </Button>
        </div>
      </div>
      <div className="pt-[26px] border-2 border-[#68BB59] rounded-md">
        <div className="px-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-[#66B059] py-2 px-4">
              <Image src={MakeDetectionIcon2} alt="" />
            </div>
            <p className="text-lg font-semibold">Disease Detection</p>
          </div>
          <p className="mt-4 w-[320px] leading-7">
            Select ‘Disease Detection’, upload a clear photo of your plant's
            issue, and quickly receive a diagnosis along with treatment options
            and preventive measures.
          </p>
        </div>
        <div className="mt-[26px] pt-4 pb-[26px] px-4 bg-[#68BB59]">
          <p className="text-lg font-semibold">
            Upload photo to disease analysis
          </p>
          <div className="relative w-full mt-6 h-[208px] center flex-col bg-white rounded-md">
            <Image
              src={DetectionImage}
              alt="Upload Photo Image"
              width={320}
              height={208}
            />
            <div className="absolute center bg-[#68BB59] size-[40px] top-3 right-3 rounded-full cursor-pointer">
              <Image
                src={GarbageIcon}
                alt="Garbage Icon"
                width={20}
                height={24}
                className="w-[20px] h-6"
              />
            </div>
          </div>
          <Button className="mt-8 py-2.5 px-3 mx-auto text-white bg-[#318C21]">
            Disease detection
          </Button>
        </div>
      </div>
    </PopUpWrap>
  );
};

export default MakeDetection;
