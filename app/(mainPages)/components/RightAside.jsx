"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import UserIcon from "../../../public/friendIcon.png";
import Image from "next/image";

const Calendar = dynamic(() => import("react-calendar"), { ssr: false });
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
  const [value, onChange] = useState(new Date());
  return (
    <aside className="bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.10)] w-[365px] h-[1360px] px-4 py-5">
      <div className="flex flex-col gap-2">
        <h2 className="font-medium">Calendar</h2>
        <Calendar onChange={onChange} value={value} />
      </div>
      <h2 className="text-lg font-medium">My Friends</h2>
      <div className="flex flex-col gap-4 mt-4">
        {users.map((user) => {
          return (
            <div key={Math.random()} className="border-b border-[#D9D9D9] px-5 pb-3">
              <div className="flex gap-4">
                <div>
                  <Image alt="" src={user.icon} width={62} height={62} />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="font-normal">
                    {user.name + " " + user.surname}
                  </p>
                  <p className="font-normal text-[#808080]">{user.title}</p>
                  <p className="font-normal text-[12px]">{user.description}</p>
                </div>
              </div>
              <div className="flex justify-end mt-2">
                <button className="center  bg-[#68BB59] text-white font-normal text-sm px-[15px] py-[1px] rounded-md">
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
