import Image from "next/image";
import useGetUserPhoto from "@/src/hooks/useGetUserPhoto";

const UserPhoto = () => {
  const userImage = useGetUserPhoto(52, 52);

  return (
    <div className="cursor-pointer">
      {userImage}
    </div>
  );
};

export default UserPhoto;
