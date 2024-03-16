import React from "react";
import Image from "next/image";
import CloseIcon from "../../../public/closeIcon.svg";
import UserIcon from "../../../public/headerUserIcon.png";
import AddImageIcon from "../../../public/addImage.png";
import UploadImage from "../../../public/imgUpload.png";
import GarbageImage from "../../../public/garbageImage.png";
const EditDiary = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <div
      className="center z-50 bg-black bg-opacity-60 fixed top-0 left-0 right-0 bottom-0"
      onClick={handleClose}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <div className="relative w-[635px] py-16 px-[72px] bg-white rounded-md">
          <button
            className="absolute z-[100] center w-[41px] h-[41px] top-[-18px] right-[-18px] bg-[#68bb59] rounded-full"
            onClick={handleClose}
          >
            <Image src={CloseIcon} alt="" />
          </button>
          <div className="border border-[#D9D9D9] rounded">
            <h2 className="py-4 text-center font-semibold text-[#666666] tracking-widest border-b border-b-[#D9D9D9]">
              Edit your diary
            </h2>
            <div className="p-4">
              <div className="flex gap-4">
                <div>
                  <Image src={UserIcon} alt="" width={40} height={40} />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-normal">John Doe</p>
                  <p className="font-normal">
                    Information about Pepper Plant{" "}
                    <button className="text-[#808080]">Edit your text</button>
                  </p>
                </div>
              </div>
              <p className="mt-4">
                Unite with a global network of dedicated gardeners who are as
                passionate about plants as you are.{" "}
                <button className="text-[#808080]">Edit your text</button>
              </p>
            </div>
            <div className="flex h-[108px] mt-[10px] px-[17px] py-[9px]  items-end justify-between">
              <Image
                src={GarbageImage}
                alt=""
                style={{ width: "auto", height: "auto" }}
                className="cursor-pointer"
              />
              <button className="center gap-2 text-sm text-[#808080] font-normal ">
                <Image src={UploadImage} alt="" className="cursor-pointer" />
                Upload image
              </button>
            </div>
            <div className="flex items-center justify-between p-4 border-t border-t-[#D9D9D9]">
              <label className="center gap-2">
                <div className="center rounded-full">
                  <input
                    type="checkbox"
                    className="w-[20px] h-[20px] rounded-full"
                  />
                </div>
                Make Private
              </label>
              <div className="flex gap-6">
                <button className="font-normal text-sm text-[#808080] ">
                  Cancel
                </button>
                <button className="center py-[14px] px-[34px] rounded-md bg-[#318C21] text-sm text-white font-normal">
                  Make a public
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDiary;
