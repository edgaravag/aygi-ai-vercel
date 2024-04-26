import Image from "next/image";
import HomeIcon from "@public/icons/homeIcon.webp";
import PlantIcon from "@public/icons/feedIcon.webp";
import UserIcon from "@public/icons/user.webp";
import FavoritesIcon from "@public/icons/favorites.webp";
import DetectionsIcon from "@public/icons/detections.webp";
import ChatIcon from "@public/icons/aichat.webp";
import FaqIcon from "@public/icons/faq.webp";
import LogoutIcon from "@public/icons/logout.webp";
import SettingsIcon from "@public/icons/Settings.webp";
import LibraryIcon from "@public/icons/libraryIcon.webp";
import AdminIcon from "@public/icons/adminIcon.webp";
import SingleLink from "./SingleLink";

const leftSideLinks = [
  { img: HomeIcon.src, title: "Home", path: "/mygarden" },
  { img: UserIcon.src, title: "Profile", path: "/profile" },
  { img: PlantIcon.src, title: "Feed", path: "/feed" },
  { img: FavoritesIcon.src, title: "Favorites", path: "/favorites" },
  { img: DetectionsIcon.src, title: "Detections", path: "/detections" },
  { img: ChatIcon.src, title: "AI Chat", path: "/aichat" },
  { img: LibraryIcon.src, title: "Library", path: "/library" },
  { img: FaqIcon.src, title: "FAQ", path: "/faq/questions" },
  { isAdmin: true, img: AdminIcon.src, title: "Admin Panel", path: "" },
  { img: SettingsIcon.src, title: "Settings", path: "/settings" },
];

const LeftAside = ({ path }) => {
  return (
    <aside
      className={`h-fit bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.10)] ${
        path.includes("/faq/questions") || path === "/library"
          ? "min-w-[70px]"
          : "min-w-[243px]"
      } pl-6 pb-[25px] py-4`}
    >
      <div className="flex flex-col gap-3">
        {leftSideLinks.map((link, index) => {
          return <SingleLink link={link} key={index} />;
        })}
      </div>
      <button className="flex items-center mt-20 gap-6 tracking-widest text-sm text-[#666666]">
        <Image src={LogoutIcon} alt="LogOut Icon" width={24} height={24} />
        {path.includes("/faq/questions") || path === "/library" ? null : "Log Out"}
      </button>
    </aside>
  );
};

export default LeftAside;
