import React from "react";

const PopUpWrap = ({ onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div
      className="center z-50 bg-black bg-opacity-60 fixed top-0 left-0 right-0 bottom-0"
      onClick={handleClose}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default PopUpWrap;

{/* <PopUpWrap>
  <div className="bg-white w-[572px] py-[51px] px-[51px]">
    <CloseButton />
  </div>
</PopUpWrap> */}
