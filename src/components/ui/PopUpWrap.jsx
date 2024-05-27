import CloseIcon from "@public/icons/closeIcon.svg";
import Image from "next/image";

const PopUpWrap = ({ onClose, children, className }) => {
  return (
    <div className="center z-[1000] bg-black bg-opacity-40 fixed top-0 left-0 right-0 bottom-0 h-screen">
      <div className="mx-10">
        <div className={`relative bg-white rounded-md ${className}`}>
          <button
            className="absolute z-[1000] center w-[41px] h-[41px] top-[-18px] right-[-18px] bg-[#68bb59] rounded-full overflow-hidden"
            onClick={() => onClose()}
          >
            <Image src={CloseIcon} alt="Close Icon" />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PopUpWrap;
