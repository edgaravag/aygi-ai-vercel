import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "@/src/utils/axiosInstance";
import UserIcon from "@public/users/user.webp";
import Image from "next/image";

export default function useGetUserPhoto(width, height) {
  const [userImage, setUserImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const userId = useSelector((state) => state?.userData?.userData?.id);

  useEffect(() => {
    if (userId) {
      setIsLoading(true);
      axiosInstance
        .get(`/images/${userId}`, { responseType: "blob" })
        .then((res) => {
          const reader = new FileReader();
          reader.readAsDataURL(res.data);
          reader.onloadend = () => {
            setUserImage(reader.result);
          };
        })
        .finally(() => setIsLoading(false));
    }
  }, [userId]);

  if (isLoading) {
    return null;
  }

  return (
    <Image
      src={userImage ? userImage : UserIcon}
      width={width}
      height={height}
      alt="User Photo"
      className={`rounded-full w-[${width}px] h-[${height}px]`}
    />
  );
}
