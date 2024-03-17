import React from "react";
import Image from "next/image";
import CloseIcon from "../../../public/closeIcon.svg";
import UserImage from "../../../public/openCardUserImg.png";
import MoreIcon from "../../../public/moreIcon.png";
import OpenCardLemon from "../../../public/OpenCard.png";
import LikeIcon from "../../../public/likeIcon.png";
import CommentIcon from "../../../public/commentIcon.png";
import ShareIcon from "../../../public/shareIcon.png";

const OpenCard = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <div
      className="center z-50 fixed top-0 left-0 right-0 bottom-0"
      onClick={handleClose}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <div className="relative rounded-md bg-white p-[96px]">
          {/* <button
            className="absolute z-[100] center w-[41px] h-[41px] top-[-18px] right-[-18px] bg-[#68bb59] rounded-full"
            onClick={handleClose}
          >
            <Image src={CloseIcon} alt="" />
          </button> */}
          <div className="border-2 border-[#f8f8f8] w-[571px] rounded py-4 px-4">
            <div className="flex justify-between items-center">
              <div className="flex justify-start gap-4">
                <div>
                  <Image src={UserImage} alt="" />
                </div>
                <div>
                  <p>User Name</p>
                  <p className="text-sm font-normal text-[#808080]">
                    User date
                  </p>
                </div>
              </div>
              <button className="w-6 h-[6px]">
                <Image src={MoreIcon} alt="" />
              </button>
            </div>
            <div className="mt-[20px]">
              <p className="text-sm text-[#808080] opacity-70 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<span className="text-sm text-[#4A4949] font-medium opacity-100">Hide text</span></p>
            </div>
            <div className="mt-[20px] text-sm font-normal">
              <h3 className="">Today's Activiy</h3>
            </div>
            <div className="pt-8 pb-6">
              <Image src={OpenCardLemon} alt="" />
            </div>
            <div className="flex justify-between px-4">
              <div className="center gap-[9px]">
                <p className="text-sm font-normal text-[#808080]">15</p>
                <button>
                  <Image src={LikeIcon} alt="" />
                </button>
              </div>
              <div className="flex gap-[20px]">
                <div className="flex gap-[9px]">
                  <p className="text-sm font-normal text-[#808080]">14</p>
                  <button>
                    <Image src={CommentIcon} alt="" />
                  </button>
                </div>
                <div className="flex gap-[9px]">
                  <p className="text-sm font-normal text-[#808080]">7</p>
                  <button>
                    <Image src={ShareIcon} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-7 px-[20px]">
              <div className="center gap-4">
                <div>
                  <Image src={LikeIcon} alt="" />
                </div>
                <button className="font-normal text-[#808080]">Like</button>
              </div>
              <div className="center gap-4">
                <div>
                  <Image src={CommentIcon} alt="" />
                </div>
                <button className="font-normal text-[#808080]">Comment</button>
              </div>
              <div className="center gap-4">
                <div>
                  <Image src={ShareIcon} alt="" />
                </div>
                <button className="font-normal text-[#808080]">Share</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenCard;
