import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Button from "@/src/components/ui/Button";
import axiosInstance from "@/src/utils/axiosInstance";
import PrivateIcon from "@public/icons/privateIcon.svg";
import EditIcon from "@public/icons/grayEditIcon.svg";
const EditDiary = dynamic(() => import("@/src/components/popups/EditDiary"));

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const SingleDiary = ({ diary }) => {
  const [diaryImage, setDiaryImage] = useState(null);
  const formattedDate = formatDate(diary.createdDate);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    axiosInstance
      .get(`diary/image/${diary.id}`, { responseType: 'blob' })
      .then((response) => {
        const reader = new FileReader();
        reader.readAsDataURL(response.data);
        reader.onloadend = () => {
          setDiaryImage(reader.result);
        };
      })
      .catch((error) => {
        console.error("Error fetching diary image:", error);
      });
  }, [diary.id]);

  return (
    <>
      <div className="relative w-[344px] cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200 active:scale-95">
        <div className="flex justify-between items-center gap-14 pl-3 py-2">
          <div className="flex flex-col">
            <p className="font-medium tracking-wider">{diary.name}</p>
            <p className="text-sm font-normal text-[#808080]">
              {formattedDate}
            </p>
          </div>
          <button
            className="center cursor-pointer w-10 h-10"
            onClick={() => setShowOptions(true)}
          >
            <Image src={EditIcon} alt="Edit Icon" />
          </button>
          {showOptions && (
            <div>
              
            </div>
          )}
        </div>
        {diaryImage ? (
          <Image
            src={diaryImage}
            alt="Diary Image"
            loading="eager"
            priority
            width={344}
            height={194}
            className={`w-auto h-auto ${diary.isPrivate ? "opacity-50" : ""}`}
          />
        ) : (
          <div className="w-[344px] h-[194px] bg-gray-200 flex items-center justify-center">
            <span>Loading...</span>
          </div>
        )}
        <div className="px-3 py-[10px]">
          <p className="text-sm text-[#808080] font-normal tracking-wider">
            {diary.about}
          </p>
        </div>
        <div className="flex justify-between">
          <Link href={'/mydiary'}>
            <Button className="py-[10px] px-2 text-[#68BB59] text-sm font-medium tracking-widest underline">
              MORE
            </Button>
          </Link>
          {diary.public && (
            <div className="flex items-center mt-3 gap-1">
              <p className="text-[#808080] text-sm font-normal">Private</p>
              <Image alt="Private Icon" src={PrivateIcon} />
            </div>
          )}
        </div>
      </div>
      {/* {showOptions && <EditDiary onClose={() => setShowEditDiary(false)} diary={diary} />} */}
    </>
  );
};

export default SingleDiary;
