import Modal from "@/src/components/ui/Modal";
import { useState } from "react";
import axios from "axios";
import Button from "@/src/components/ui/Button";

const ConfirmCode = ({ onClose, showEmailValidation, setShowSignIn }) => {
  const [code, setCode] = useState(null);
  const [message, setMessage] = useState("");
  const [isSuccessfullyConfirmed, setIsSuccessfullyConfirmed] = useState(false);

  const handleCompareCode = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/activate?code=${code}`)
      .then((data) => {
        // console.log(data)
        setMessage(data.data.message);
        setIsSuccessfullyConfirmed(true);
        onClose();
        setShowSignIn(true)
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setMessage(error.response.data.message);
      });
  };

  return (
    <>
      {!showEmailValidation && !isSuccessfullyConfirmed && (
        <Modal
          onClose={onClose}
          className="w-[448px] pt-[20px] pb-[40px] px-14"
        >
          <h2 className="text-xl font-medium text-center mt-4">
            Write your activation code
          </h2>
          <div className="relative mt-7">
            <p
              className={`absolute left-4 px-[5px] bg-white text-[#808080] text-xs`}
            >
              Activation code
            </p>
            <input
              type="number"
              className={`w-full mt-2 border border-[#808080] px-5 rounded-md h-[54px] text-black text-sm outline-none`}
              onChange={(e) => setCode(e.target.value)}
            />
            {message && <p className="mt-2">{message}</p>}
            <Button
              className="w-full mt-6 h-[54px] text-white bg-[#68bb59] font-medium"
              onClick={handleCompareCode}
              disabled={isSuccessfullyConfirmed}
            >
              Confirm
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ConfirmCode;
