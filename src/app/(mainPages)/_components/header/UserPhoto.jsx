import Image from "next/image";
import UserIcon from "@public/users/user.png";
import useGetUserPhoto from "@/src/hooks/useGetUserPhoto";

const UserPhoto = () => {
  const userImage = useGetUserPhoto()
  // console.log(userImage);

  return (
    <div className="cursor-pointer">
      <Image src={userImage ? userImage : UserIcon} alt="User Photo" width={52} height={52} />
    </div>
  );
}

export default UserPhoto;
