import Image from "next/image";
import NotificationIcon from "@public/icons/notification.webp";
import UserIcon from "@public/users/headerUserIcon.webp";
import Logo from "./Logo";
import MakeDetections from "./MakeDetections";
import SearchField from "./SearchField";

const Header = () => {
  return (
    <>
      {/* <header className="w-full py-5 flex justify-around items-center  bg-black gap-x-12 gap-y-5 px-4 2xl:px-[237px] xl:px-32 lg:px-16 lg:justify-between sm:px-14"> */}
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
          <div className="cursor-pointer">
            <Image src={UserIcon} alt="" width={52} height={52} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
