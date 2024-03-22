"use client";
import React, { useState } from "react";
import Image from "next/image";
import UserIcon from "../../../public/friendIcon.png";
import EditIcon from "../../../public/editIcon.png";
import InfoIcon from "../../../public/info.png";
import SunIcon from "../../../public/sunIcon.png";
import SunIconCore from "../../../public/sunIconCore.png";
import Calendar from "./Calendar";
import CountriesList from "./CountriesList";
import Info from "./Info";
import Link from "next/link";

const users = [
  {
    icon: UserIcon.src,
    name: "John",
    surname: "Doe",
    title: "Title",
    description: "Lorem Ipsum Lorem Ipsum",
  },
  {
    icon: UserIcon.src,
    name: "John",
    surname: "Doe",
    title: "Title",
    description: "Lorem Ipsum Lorem Ipsum",
  },
  {
    icon: UserIcon.src,
    name: "John",
    surname: "Doe",
    title: "Title",
    description: "Lorem Ipsum Lorem Ipsum",
  },
  {
    icon: UserIcon.src,
    name: "John",
    surname: "Doe",
    title: "Title",
    description: "Lorem Ipsum Lorem Ipsum",
  },
  {
    icon: UserIcon.src,
    name: "John",
    surname: "Doe",
    title: "Title",
    description: "Lorem Ipsum Lorem Ipsum",
  },
];

const RightAside = () => {
  const [showCountries, setShowCountries] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showFriendsPage, setFriendsPage] = useState(false);

  return (
    <aside className="relative bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.10)] min-w-[365px] h-[1360px] px-[41px] py-5">
      <div className="flex justify-between pb-4">
        <div className="flex gap-2">
          <div className="center gap-[7px]">
            <div className="relative">
              <Image src={SunIcon} alt="" />
              <Image
                src={SunIconCore}
                alt=""
                className="absolute top-[5px] right-0 left-1 bottom-0"
              />
            </div>
            <p className="text-lg font-medium">27°C</p>
          </div>
          <p className="text-lg font-normal">Yerevan</p>
        </div>
        <div className="center gap-2 cursor-pointer">
          <div
            className="flex gap-2"
            onClick={() => setShowCountries(!showCountries)}
          >
            <button>
              <Image src={EditIcon} alt="" />
            </button>
            <button className="center font-normal text-[#68BB59]">Edit</button>
          </div>
          <div
            className="relative z-50"
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
          >
            <Image
              src={InfoIcon}
              alt=""
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
      </div>
      {showCountries && <CountriesList setShowCountries={setShowCountries} />}
      {showInfo && <Info />}
      <div className="mt-6">
        <Calendar />
      </div>
      <h2 className="text-lg font-medium mb-6 mt-[38px]">My Friends</h2>
      <div className="flex flex-col gap-4 mt-4">
        {users.map((user) => {
          return (
            <div
              key={Math.random()}
              className="border-b border-[#D9D9D9] px-5 py-3 rounded-lg shadow-[0_3px_8px_rgba(0,0,0,0.24)]"
            >
              <div className="flex gap-4">
                <Link href={"/user"}>
                  <div className="cursor-pointer">
                    <Image alt="" src={user.icon} width={62} height={62} />
                  </div>
                </Link>
                <div className="flex flex-col gap-[5px]">
                  <Link href={"/user"}>
                    <p className="font-normal cursor-pointer">
                      {user.name + " " + user.surname}
                    </p>
                  </Link>
                  <p className="font-normal text-[#808080]">{user.title}</p>
                  <p className="font-normal text-[12px]">{user.description}</p>
                </div>
              </div>
              <div className="flex justify-end mt-2">
                <button className="center bg-[#68BB59] text-white font-normal text-sm px-[15px] py-[1px] rounded-md">
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default RightAside;
