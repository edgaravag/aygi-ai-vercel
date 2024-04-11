const ChangePassword = () => {
  return (
    <>
        <h2 className="mt-6 mb-4 font-normal  ">Change your Password</h2>
        <div className="gap-4">
        <div className="relative ">
            <p className="absolute left-4 px-[5px] bg-white text-xs text-[#808080]">
            Password
            </p>
            <input
            type="text"
            className="w-full mt-2 border border-[#808080] px-5 rounded-md h-[54px] text-black text-sm outline-none"
            />
        </div>
        <div className="relative mt-4 ">
            <p className="absolute left-4 px-[5px] bg-white text-xs text-[#808080]">
            New Password
            </p>
            <input
            type="text"
            className="w-full mt-2 border border-[#808080] px-5 rounded-md h-[54px] text-black text-sm outline-none"
            />
        </div>
        <div className="relative mt-4 ">
            <p className="absolute left-4 px-[5px] bg-white text-xs text-[#808080]">
            Confirm New Password
            </p>
            <input
            type="text"
            className="w-full mt-2 border border-[#808080] px-5 rounded-md h-[54px] text-black text-sm outline-none"
            />
        </div>
        <button className="w-full h-[54px] bg-[#68BB59] mt-4 text-white rounded-md">
            Change password
        </button>
        <button>
        <p className="mt-3 text-[#878686]">Forgot password ?</p>

        </button>
    </div>
    </>
 
  );
};

export default ChangePassword;
