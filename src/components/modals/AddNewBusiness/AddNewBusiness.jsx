import Image from "next/image";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import BusinessIcon from "@public/icons/blueBusinessIcon.webp";

const AddNewBusiness = ({ onClose }) => {
  return (
    <Modal onClose={onClose} className="px-10 py-5">
      <h2 className="font-medium">Create my business page</h2>
      <div className="mt-5 flex items-center gap-6">
        <Image
          src={BusinessIcon}
          alt="Business Icon"
          width={106}
          height={106}
          priority
        />
        <Button className="text-white text-xs font-semibold px-2.5 py-3.5 bg-[#C2C2C2]">
          Upload Photo
        </Button>
      </div>
      <form className="relative mt-4">
        <div>
          <p className="absolute left-4 px-[5px] bg-white text-xs text-[#808080]">
            Product’s name
          </p>
          <input
            type="text"
            className="w-[320px] mt-2 border border-[#808080] px-5 rounded-md h-[54px] text-black text-sm outline-none"
          />
        </div>
        <div className="mt-5">
          <p className="absolute left-4 px-[5px] bg-white text-xs text-[#808080]">
            About my business
          </p>
          <textarea
            type="text"
            className="w-[320px] py-3 h-[355px] mt-2 border border-[#808080] px-5 rounded-md text-black text-sm outline-none"
          />
        </div>
      </form>
    </Modal>
  );
};

export default AddNewBusiness;
