import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Button from "@/src/components/ui/Button";
import PrivateIcon from "@public/icons/privateIcon.svg";
import GrayEditIcon from "@public/icons/grayEditIcon.svg";
import EditIcon from "@public/icons/editIcon.svg";
import GarbageIcon from "@public/icons/grayGarbageIcon.svg";
import useGetDiaryImage from "@/src/hooks/useGetDiaryImage";
import formatDate from "@/src/utils/formatDate";
const DeleteDiary = dynamic(() =>
  import("@/src/components/modals/DeleteDiary/DeleteDiary")
);
const EditDiary = dynamic(() =>
  import("@/src/components/modals/EditDiary/EditDiary")
);

const SingleDiary = ({ diary }) => {
  const formattedDate = formatDate(diary.createdDate);
  const [showOptions, setShowOptions] = useState(false);
  const [showEditDiary, setShowEditDiary] = useState(false);
  const [showDeleteDiary, setShowDeleteDiary] = useState(false);

  const diaryImage = useGetDiaryImage(diary.id);

  return (
    <>
      <div className="relative w-full max-w-[344px] cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200 active:scale-95">
        <div className="flex justify-between items-center gap-14 pl-3 py-2">
          <div className="flex flex-col">
            <p className="font-medium tracking-wider">{diary.name}</p>
            <p className="text-sm font-normal text-[#808080]">
              {formattedDate}
            </p>
          </div>
          <div className="relative">
            <button
              className="center cursor-pointer w-10 h-10"
              onClick={() => setShowOptions(!showOptions)}
            >
              <Image src={GrayEditIcon} alt="Edit Icon" />
            </button>
            {showOptions && (
              <div className="absolute z-10 right-0 bg-white border border-[#979797] rounded-md py-5 px-2">
                <button
                  className="center w-full flex gap-2 px-4 py-2 text-[#808080] mb-2"
                  onClick={() => setShowEditDiary(true)}
                >
                  <Image src={EditIcon} alt="Edit Icon" />
                  <p className="w-[100px]">Edit Diary</p>
                </button>
                <button
                  className="center w-full flex gap-2 px-4 py-2 text-[#808080]"
                  onClick={() => setShowDeleteDiary(true)}
                >
                  <Image src={GarbageIcon} alt="Delete Icon" />
                  <p className="w-[120px]">Delete Diary</p>
                </button>
              </div>
            )}
          </div>
        </div>
        {diaryImage ? (
          <Image
            src={diaryImage}
            alt="Diary Image"
            loading="eager"
            priority
            width={344}
            height={194}
            className={`w-full h-auto object-cover ${
              diary.isPrivate ? "opacity-50" : ""
            }`}
            style={{ aspectRatio: "16/9" }}
          />
        ) : (
          <div className="w-full max-w-[344px] h-[194px] bg-gray-200 flex items-center justify-center">
            <span>Loading...</span>
          </div>
        )}
        <div className="px-3 py-[10px]">
          <p className="text-sm text-[#808080] font-normal tracking-wider">
            {diary.about}
          </p>
        </div>
        <div className="flex justify-between">
          <Link href={`/mydiary/${diary.id}`}>
            <Button className="py-[10px] px-2 text-[#68BB59] text-sm font-medium tracking-widest underline">
              MORE
            </Button>
          </Link>
          {!diary.public && (
            <div className="flex items-center mt-3 gap-1">
              <p className="text-[#808080] text-sm font-normal">Private</p>
              <Image alt="Private Icon" src={PrivateIcon} />
            </div>
          )}
        </div>
      </div>
      {showEditDiary && (
        <EditDiary onClose={() => setShowEditDiary(false)} diary={diary} />
      )}
      {showDeleteDiary && (
        <DeleteDiary
          onClose={() => setShowDeleteDiary(false)}
          diaryId={diary.id}
        />
      )}
    </>
  );
};

export default SingleDiary;
