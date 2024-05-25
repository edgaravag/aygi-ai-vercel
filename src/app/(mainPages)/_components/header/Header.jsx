import Image from "next/image";
import NotificationIcon from "@public/icons/notification.webp";
import Logo from "./Logo";
import MakeDetections from "./MakeDetections";
import SearchField from "./SearchField";
import UserPhoto from "./UserPhoto";

const Header = () => {
  return (
    <>
      <header className="fixed w-full z-50 flex flex-wrap justify-between bg-black py-5 px-6 gap-x-20 max-[840px]:justify-around">
        <Logo />
        <div className="flex items-center gap-10">
          <MakeDetections />
          <SearchField />
          <button className="center">
            <Image
              src={NotificationIcon}
              alt=""
              width={18}
              height={21}
              style={{ width: "auto", height: "auto" }}
            />
          </button>
          <UserPhoto />
        </div>
      </header>
    </>
  );
};

export default Header;
