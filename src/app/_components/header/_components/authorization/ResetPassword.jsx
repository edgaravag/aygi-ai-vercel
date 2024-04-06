import Button from "@/src/components/ui/Button";
import PopUpWrap from "@/src/components/ui/PopUpWrap";

const ResetPassword = ({ onClose }) => {
  return (
    <PopUpWrap onClose={onClose} className="w-[448px] center py-16 pb-[294px]">
      <div className="flex flex-col w-full px-16">
        <h2 className="text-xl font-medium">Reset account password</h2>
        <p className="text-sm font-normal mt-1">
          Please, enter your new password
        </p>
        <div className="flex flex-col gap-3 relative mt-6">
          <div>
            <p className="absolute left-4 px-[5px] bg-white text-[#808080] text-xs">
              Password
            </p>
            <input
              type="password"
              className="w-full mt-2 border border-[#808080] px-5 rounded-md h-[54px] text-black text-sm outline-none"
            />
          </div>
          <div>
            <p className="absolute left-4 px-[5px] bg-white text-[#808080] text-xs">
              Confirm password
            </p>
            <input
              type="password"
              className="w-full mt-2 border border-[#808080] px-5 rounded-md h-[54px] text-black text-sm outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-[38px]">
          <Button className="bg-[#68BB59] text-white w-full py-[14px]">
            Reset password
          </Button>
        </div>
      </div>
    </PopUpWrap>
  );
};

export default ResetPassword;
