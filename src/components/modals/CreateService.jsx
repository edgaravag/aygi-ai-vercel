import { useState } from "react";
import Image from "next/image";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import BusinessIcon from "@public/icons/blueBusinessIcon.webp";
import ArrowIcon from "@public/icons/arrowDown.webp";

const CreateService = ({ onClose }) => {
  const [showCurrency, setShowCurrency] = useState(false);

  return (
    <Modal onClose={onClose} className="w-[448px] px-10 py-5">
      <h2 className="font-medium">Create my service/products</h2>
      <div className="flex items-center gap-6 mt-5">
        <Image src={BusinessIcon} alt="Service icon" width={106} height={106} priority />
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
              disabled={true}
            />
            <div
              className="absolute center size-[54px] right-0 top-2 cursor-pointer"
              onClick={() => setShowCurrency(!showCurrency)}
            >
              <Image src={ArrowIcon} alt="Arrow Down Icon" />
            </div>
            {showCurrency && (
              <div className="absolute bg-white mt-2.5 w-full border border-[#68BB59] rounded-sm">
                <div className="flex items-center pl-4 py-2 text-xs cursor-pointer hover:bg-[#E5F7E2]">
                  <span className="font-bold text-lg mr-4">֏</span>AMD
                </div>
                <div className="flex items-center pl-4 py-2 text-xs cursor-pointer hover:bg-[#E5F7E2]">
                  <span className="font-bold text-lg mr-4">$</span>USD
                </div>
                <div className="flex items-center pl-4 py-2 text-xs cursor-pointer hover:bg-[#E5F7E2]">
                  <span className="font-bold text-lg mr-4">Є</span>EUR
                </div>
                <div className="flex items-center pl-4 py-2 text-xs cursor-pointer hover:bg-[#E5F7E2]">
                  <span className="font-bold text-lg mr-4">£</span>GBP
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-5">
          <p className="absolute left-4 px-[5px] bg-white text-xs text-[#808080]">
            Product Description
          </p>
          <textarea
            type="text"
            className="w-full py-3 mt-2 border border-[#808080] px-5 rounded-md h-[284px] text-black text-sm outline-none"
          />
        </div>
      </form>
      <div className="flex justify-end">
        <Button className="mt-5 py-2.5 px-[52px] bg-[#68BB59] text-white">
          Publish
        </Button>
      </div>
    </Modal>
  );
};

export default CreateService;
