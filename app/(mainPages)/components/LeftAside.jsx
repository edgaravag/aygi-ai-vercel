import Image from "next/image";
import React from "react";
import Link from "next/link";
import UserImage from "../../../public/userIcon.png";
import HomeIcon from "../../../public/homeIcon.png";
import PlantIcon from "../../../public/plant.png";
import UserIcon from "../../../public/user.png";
import FavoritesIcon from "../../../public/favorites.png";
import DetectionsIcon from "../../../public/detections.png";
import ChatIcon from "../../../public/aichat.png";
import FaqIcon from "../../../public/faq.png";
import LogoutIcon from "../../../public/logout.png";


const leftSideLinks = [
  { img: HomeIcon.src, title: "Home", path: "/home" },
  { img: UserIcon.src, title: "Profile", path: "/profile" },
  { img: PlantIcon.src, title: "Feed", path: "/feed" },
  { img: FavoritesIcon.src, title: "Favorites", path: "/favorites" },
  { img: DetectionsIcon.src, title: "Detections", path: "/detections" },
  { img: ChatIcon.src, title: "AI Chat", path: "/aichat" },
  { img: FaqIcon.src, title: "FAQ", path: "/faq" },
];

const LeftAside = () => {
  return (
    <aside className="flex flex-col justify-between bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.10)] w-[280px] h-[750px] px-6 py-5">
      <div>
        <div className="center flex-col gap-3">
          <Image
            src={UserImage}
            alt="User Image"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className="text-black">user.email@gmail.com</p>
        </div>
        <div className="flex flex-col gap-3 mt-7">
          {leftSideLinks.map((link) => {
            return (
              <Link
                href={link.path}
                key={link.title}
                className="flex items-center gap-6 cursor-pointer py-3"
              >
                <Image src={link.img} alt="" width={30} height={30} />
                <p className="text-black font-normal tracking-wider">
                  {link.title}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
      <button className="flex items-center gap-6 tracking-widest font-normal text-sm text-[#666666]">
        <Image src={LogoutIcon} alt="" width={30} height={30} />
        Log Out
      </button>
    </aside>
  );
};

export default LeftAside;
