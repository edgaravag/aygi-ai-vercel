import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchIcon from "@public/icons/search.webp";
import NotificationIcon from "@public/icons/notification.webp";
import UserIcon from "@public/users/headerUserIcon.webp";
import Button from "../../ui/Button";
import MakeDetection from "../../popups/MakeDetection";

const Header = () => {
  const [showMakeDetection, setShowMakeDetection] = useState(false);
  return (
    <>
      <header className="sticky h-auto py-[26px] flex justify-around items-center flex-wrap bg-black w-full gap-x-12 gap-y-5 px-4 2xl:px-[237px] xl:px-32 lg:px-16 lg:justify-between sm:px-14">
        <div>
          <Link href={"/"} className="cursor-pointer">
            <p className="text-white text-2xl font-bold font-aygiFont">
              AYGI AI
            </p>
          </Link>
        </div>
        <div className="flex gap-10">
          <Button
            className="p-3 text-[#68BB59] text-sm font-normal tracking-widest border border-[#68BB59]"
            onClick={() => setShowMakeDetection(true)}
          >
            Make Detection
          </Button>
          <button className="center gap-3">
            <Image
              src={SearchIcon}
              alt=""
              priority
              width={18}
              height={18}
              style={{ width: "auto", height: "auto" }}
            />
            <input
              type="search"
              className="h-8 rounded-md px-3 outline-none"
              placeholder="Search"
            />
          </button>
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
      {showMakeDetection && <MakeDetection onClose={() => setShowMakeDetection(false)} />}
    </>
  );
};

export default Header;
