import Image from "next/image";
import PrivateIcon from "@public/icons/privateIcon.svg";
import Button from "@/src/components/ui/Button";
import ShowEditDiary from "./ShowEditDiary";

const SingleDiary = ({ diary }) => {
  return (
    <div className="relative w-[344px]">
      <div className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200 active:scale-95">
        <div className="flex justify-between items-center gap-14 pl-3 py-2">
          <div className="flex flex-col">
            <p className="font-medium tracking-wider">{diary.diaryName}</p>
            <p className="text-sm font-normal text-[#808080]">
              {diary.creationDate}
            </p>
          </div>
          <ShowEditDiary />
        </div>
        <Image
          src={diary.img}
          alt=""
          loading="eager"
          width={344}
          height={194}
          className={diary.isPrivate ? "opacity-50" : undefined}
        />
        <div className="px-3 py-[10px]">
          <p className="text-sm text-[#808080] font-normal tracking-wider">
            {diary.description}
          </p>
        </div>
        <div className="flex justify-between">
          <Button className="py-[10px] px-2 text-[#68BB59] text-sm font-medium tracking-widest underline">
            MORE
          </Button>
          {diary.isPrivate && (
            <div className="flex items-center mt-3 gap-1">
              <p className="text-[#808080] text-sm font-normal">Private</p>
              <Image alt="" src={PrivateIcon} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleDiary;
