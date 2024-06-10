import Image from "next/image";
import Modal from "../../ui/Modal";
import UserImage from "@public/users/UserImageWithoutImage.webp";
import OpenCardLemon from "@public/plants/OpenCard.webp";
import MoreIcon from "@public/icons/moreIcon.webp";
import LikeIcon from "@public/icons/likeIcon.webp";
import CommentIcon from "@public/icons/commentIcon.webp";
import ShareIcon from "@public/icons/shareIcon.webp";
import SunIcon from "@public/icons/sunIcon.webp";
import SunIconCore from "@public/icons/sunIconCore.webp";

const activities = [
  { title: "Flower deadheading", color: "#E4FEDF" },
  { title: "Flower deadheading", color: "#E4FEDF" },
  { title: "Flower deadheading", color: "#E4FEDF" },
  { title: "Weed Control", color: "#FFF5CD" },
  { title: "Leaf Raking", color: "#FFF5CD" },
];

const OpenCard = ({ onClose }) => {
  return (
    <Modal onClose={onClose} className="py-8 px-10">
      <div className="border-2 border-[#f8f8f8] w-[571px] rounded py-4 px-4">
        <div className="flex justify-between ">
          <div className="flex justify-start gap-4">
            <div>
              <Image src={UserImage} alt="" />
            </div>
            <div>
              <p>User Name</p>
              <p className="text-sm font-normal text-[#808080]">User date</p>
            </div>
          </div>
          <button className="w-6 h-[6px]">
            <Image src={MoreIcon} alt="" />
          </button>
        </div>
        <div className="mt-[20px]">
          <p className="text-sm text-[#808080] opacity-70 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            <span className="text-sm text-[#4a4949] font-medium opacity-100">
              Hide text
            </span>
          </p>
        </div>
        <div className="my-[20px]">
          <h3 className="text-sm font-normal">Today's Activity</h3>
          <div className="flex flex-wrap gap-3 mt-3">
            {activities.map((activity, index) => {
              return (
                <div
                  key={index}
                  className={`py-2.5 px-3 bg-[#E4FEDF] rounded-3xl`}
                >
                  <p className="text-xs font-normal text-[#4A4949]">
                    {activity.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="center gap-[7px]">
            <div className="relative">
              <Image src={SunIcon} alt="" />
              <Image
                src={SunIconCore}
                alt=""
                className="absolute top-[5px] right-0 left-1 bottom-0"
              />
            </div>
            <p className="text-sm font-medium">27°C</p>
          </div>
          <p className="text-sm font-normal">Yerevan</p>
        </div>
        <div className="pt-3 pb-6">
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
          <div className="center gap-4 cursor-pointer">
            <div>
              <Image src={LikeIcon} alt="" />
            </div>
            <button className="font-normal text-[#808080]">Like</button>
          </div>
          <div className="center gap-4 cursor-pointer">
            <div>
              <Image src={CommentIcon} alt="" />
            </div>
            <button className="font-normal text-[#808080]">Comment</button>
          </div>
          <div className="center gap-4 cursor-pointer">
            <div>
              <Image src={ShareIcon} alt="" />
            </div>
            <button className="font-normal text-[#808080]">Share</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default OpenCard;
