import Image from "next/image";
import PopUpWrap from "../ui/PopUpWrap";
import BusinessIcon from "@public/icons/blueBusinessIcon.webp";
import Button from "../ui/Button";

const CreateService = ({ onClose }) => {
  return (
    <PopUpWrap onClose={onClose} className="w-[448px] px-16 py-5">
      <h2 className="font-medium">Create my service/products</h2>
      <div className="flex items-center gap-6 mt-5">
        <Image src={BusinessIcon} alt="Service icon" width={106} height={106} />
        <Button className="bg-[#C2C2C2] px-2.5 py-3.5 text-xs text-white font-semibold">
          Upload Photo
        </Button>
      </div>
      <form className="mt-4 relative">
        <div>
          <p className="absolute left-4 px-[5px] bg-white text-xs text-[#808080]">
            Product’s name
          </p>
          <input
            type="text"
            className="w-full mt-2 border border-[#808080] px-5 rounded-md h-[54px] text-black text-sm outline-none"
          />
        </div>
        <div className="flex gap-4 mt-2.5">
          <div>
            <p className="absolute left-4 px-[5px] bg-white text-xs text-[#808080]">
              Product’s Price
            </p>
            <input
              type="text"
              className="w-full mt-2 border border-[#808080] px-5 rounded-md h-[54px] text-black text-sm outline-none"
            />
          </div>
          <div className="relative">
            <p className="absolute left-4 px-[5px] bg-white text-xs text-[#808080]">
              Currency
            </p>
            <input
              type="text"
              className="w-full mt-2 border border-[#808080] px-5 rounded-md h-[54px] text-black text-sm outline-none"
            />
          </div>
        </div>
        <div className="mt-5">
          <p className="absolute left-4 px-[5px] bg-white text-xs text-[#808080]">
            Product Description
          </p>
          <input
            type="text"
            className="w-full mt-2 border border-[#808080] px-5 rounded-md h-[284px] text-black text-sm outline-none"
          />
        </div>
      </form>
      <div className="flex justify-end">
        <Button className="mt-5 py-2.5 px-[52px] bg-[#68BB59] text-white">
          Publish
        </Button>
      </div>
    </PopUpWrap>
  );
};

export default CreateService;
