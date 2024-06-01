import Image from "next/image";
import EditIcon from "@public/icons/editIcon.svg";
import GarbageIcon from "@public/icons/grayGarbageIcon.svg";

const ShowMore = () => {
  return (
    <div className="absolute z-10 right-0 top-8 bg-white border border-[#979797] rounded-md py-5 px-2">
      <button className="center w-full flex gap-2 px-4 py-2 text-[#808080] mb-2">
        <Image src={EditIcon} alt="Edit Icon" />
        <p className="w-[100px]">Edit Post</p>
      </button>
      <button className="center w-full flex gap-2 px-4 py-2 text-[#808080]">
        <Image src={GarbageIcon} alt="Edit Icon" />
        <p className="w-[120px]">Delete Post</p>
      </button>
    </div>
  );
};

export default ShowMore;
