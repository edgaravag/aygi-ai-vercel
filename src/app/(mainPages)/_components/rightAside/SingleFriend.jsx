import Link from "next/link";
import Image from "next/image";
import ShowOpenCard from "./ShowOpenCard";

const SingleFriend = ({ friend }) => {
  return (
    <div className="border-b border-[#D9D9D9] px-5 py-3 rounded-lg shadow-[0_3px_8px_rgba(0,0,0,0.24)]">
      <div className="flex gap-4">
        <Link href={"/user"}>
          <Image alt="" src={friend.icon} width={62} height={62} />
        </Link>
        <div className="flex flex-col gap-[5px]">
          <Link href={"/user"} className="font-normal">
            {friend.name + " " + friend.surname}
          </Link>
          <p className="font-normal text-[#808080]">{friend.title}</p>
          <p className="font-normal text-[12px]">{friend.description}</p>
        </div>
      </div>
      <div className="flex justify-end mt-2">
        <ShowOpenCard />
      </div>
    </div>
  );
};

export default SingleFriend;
