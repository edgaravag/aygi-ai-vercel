import Image from "next/image";
import PopUpWrap from "../ui/PopUpWrap";
import Button from "../ui/Button";
import UploadImage from "@public/icons/userUploadImage.webp";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axiosInstance from "@/src/utils/axiosInstance";

const NewDiary = ({ onClose }) => {
  const [isPublic, setIsPublic] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      // setImageURL(URL.createObjectURL(file));
    }
  };

  const handleClick = () => {
    document.getElementById("fileInput").click();
  };

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
      .then((response) => console.log(response))
  };

  return (
    <PopUpWrap onClose={onClose} className="w-[572px] py-8 px-12">
      <h2 className="font-medium">Create new diary</h2>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(handleCreateDiary)}
      >
        <input
          type="text"
          className="py-3 px-4 w-full bg-[#F6F6F6]  mt-8 rounded-md outline-none"
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
          <div className="cursor-pointer self-end flex text-[#808080]" onClick={handleClick}>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            <Image src={UploadImage} alt="" className="mr-2" />
            Upload image
          </div>
        </div>
        {errors.about && (
          <p className="text-[#C31031] text-xs mt-[5px]">
            {errors.about.message}
          </p>
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
    </PopUpWrap>
  );
};

export default NewDiary;
