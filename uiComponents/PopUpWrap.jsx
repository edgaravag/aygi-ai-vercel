import React from "react";
import CloseButton from "./CloseButton";

const PopUpWrap = ({ onClose, children, className }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div
      className="center z-50 bg-black bg-opacity-60 fixed top-0 left-0 right-0 bottom-0"
      onClick={handleClose}
    >
      <div
        className={`relative bg-white rounded-md ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClose={handleClose} />
        {children}
      </div>
    </div>
  );
};

export default PopUpWrap;
