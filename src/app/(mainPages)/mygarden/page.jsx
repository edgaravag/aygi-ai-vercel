"use client";
import ShowNewDiary from "./_components/ShowNewDiary";
import SingleDiary from "./_components/SingleDiary";
import PrevAndNextPages from "./_components/PrevAndNextPages";
import DiaryImg from "@public/plants/diaryImg.webp";
import AddNewBusiness from "./_components/AddNewBusiness";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { setUserData } from "@/src/store/features/userDataSlice/userDataSlice";

const diaries = [
  {
    diaryName: "Diary Name",
    creationDate: "05 March",
    img: DiaryImg.src,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    isPrivate: false,
  },
  {
    diaryName: "Diary Name",
    creationDate: "05 March",
    img: DiaryImg.src,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    isPrivate: false,
  },
  {
    diaryName: "Diary Name",
    creationDate: "05 March",
    img: DiaryImg.src,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    isPrivate: true,
  },
  {
    diaryName: "Diary Name",
    creationDate: "06 March",
    img: DiaryImg.src,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    isPrivate: true,
  },
];

const MyGardenComponent = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((data) => {
          dispatch(setUserData(data.data));
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [dispatch]);


  return (
    <>
      <h2 className="text-xl font-semibold">My Garden</h2>
      <AddNewBusiness />
      <ShowNewDiary />
      <div className="center flex-wrap mx-auto gap-4 max-[2166px]:w-[704px] max-[1440px]:w-auto">
        {diaries.map((diary, index) => {
          return <SingleDiary diary={diary} key={index} />;
        })}
      </div>
      <PrevAndNextPages />
    </>
  );
};

export default MyGardenComponent;
