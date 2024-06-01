import CloseIcon from "@public/icons/closeIcon.svg";
import Image from "next/image";

const Modal = ({ onClose, children, className }) => {
  return (
    <div className="center min-w-[480px] z-[1000] bg-black bg-opacity-40 fixed top-0 left-0 right-0 bottom-0 h-screen overflow-y-auto">
      <div className={`relative bg-white rounded-md mx-5 my-10 max-w-full sm:max-w-[90%] lg:max-w-[800px] ${className}`}>
        <button
          className="absolute z-[1000] center w-[41px] h-[41px] top-[-18px] right-[-18px] bg-[#68bb59] rounded-full overflow-hidden"
          onClick={onClose}
        >
          <Image src={CloseIcon} alt="Close Icon" />
        </button>
        <div className="w-full overflow-y-auto max-h-[75vh]">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal;
