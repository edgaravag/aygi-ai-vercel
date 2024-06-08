"use client";
import ShowNewDiary from "./_components/ShowNewDiary";
import SingleDiary from "./_components/SingleDiary";
import PrevAndNextPages from "./_components/PrevAndNextPages";
import AddNewBusiness from "./_components/AddNewBusiness";
import { useEffect, useState } from "react";
// import { useDispatch } from 'react-redux';
// import { setUserData } from "@/src/store/features/userDataSlice/userDataSlice";
import axiosInstance from "@/src/utils/axiosInstance";
import Image from "next/image";
import DiaryImage from "@public/icons/diary.svg"
const MyGardenComponent = () => {
  const [diaries, setDiaries] = useState([])
  // console.log(diaries);

  useEffect(() => {
    axiosInstance
      .get('/diary')
      .then((response) => {
        setDiaries(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h2 className="text-xl font-semibold">My Garden</h2>
      <AddNewBusiness />
      <ShowNewDiary />
      <div className="center flex-wrap mx-auto gap-4 max-[2166px]:w-[704px] max-[1440px]:w-auto">
        {diaries.length > 0 ? (
          diaries.map((diary, index) => {
            return <SingleDiary diary={diary} key={index} />;
          })
        ) : (
          <div><Image alt="No diary" src={DiaryImage} width={600} height={500} /></div>
        )}

      </div>
      <PrevAndNextPages />
    </>
  );
};

export default MyGardenComponent;
