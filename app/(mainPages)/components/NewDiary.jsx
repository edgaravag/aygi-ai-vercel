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

      <div className="flex mt-4 justify-between">
        <label className="flex">
          <input 
          type="checkbox" 
          className="w-[20px] h-[20px] rounded-full" 
          />
          Make Private
        </label>
        
        <Button className="px-10">Cancle</Button>
        <Button className="bg-[#68BB59] w-[154px] h-[41px] text-[#FFFFFF]">Create Diary</Button>
      </div>
    </PopUpWrap>
  );
};

export default NewDiary;
