import React from "react";
import Image from "next/image";
import PopUpWrap from "../ui/PopUpWrap";
import Button from "../ui/Button";
import UploadImage from "@public/icons/userUploadImage.png";

const NewDiary = ({ onClose }) => {
  return (
    <PopUpWrap onClose={onClose} className="w-[572px] py-8 px-12 ">
      <h2 className="font-medium ">Create new diary</h2>
      <input
        type="text"
        className="py-3 px-4 w-full bg-[#F6F6F6] text-[#808080] mt-8 rounded-md outline-none"
        placeholder="Diary Name"
      />
      <div className="h-[213px] mt-[14px] py-3 px-[18px] bg-[#F6F6F6] flex flex-col justify-between rounded-md">
        <input
          type="text"
          placeholder="Description"
          className="w-full outline-none bg-[#F6F6F6]"
        />
        <button className="self-end flex text-[#808080]">
          <Image src={UploadImage} alt="" className="mr-2" />
          Upload image
        </button>
      </div>
      <div className="flex items-center justify-between mt-4">
        <label className="center gap-2 text-xs font-normal">
          <input
            type="checkbox"
            className="w-[20px] h-[20px] rounded-full border border-[#D1D1D6] appearance-none checked:bg-[#68BB59]"
          />
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
