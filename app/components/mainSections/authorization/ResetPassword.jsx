import React from "react";

const ResetPassword = () => {
  return (
    <div className="absolute z-50 top-0 left-0 right-0 bottom-0 center bg-white py-16 pb-[294px] rounded-md">
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
          <button className="center bg-[#68BB59] text-white w-full py-[14px] rounded-md">
            Reset password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
