import PopUpWrap from "@/uiComponents/PopUpWrap";
import React from "react";
import Button from "@/uiComponents/Button";
import UploadImage from "../../../public/userUploadImage.png";
import Image from "next/image";
const NewDiary = ({ onClose }) => {
  return (
    <PopUpWrap onClose={onClose} className="w-[572px] py-[41px] px-[51px] ">
      <h2 className="font-medium ">Create new diary</h2>
      <input
        type="text"
        className="py-3 px-4 w-full bg-[#F6F6F6] text-[#808080] mt-[64px] rounded-md outline-none"
        placeholder="Diary Name"
      />

      <div className="h-[213px] mt-[14px] py-3 px-[18px] bg-[#F6F6F6] flex flex-col justify-between rounded-md">
        <input
          type="text"
          placeholder="Description"
          className="w-full outline-none bg-[#F6F6F6] px-4"
        />
        <button className="self-end flex text-[#808080]">
          <Image src={UploadImage} alt="" className="mr-2" />
          Upload image
        </button>
      </div>

      <div className="flex items-center justify-between mt-4">
        <label className="center gap-2">
          <input type="checkbox" className="size-[20px] rounded-full" />
          Make Private
        </label>
        <div className="flex gap-6">
          <button className="font-normal text-sm text-[#808080] ">
            Cancel
          </button>
          <Button className="py-[14px] px-[34px] bg-[#68BB59] text-sm text-white font-normal">
            Create Diary
          </Button>
        </div>
      </div>
    </PopUpWrap>
  );
};

export default NewDiary;
