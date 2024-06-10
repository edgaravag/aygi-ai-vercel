import Image from "next/image";
import UserIcon from "@public/users/friendIcon.webp";
import UploadImage from "@public/icons/userUploadImage.webp";

const WriteTheNews = () => {
  return (
    <div className="border border-[#68BB59] rounded-md px-4 py-6 mt-6">
      <div className="flex gap-2">
        <Image 
          src={UserIcon} 
          alt="News Icon" 
          width={62} 
          height={62} 
          sizes="(max-width: 768px) 50px, (max-width: 1200px) 60px, 62px"
          srcSet="/users/friendIcon@1x.webp 1x, /users/friendIcon@2x.webp 2x, /users/friendIcon@3x.webp 3x"
          className="rounded-full"
        />
        <input
          type="text"
          placeholder="write the news"
          className="w-full bg-[#EBEBEB] px-6 py-5 rounded-[32px] outline-none"
        />
      </div>
      <div className="flex justify-end mt-3">
        <button className="self-end flex text-[#808080]">
          <Image 
            src={UploadImage} 
            alt="Upload Image" 
            width={24} 
            height={24} 
            sizes="24px"
            srcSet="/icons/userUploadImage@1x.webp 1x, /icons/userUploadImage@2x.webp 2x, /icons/userUploadImage@3x.webp 3x"
            className="mr-2"
          />
          Upload image
        </button>
      </div>
    </div>
  );
};

export default WriteTheNews;
