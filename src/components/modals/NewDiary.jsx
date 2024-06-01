import Image from "next/image";
import Modal from "../ui/Modal";
import UploadImage from "../ui/UploadImage";
import Button from "../ui/Button";
import GarbageIcon from "@public/icons/garbageImage.webp";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axiosInstance from "@/src/utils/axiosInstance";
import useUploadImage from "@/src/hooks/useUploadImage";

const NewDiary = ({ onClose }) => {
  const [isPublic, setIsPublic] = useState(true);

  // Use the custom hook
  const { selectedImage, imageURL, handleImageChange, resetImage } = useUploadImage();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isPublic: true,
    },
  });

  const handleCreateDiary = (data) => {
    console.log({ ...data, isPublic, selectedImage });

    axiosInstance
      .post('diary/add', { ...data, isPublic, photo: selectedImage }, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      })
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error)
      })
  };

  return (
    <Modal onClose={onClose} className="w-[572px] py-8 px-10">
      <h2 className="font-medium">Create new diary</h2>
      <form autoComplete="off" onSubmit={handleSubmit(handleCreateDiary)}>
        <input
          type="text"
          className="py-3 px-4 w-full bg-[#F6F6F6] mt-8 rounded-md outline-none"
          placeholder="Diary Name"
          {...register("name", {
            required: "Diary name is required",
          })}
        />
        {errors.name && (
          <p className="text-[#C31031] text-xs mt-[5px]">
            {errors.name.message}
          </p>
        )}
        <div className="h-[213px] mt-[14px] py-3 px-[18px] bg-[#F6F6F6] flex flex-col justify-between rounded-md">
          <textarea
            placeholder="Description"
            className="w-full h-full outline-none bg-[#F6F6F6]"
            {...register("about", {
              required: "Description is required",
            })}
          />
          <UploadImage handleImageChange={handleImageChange}/>
        </div>
        {errors.about && (
          <p className="text-[#C31031] text-xs mt-[5px]">
            {errors.about.message}
          </p>
        )}
        {imageURL && (
          <div className="flex items-center justify-end gap-2 mt-2">
            <img
              src={imageURL}
              alt="Selected"
              className="size-20 object-cover rounded-md"
            />
            <Image
              src={GarbageIcon}
              alt="Garbage Icon"
              width={24}
              height={24}
              className="cursor-pointer size-6"
              onClick={resetImage}
            />
          </div>
        )}
        <div className="flex items-center justify-between mt-4">
          <label className="flex items-center gap-2 text-xs font-normal">
            <input
              type="checkbox"
              className="w-[20px] h-[20px] rounded-full border border-[#D1D1D6] appearance-none checked:bg-[#68BB59]"
              checked={!isPublic}
              onChange={() => setIsPublic(!isPublic)}
            />
            Make Private
          </label>
          <div className="flex gap-6">
            <button
              type="button"
              className="font-normal text-sm text-[#808080]"
              onClick={onClose}
            >
              Cancel
            </button>
            <Button
              className="py-[14px] px-[34px] bg-[#68BB59] text-sm text-white font-normal"
              type="submit"
            >
              Create Diary
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default NewDiary;
