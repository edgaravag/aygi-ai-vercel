import Image from "next/image";
import PopUpWrap from "../ui/PopUpWrap";
import Button from "../ui/Button";
import UserImg from "@public/users/profileUserImg.webp";

const EditProfile = ({ setShowEditProfile }) => {
  return (
    <PopUpWrap
      onClose={() => setShowEditProfile(false)}
      className="w-[448px] px-16 py-[20px] "
    >
      <div>
        <p className="font-medium">Settings / Edit Profile</p>
        <div className="center gap-6 mt-[20px]">
          <Image src={UserImg} alt="" width={106} height={106} />
          <div className="flex gap-3">
            <Button className="bg-[#dddddd] py-3.5 px-2.5 text-xs text-white">
              Upload Photo
            </Button>
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
        <Button className="mt-[20px] bg-[#68BB59] py-2.5 px-[26px] text-white text-sm">
          Save Changes
        </Button>
      </div>
    </PopUpWrap>
  );
};

export default EditProfile;
