"use client";
import React, { useState } from "react";
import Image from "next/image";
import SearchIcon from '../../../public/searchIcon.png'
import MenuIcon from '../../../public/menuIcon.png'
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky h-auto py-[26px] flex justify-around items-center flex-wrap bg-black w-full gap-x-12 gap-y-5 px-4 2xl:px-[237px] xl:px-32 lg:px-16 lg:justify-between sm:px-14">
      <Link href={'/'} className="cursor-pointer">
        <p className="text-white text-2xl font-bold font-aygiFont">AYGI AI</p>
      </Link>
      <div className="flex gap-2 w-[480px]">
        <input
          type="search"
          className="relative w-full h-[45px] rounded-full text-black pl-[54px] pr-3 text-sm outline-none"
          placeholder="Search any information"
        />
        <div className="absolute center bg-[#68bb59] rounded-full w-[45px] h-[45px] cursor-pointer">
          <Image src={SearchIcon} width={24} height={24} alt="" priority />	
        </div>
      </div>
      <div className="center w-[45px] h-[45px] bg-white rounded-full cursor-pointer">
        <Image src={MenuIcon} width={30} height={30} alt="" />
      </div>
    </header>
  );
};

export default Header;
