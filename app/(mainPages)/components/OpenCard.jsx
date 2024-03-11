import React from "react";
import Image from "next/image";
import CloseIcon from "../../../public/closeIcon.svg";
import UserImage from "../../../public/openCardUserImg.png";
import MoreIcon from "../../../public/moreIcon.png";
import OpenCardImg from "../../../public/openCardImg.png";
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
        <div className="relative w-[635px] h-[608px] rounded-md bg-white px-8 py-12">
          <button
            className="absolute z-[100] center w-[41px] h-[41px] top-[-18px] right-[-18px] bg-[#68bb59] rounded-full"
            onClick={handleClose}
          >
            <Image src={CloseIcon} alt="" />
          </button>
          <div className="border-2 border-[#f8f8f8] rounded py-4 px-2">
            <div className="flex justify-between">
              <div className="flex justify-start gap-4">
                <div>
                  <Image src={UserImage} alt="" />
                </div>
                <div>
                  <p>User Name</p>
                  <p className="text-sm font-normal text-[#808080]">
                    User date
                  </p>
                  <p className="text-sm font-normal text-[#808080] mt-1">
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  </p>
                </div>
              </div>
              <button>
                <Image src={MoreIcon} alt="" />
              </button>
            </div>
            <div className="px-2 pt-8 pb-6">
              <Image src={OpenCardImg} alt="" />
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
