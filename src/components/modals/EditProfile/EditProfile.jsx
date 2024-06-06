import Image from "next/image";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import useGetUserPhoto from "@/src/hooks/useGetUserPhoto";
import axiosInstance from "@/src/utils/axiosInstance";
import { useState } from "react";
import { useSelector } from "react-redux";

const EditProfile = ({ setShowEditProfile }) => {
  const [selectedImage, setSelectedImage] = useState();
  const [imagePreview, setImagePreview] = useState();
  const userImage = useGetUserPhoto(106, 106);
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

  const handleUploadPhoto = () => {
    axiosInstance
      .post(
        "/images/",
        { photo: selectedImage },
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      )
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((error) => console.error(error));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <Modal
      onClose={() => setShowEditProfile(false)}
      className="w-[448px] px-10 py-[20px] "
    >
      <div>
        <p className="font-medium">Settings / Edit Profile</p>
        <div className="center gap-6 mt-[20px]">
          {imagePreview ? (
            <Image
              src={imagePreview}
              width={106}
              height={106}
              alt="User Photo"
              className="rounded-full"
            />
          ) : (
            <>{userImage}</>
          )}
          <div className="flex gap-3">
            <Button
              className="bg-[#dddddd] py-3.5 px-2.5 text-xs text-white"
              onClick={handleClick}
            >
              Upload Photo
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </Button>
            <button
              className="text-sm text-[#808080]"
              onClick={handleDeletePhoto}
            >
              Remove
            </button>
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
              <textarea
                type="text"
                className="w-full h-[131px] py-2 mt-2 border border-[#808080] px-5 rounded-md text-black text-sm outline-none"
              />
            </div>
          </div>
        </div>
      </form>
      <div className="flex justify-end">
        <Button
          className="mt-[20px] bg-[#68BB59] py-2.5 px-[26px] text-white text-sm"
          onClick={handleUploadPhoto}
        >
          Save Changes
        </Button>
      </div>
    </Modal>
  );
};

export default EditProfile;
