import { useSelector } from "react-redux";
import axiosInstance from "@/src/utils/axiosInstance";
import Image from "next/image";
import useGetUserPhoto from "@/src/hooks/useGetUserPhoto";
import Button from "@/src/components/ui/Button";
import UploadImage from "@/src/components/ui/UploadImage";
import useUploadImage from "@/src/hooks/useUploadImage";

const Profile = () => {
  const userImage = useGetUserPhoto(96, 96);
  const { selectedImage, handleImageChange } = useUploadImage();
  const userId = useSelector((state) => state?.userData?.userData?.id);

  const handleDeletePhoto = () => {
    axiosInstance
      .delete(`/images/${userId}`)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((error) => console.error(error));
  };

  const handleEditPhoto = () => {
    axiosInstance
      .put(`images/${userId}`, selectedImage, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        window.location.reload();
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="flex justify-center my-5">
        {selectedImage ? (
          <Image src={selectedImage} alt="User Photo" />
        ) : (
          <>{userImage}</>
        )}
      </div>
      <div className="flex justify-center gap-3">
        <Button className="relative text-white text-xs font-semibold bg-[#68BB59] px-4 py-3.5">
          <div className="absolute inset-0 opacity-0 cursor-pointer">
            <UploadImage handleImageChange={handleImageChange} />
          </div>
          Upload New
        </Button>
        <Button
          onClick={handleDeletePhoto}
          className="text-white text-xs font-semibold bg-[#C2C2C2] px-4 py-3.5"
        >
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
        <Button
          onClick={(e) => {
            e.preventDefault();
            handleEditPhoto();
          }}
          className="bg-[#68BB59] w-full font-medium text-white py-4 mt-6"
        >
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
