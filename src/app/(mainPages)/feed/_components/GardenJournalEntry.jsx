'use client'
import { useState } from "react";
import Image from "next/image";
import BusinessIcon from "@public/icons/blueBusinessIcon.webp";
import ChooseDiary from "./ChooseDiary";
import ChooseActivities from "./ChooseActivities";
import UploadImage from "@/src/components/ui/UploadImage";
import axiosInstance from "@/src/utils/axiosInstance";
import useUploadImage from "@/src/hooks/useUploadImage";

const WriteTheNews = () => {
  const [diaryId, setDiaryId] = useState(null)
  const [selectedActivities, setSelectedActivities] = useState([])
  const [about, setAbout] = useState('')
  const { selectedImage, handleImageChange } = useUploadImage();

  const handlePostCreate = () => {
    const data = { diaryId, activeWorksList: selectedActivities, image: selectedImage, about }
    axiosInstance
      .post("/post/create", data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      })
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // onKeyDown={handleKeyPress}

  return (
    <div
      className="w-full border border-[#68BB59] rounded-md px-4 py-6 mt-6"
      onKeyDown={handlePostCreate}
    >
      <div className="flex gap-2">
        <Image
          src={BusinessIcon}
          alt="News Icon"
          width={62}
          height={62}
          className="h-[62px] w-[62px]"
          priority
        />
        <input
          type="text"
          placeholder="write the news"
          className="w-full bg-[#EBEBEB] px-6 py-5 rounded-[32px] outline-none"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
      </div>
      <div className="flex justify-between mt-3">
        <ChooseDiary setDiaryId={setDiaryId} />
        <ChooseActivities
          setSelectedActivities={setSelectedActivities}
          selectedActivities={selectedActivities}
        />
        <UploadImage handleImageChange={handleImageChange} />
      </div>
    </div>
  );
};

export default WriteTheNews;
