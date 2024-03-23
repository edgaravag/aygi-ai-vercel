"use client";
import React, { useState } from "react";
import FavoriteUserIcon from "../../../public/favoriteUser.png";
import Image from "next/image";
import NextUser from "../../../public/nextUser.png";
import ProfileImg1 from "../../../public/profileImg1.png";
import ProfileImg2 from "../../../public/profileImg2.png";
import ProfileImg3 from "../../../public/profileImg3.png";
import ProfileImg4 from "../../../public/profileImg4.png";
import ProfileImg5 from "../../../public/profileImg5.png";
import ProfileImg6 from "../../../public/profileImg6.png";
import Link from "next/link";
import DiaryPage from "../components/DiaryPage";

const favorites = [
  { img: FavoriteUserIcon.src, name: "Name" },
  { img: FavoriteUserIcon.src, name: "Name" },
  { img: FavoriteUserIcon.src, name: "Name" },
  { img: FavoriteUserIcon.src, name: "Name" },
  { img: FavoriteUserIcon.src, name: "Name" },
  { img: FavoriteUserIcon.src, name: "Name" },
  { img: FavoriteUserIcon.src, name: "Name" },
];

const images = [
  ProfileImg1.src,
  ProfileImg2.src,
  ProfileImg3.src,
  ProfileImg4.src,
  ProfileImg5.src,
  ProfileImg6.src,
  ProfileImg1.src,
  ProfileImg2.src,
  ProfileImg3.src,
  ProfileImg4.src,
  ProfileImg5.src,
  ProfileImg6.src,
];
const Favorites = () => {
  const [showDiaryPage, setShowDiaryPage] = useState(false);
  return (
    <>
      <main className="mx-auto py-9 px-[60px] ">
        <h2 className="font-semibold text-xl">My Favorite Users</h2>
        <div className="flex items-center gap-5">
          <div className="mt-6 flex gap-4">
            {favorites.map((favorite, index) => {
              return (
                <Link
                  href={"/user"}
                  className="flex flex-col gap-4 items-center"
                  key={index}
                >
                  <Image alt="" src={favorite.img} width={84} height={84} />
                  <p>{favorite.name}</p>
                </Link>
              );
            })}
          </div>
          <div>
            <Image alt="" src={NextUser} />
          </div>
        </div>
        <h2 className="font-semibold text-xl mt-10">My Favorite Gardens</h2>
        <div className="flex flex-wrap gap-3 w-[642px] mt-6">
          {images.map((image, index) => {
            return (
              <Image
                alt=""
                src={image}
                key={index}
                width={206}
                height={242}
                className="cursor-pointer"
                onClick={() => setShowDiaryPage(true)}
              />
            );
          })}
        </div>
      </main>
      {showDiaryPage && <DiaryPage onClose={() => setShowDiaryPage(false)} />}
    </>
  );
};

export default Favorites;
