import Image from "next/image";
import React from "react";
import CloseIcon from "../public/closeIcon.svg";

const CloseButton = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <button
      className="absolute z-[100] center w-[41px] h-[41px] top-[-18px] right-[-18px] bg-[#68bb59] rounded-full overflow-hidden"
      onClick={handleClose}
    >
      <Image src={CloseIcon} alt="" />
    </button>
  );
};

export default CloseButton;
