import Image from "next/image";
import UserImage from "@public/users/headerUserIcon.webp";
import Button from "@/src/components/ui/Button";
const Profile = () => {
  return (
    <>
      <Image
        src={UserImage}
        alt="User Image"
        width={96}
        height={96}
        className="mx-auto mt-6"
      />
      <div className="flex justify-center gap-3 mt-4">
        <Button className="text-white text-xs font-semibold bg-[#68BB59] px-4 py-3.5">
          Upload New
        </Button>
        <Button className="text-white text-xs font-semibold bg-[#C2C2C2] px-4 py-3.5">
          Delete Avatar
        </Button>
      </div>
      <h2 className="mt-5">Edit your name,country</h2>
      <form className="mt-4">
        <div className="relative">
          <p className="absolute left-4 px-[5px] bg-white text-xs text-[#808080]">
            Username
          </p>
          <input
            type="text"
            className="w-full mt-2 border border-[#808080] px-5 rounded-md h-[54px] text-black text-sm outline-none"
          />
        </div>
        <div className="relative mt-4">
          <p className="absolute left-4 px-[5px] bg-white text-xs text-[#808080]">
            Country
          </p>
          <input
            type="text"
            className="w-full mt-2 border border-[#808080] px-5 rounded-md h-[54px] text-black text-sm outline-none"
          />
        </div>
        <Button className="bg-[#68BB59] w-full font-medium text-white py-4 mt-6">
          Save changes
        </Button>
      </form>
      <button className="text-[#68BB59] mt-3">My Blacklist</button>
      <p className="flex justify-center gap-1 text-xs mt-12">
        You Can 
        <button className="underline text-[#979797]">
          Delete Your Account
        </button>
      </p>
    </>
  );
};

export default Profile;
