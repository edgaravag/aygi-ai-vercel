'use client'
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HomeIcon from "@public/icons/homeIcon.png";
import PlantIcon from "@public/icons/plant.png";
import UserIcon from "@public/icons/user.png";
import FavoritesIcon from "@public/icons/favorites.png";
import DetectionsIcon from "@public/icons/detections.png";
import ChatIcon from "@public/icons/aichat.png";
import FaqIcon from "@public/icons/faq.png";
import LogoutIcon from "@public/icons/logout.png";

const leftSideLinks = [
  { img: HomeIcon.src, hoverImg: "", title: "Home", path: "/mygarden" },
  { img: UserIcon.src, hoverImg: "", title: "Profile", path: "/profile" },
  { img: PlantIcon.src, hoverImg: "", title: "Feed", path: "/feed" },
  { img: FavoritesIcon.src, hoverImg: "", title: "Favorites", path: "/favorites" },
  { img: DetectionsIcon.src, hoverImg: "", title: "Detections", path: "/detections" },
  { img: ChatIcon.src, hoverImg: "", title: "AI Chat", path: "/aichat" },
  { img: FaqIcon.src, hoverImg: "", title: "FAQ", path: "/faq" },
];

const LeftAside = () => {
  const router = usePathname();

  return (
    <aside className="flex flex-col justify-between bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.10)] min-w-[243px] h-[647px] pl-6 pb-[25px] py-4">
      <div className="flex flex-col gap-6">
        {leftSideLinks.map((link, index) => {
          const isActive = router === link.path;
          return (
            <Link href={link.path} key={index} className={`flex items-center gap-6 cursor-pointer py-3 ${isActive && "border-r-4 border-r-[#68bb59]"}`}>
                <Image src={link.img} alt="" width={24} height={24} />
                <p className={`text-black text-sm tracking-wider hover:font-semibold ${isActive ? "font-semibold" : "font-normal"}`}>{link.title}</p>
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
