import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import UserIcon from "@public/users/headerUserIcon.webp";
import ChangeImage from "@public/icons/userUploadImage.webp";
import GarbageImage from "@public/icons/garbageImage.webp";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import axiosInstance from "@/src/utils/axiosInstance";

const EditDiary = ({ onClose, diary }) => {
  const userData = useSelector((state) => state?.userData?.userData);
  const [selectedImage, setSelectedImage] = useState(null);
  const nameInputRef = useRef();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (diary.name) {
      setValue("name", diary.name);
    }
    if (diary.about) {
      setValue("about", diary.about);
    }
  }, [diary, setValue]);

  const handleEditDiaryImage = () => {
    axiosInstance
      .patch(
        `/diary/image/${diary.id}`,
        { photo: selectedImage },
        {
          contentType: "multipart/form-data",
        }
      )
      .then(() => window.location.reload())
      .catch((error) => console.error(error));
  };

  const handleEditDiary = (data) => {
    console.log(data);
    axiosInstance
      .patch(`/diary/${diary.id}/update`, data, {
        contentType: "multipart/form-data",
      })
      .then(() => window.location.reload())
      .catch((error) => console.error(error));
    if (selectedImage) {
      handleEditDiaryImage();
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <Modal onClose={onClose} className="w-[635px] py-10 px-9 ">
      <div className="border border-[#D9D9D9] rounded">
        <h2 className="py-4 text-center font-semibold text-[#666666] tracking-widest border-b border-b-[#D9D9D9]">
          Edit your diary
        </h2>
        <form
          className="p-4"
          autoComplete="off"
          onSubmit={handleSubmit(handleEditDiary)}
          encType="multipart/form-data"
        >
          <div className="flex gap-4">
            <div>
              <Image src={UserIcon} alt="" width={40} height={40} />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-medium">{userData?.username}</p>
              <div className="flex flex-col gap-1 items-start">
                <input
                  type="text"
                  className="w-[300px] outline-none py-1 placeholder:text-sm"
                  placeholder="Edit the name of your diary"
                  {...register("name", {
                    required: "Diary name is required",
                    ref: (e) => {
                      nameInputRef.current = e;
                    },
                  })}
                />
                <button
                  type="button"
                  className="text-[#808080]"
                  onClick={nameInputRef.current?.focus}
                >
                  Edit the name of your diary
                </button>
              </div>
            </div>
          </div>
          {errors.name && (
            <p className="text-red-500 text-sm ml-[56px]">
              {errors.name.message}
            </p>
          )}
          <p className="mt-4">
            <textarea
              {...register("about")}
              className="w-full outline-none py-1 placeholder:text-sm"
              placeholder="Edit the description of your diary"
            ></textarea>
            <button type="button" className="text-[#808080]">
              Edit description
            </button>
          </p>
          <div className="flex h-[108px] mt-[10px] px-[17px] py-[9px]  items-end justify-between">
            <Image
              src={GarbageImage}
              alt=""
              style={{ width: "auto", height: "auto" }}
              className="cursor-pointer"
            />
            <div className="text-sm text-[#808080] font-normal">
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <div
                className="cursor-pointer center gap-2"
                onClick={handleClick}
              >
                <Image
                  src={ChangeImage}
                  alt="Change Image"
                  className="cursor-pointer"
                />
                Change image
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 border-t border-t-[#D9D9D9]">
            <label className="center gap-2 text-xs font-normal">
              <input
                type="checkbox"
                className="w-[20px] h-[20px] rounded-full border border-[#D1D1D6] appearance-none checked:bg-[#68BB59]"
              />
              Make Private
            </label>
            <div className="flex gap-6">
              <button
                className="font-normal text-sm text-[#808080]"
                onClick={onClose}
              >
                Cancel
              </button>
              <Button
                className="py-[14px] px-[34px] bg-[#318C21] text-sm text-white font-normal"
                type="submit"
              >
                Save changes
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditDiary;
