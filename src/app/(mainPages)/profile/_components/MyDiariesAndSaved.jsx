'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from 'next/dynamic';
import ProfileImg1 from "@public/plants/profileImg1.webp";
import ProfileImg2 from "@public/plants/profileImg2.webp";
import ProfileImg3 from "@public/plants/profileImg3.webp";
import ProfileImg4 from "@public/plants/profileImg4.webp";
import ProfileImg5 from "@public/plants/profileImg5.webp";
import ProfileImg6 from "@public/plants/profileImg6.webp";
import MyDiariesAndSavedButtons from "./MyDiariesAndSavedButtons";
import axiosInstance from "@/src/utils/axiosInstance";
const Saved = dynamic(() => import("./Saved"))

const images = [
  ProfileImg1.src,
  ProfileImg2.src,
  ProfileImg3.src,
  ProfileImg4.src,
  ProfileImg5.src,
  ProfileImg6.src,
];

const MyDiariesAndSaved = () => {
  const [myDiaries, setMyDiaries] = useState(true);

  const [diaryImage, setDiaryImage] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [showEditDiary, setShowEditDiary] = useState(false);
  const [showDeleteDiary, setShowDeleteDiary] = useState(false);
console.log(diaryImage);
  useEffect(() => {
    axiosInstance
      .get(`/diary`)
      .then((response) => {
       console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching diary image:", error);
      });
  },);

  return (
    <>
      <div className="flex bg-white w-80 mt-[40px] shadow-lg rounded-md">
        <MyDiariesAndSavedButtons myDiaries={myDiaries} setMyDiaries={setMyDiaries} />
      </div>
      {myDiaries ? (  
        <div className="grid grid-rows-2 grid-cols-3 gap-3 mt-3">
          {images.map((image, index) => {
            return (
              <Image
                key={index}
                src={image}
                alt=""
                loading="eager"
                width={206}
                height={242}
                className="cursor-pointer"
              />
            );
          })}
        </div>
      ) : (
        <Saved />
      )}
    </>
  );
};

export default MyDiariesAndSaved;
