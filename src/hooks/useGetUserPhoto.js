const { useState, useEffect } = require("react");
const { useSelector } = require("react-redux");
const { default: axiosInstance } = require("../utils/axiosInstance");
import UserIcon from "@public/users/user.webp";
import Image from "next/image";

export default function useGetUserPhoto(width, height) {
  const [userImage, setUserImage] = useState(null);
  const userId = useSelector((state) => state?.userData?.userData?.id);

  useEffect(() => {
    if (userId) {
      axiosInstance
        .get(`/images/${userId}`, { responseType: "blob" })
        .then((res) => {
          console.log(res);
          const reader = new FileReader();
          reader.readAsDataURL(res.data);
          reader.onloadend = () => {
            setUserImage(reader.result);
          };
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [userImage]);

  return <Image src={userImage ? userImage : UserIcon} width={width} height={height} alt="User Photo" className="rounded-full" />;
}