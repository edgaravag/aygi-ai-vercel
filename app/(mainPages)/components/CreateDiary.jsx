import React from 'react'
// import CloseIcon from "../../../public/closeIcon.svg";

export const CreateDiary = ({ onClose }) => {
    const handleClose = () => {
        onClose();
    };

  return (
    <div 
        className='center z-50 bg-black bg-opacity-60 fixed top-0 left-0 right-0 bottom-0'
        onClick={handleClose}
    >
        
    </div>
  )
}
