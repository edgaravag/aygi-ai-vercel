import React from "react";
import Image from "next/image";
import CloseIcon from "../../../public/closeIcon.svg";
import UserImg from "../../../public/profileUserImg.png";

const ProfileSettings = ({ setOpenSetting }) => {
  return (
    <div
      className="center z-50 bg-black bg-opacity-60 fixed top-0 left-0 right-0 bottom-0"
      onClick={() => setOpenSetting(false)}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <div className="relative w-[448px] bg-white px-16 py-[20px] rounded-md">
          <button
            className="absolute z-[100] center w-[41px] h-[41px] top-[-18px] right-[-18px] bg-[#68bb59] rounded-full"
            onClick={() => setOpenSetting(false)}
          >
            <Image src={CloseIcon} alt="" />
          </button>
          <div>
            <p className="font-medium">Settings / Edit Profile</p>
            <div className="center gap-6 mt-[20px]">
              <Image src={UserImg} alt="" width={106} height={106} />
              <div className="flex gap-3">
                <button className="bg-[#dddddd] rounded-md py-3.5 px-2.5 text-xs text-white">
                  Upload Photo
                </button>
                <button className="text-sm text-[#808080]">Remove</button>
              </div>
            </div>
          </div>
          <form className="mt-4">
            <div className="relative">
              <div className="flex flex-col gap-4">
                <div>
                  <p className="absolute left-4 px-[5px] bg-white text-[#808080] text-xs">
                    Email
                  </p>
                  <input
                    type="email"
                    className="w-full mt-2 border border-[#808080] px-5 rounded-md h-[54px] text-black text-sm outline-none"
                  />
                </div>
                <div>
                  <p className="absolute left-4 px-[5px] bg-white text-[#808080] text-xs">
                    Your name
                  </p>
                  <input
                    type="text"
                    className="w-full mt-2 border border-[#808080] px-5 rounded-md h-[54px] text-black text-sm outline-none"
                  />
                </div>
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
                    Country
                  </p>
                  <input
                    type="text"
                    className="w-full mt-2 border border-[#808080] px-5 rounded-md h-[54px] text-black text-sm outline-none"
                  />
                </div>
                <div>
                  <p className="absolute left-4 px-[5px] bg-white text-[#808080] text-xs">
                    Description
                  </p>
                  <input
                    type="text"
                    className="w-full h-[131px] mt-2 border border-[#808080] px-5 rounded-md text-black text-sm outline-none"
                  />
                </div>
              </div>
            </div>
          </form>
		  <div className="flex justify-end">
			<button className="center mt-[20px] bg-[#68BB59] py-2.5 px-[26px] text-white text-sm rounded-md">
				Save Changes
			</button>
		  </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
