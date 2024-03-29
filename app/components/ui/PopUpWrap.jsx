import React from "react";
import CloseIcon from "@public/icons/closeIcon.svg";
import Image from "next/image";

const PopUpWrap = ({ onClose, children, className }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div
      className="center z-50 bg-black bg-opacity-40 fixed top-0 left-0 right-0 bottom-0"
      onClick={handleClose}
    >
      <div
        className={`relative bg-white rounded-md ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute z-[100] center w-[41px] h-[41px] top-[-18px] right-[-18px] bg-[#68bb59] rounded-full overflow-hidden"
          onClick={handleClose}
        >
          <Image src={CloseIcon} alt="" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default PopUpWrap;
