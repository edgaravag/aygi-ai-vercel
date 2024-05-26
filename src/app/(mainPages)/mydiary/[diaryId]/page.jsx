'use client'
import Image from "next/image";
import DiaryImage from "@public/plants/diaryPageImage.webp";
import UserImage from "@public/users/UserImageWithoutImage.webp";
import ShowEditDiary from "./_components/ShowEditDiary";
import MakePrivate from "./_components/MakePrivate";
import GardenJournalEntry from "./_components/GardenJournalEntry";
import SingleComment from "./_components/SingleComment";
import { useEffect, useState } from "react";
import axiosInstance from "@/src/utils/axiosInstance";
import useGetDiaryImage from "@/src/hooks/useGetDiaryImage";

const posts = [
  {
    img: UserImage.src,
    postDate: "3 days ago",
    title: "My Favorite plants",
    comment:
      "Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsm",
  },
  {
    img: UserImage.src,
    postDate: "3 days ago",
    title: "My Favorite plants",
    comment:
      "Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsm",
  },
  {
    img: UserImage.src,
    postDate: "3 days ago",
    title: "My Favorite plants",
    comment:
      "Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsm",
  },
];

const DiaryPage = ({ params }) => {
  const [diary, setDiary] = useState(null)

  useEffect(() => {
    axiosInstance
      .get(`/diary/${params.diaryId}`)
      .then((response) => {
        setDiary(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [params.diaryId]);

  const diaryImage = useGetDiaryImage(params.diaryId)
  // console.log(diaryImage);

  return (
    <>
      <div className="bg-[#f7f7f7] rounded-md">
        <div className="w-[688px] mx-auto">
          <div className="flex items-center justify-between gap-5">
            <h2 className="font-semibold tracking-widest">
              {diary?.name}
            </h2>
            <div className="flex gap-5">
              <ShowEditDiary />
              <MakePrivate />
            </div>
          </div>
          <div>
            <p className="text-[#808080] leading-[22px] text-justify mt-4">
              {diary?.about}
            </p>
          </div>
          <div className="mt-4">
            <Image src={diaryImage ? diaryImage : DiaryImage} width={688} height={167} alt="Diary Image" className="w-full" />
          </div>
          <div className="w-[570px] mx-auto my-5">
            <GardenJournalEntry />
          </div>
          <div className="flex flex-col gap-6">
            {posts.map((post, index) => {
              return (
                <SingleComment post={post} key={index} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DiaryPage;
