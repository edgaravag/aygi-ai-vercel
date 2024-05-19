import PopUpWrap from "@/src/components/ui/PopUpWrap";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@/src/components/ui/Button";

const ConfirmEmail = ({ onClose, showEmailValidation }) => {
  const [code, setCode] = useState(null);
  const [message, setMessage] = useState("");

  const handleCompareCode = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/activate?code=${code}`)
      .then((data) => {
        setMessage(data.data.message)
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  return (
    <>
      {!showEmailValidation && (
        <PopUpWrap
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
            <Button
              className="w-full mt-6 h-[54px] text-white bg-[#68bb59] font-medium"
              onClick={handleCompareCode}
            >
              Confirm
            </Button>
            {message && <p className="mt-2">{message}</p>}
          </div>
        </PopUpWrap>
      )}
    </>
  );
};

export default ConfirmEmail;
