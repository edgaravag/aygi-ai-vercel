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
    <aside className="flex flex-col justify-between bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.10)] min-w-[243px] h-[647px] px-6 pb-[25px] py-4">
      <div className="flex flex-col gap-6">
        {leftSideLinks.map((link) => {
          return (
            <Link
              href={link.path}
              key={link.title}
              className="flex items-center gap-6 cursor-pointer py-3"
            >
              <Image src={link.img} alt="" width={24} height={24} />
              <p className="text-black text-sm font-normal tracking-wider">
                {link.title}
              </p>
            </Link>
          );
        })}
      </div>
      <button className="flex items-center gap-6 tracking-widest font-normal text-sm text-[#666666]">
        <Image src={LogoutIcon} alt="" width={24} height={24} />
        Log Out
      </button>
    </aside>
  );
};

export default LeftAside;
