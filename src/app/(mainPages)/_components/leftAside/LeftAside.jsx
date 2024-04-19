import Image from "next/image";
import HomeIcon from "@public/icons/homeIcon.webp";
import PlantIcon from "@public/icons/feedIcon.webp";
import UserIcon from "@public/icons/user.webp";
import FavoritesIcon from "@public/icons/favorites.webp";
import DetectionsIcon from "@public/icons/detections.webp";
import ChatIcon from "@public/icons/aichat.webp";
import FaqIcon from "@public/icons/faq.webp";
import LogoutIcon from "@public/icons/logout.webp";
import SingleLink from "./SingleLink";

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

  return (
    <aside className="flex flex-col justify-between bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.10)] min-w-[243px] h-[647px] pl-6 pb-[25px] py-4">
      <div className="flex flex-col gap-6">
        {leftSideLinks.map((link, index) => {
          return (
            <SingleLink link={link} key={index} />
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
