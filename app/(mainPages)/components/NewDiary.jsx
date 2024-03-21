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
        name=""
        id=""
        className="h-[46px] w-[474px] bg-[#F6F6F6] text-[#808080] mt-[64px] rounded-md px-4"
        placeholder="Diary Name"
      />

      <div className="h-[213px] mt-[26px] bg-[#F6F6F6] flex flex-col justify-between rounded-md">
        <input
          type="text"
          placeholder="Description"
          className="w-full outline-none bg-[#F6F6F6] px-4"
        />
        <div className="self-end flex px-4 py-4">
          <Image src={UploadImage} alt="" className="mr-2" />
          <p className="text-[#808080]">Upload image</p>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 border-t border-t-[#D9D9D9]">
        <label className="center gap-2">
          <div className="center rounded-full">
            <input type="checkbox" className="w-[20px] h-[20px] rounded-full" />
          </div>
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
