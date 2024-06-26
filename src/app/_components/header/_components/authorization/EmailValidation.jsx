import Image from "next/image";
import Modal from "@/src/components/ui/Modal";
import Button from "@/src/components/ui/Button";
import ValidationIcon from "@public/icons/emailValidation.webp";

const EmailValidation = ({ onClose, setShowConfirmEmail }) => {
  return (
    <Modal
      onClose={onClose}
      className="w-[448px] center pt-[66px] pb-[235px]"
    >
      <div className="flex flex-col items-center w-full px-16">
        <Image src={ValidationIcon} alt="" />
        <h2 className="text-xl font-medium text-center mt-4">
          Email validation panding
        </h2>
        <p className="text-sm font-normal text-center leading-[21px] mt-1 w-[332px]">
          We have sent a link to your email, please follow the link and
          confirm your registration by email
        </p>
        <div className="flex flex-col w-full gap-[14px] mt-16">
          <Button
            className="bg-[#68BB59] text-white w-full py-[14px]"
            onClick={() => {
              onClose()
              setShowConfirmEmail(true)
            }}
          >
            Confirm registration
          </Button>
          <Button className="text-[#68BB59] text-sm font-normal w-full">
            Resend link again
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EmailValidation;
