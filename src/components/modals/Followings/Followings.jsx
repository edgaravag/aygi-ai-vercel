import Image from "next/image";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import SearchIcon from "@public/icons/graySearchIcon.webp";
import FollowerImg from "@public/users/followerImg.webp";

const followings = [
  {
    img: FollowerImg.src,
    username: "John Doe",
    location: "Yerevan, Armenia",
  },
  {
    img: FollowerImg.src,
    username: "John Doe",
    location: "Yerevan, Armenia",
  },
  {
    img: FollowerImg.src,
    username: "John Doe",
    location: "Yerevan, Armenia",
  },
  {
    img: FollowerImg.src,
    username: "John Doe",
    location: "Yerevan, Armenia",
  },
  {
    img: FollowerImg.src,
    username: "John Doe",
    location: "Yerevan, Armenia",
  },
];

const Followwings = ({ onClose }) => {
  return (
    <Modal onClose={onClose} className="w-[572px] py-[20px]">
      <h2 className="font-normal text-lg text-center pb-4 border-b border-b-[#808080]">
        Followings
      </h2>
      <div className="pt-[20px] px-6">
        <div className="flex items-center px-4 py-2 gap-2 bg-[#EFEFEF] rounded-lg">
          <div>
            <Image src={SearchIcon} alt="" />
          </div>
          <input
            type="search"
            placeholder="Search"
            className="bg-inherit w-full outline-none placeholder:text-[#808080]"
          />
        </div>
        <div className="flex flex-col gap-3 mt-[20px]">
          {followings.map((follower, index) => {
            return (
              <div key={index} className="flex justify-between">
                <div className="flex">
                  <div>
                    <Image src={follower.img} alt="" width={62} height={62} />
                  </div>
                  <div className="flex justify-center flex-col ml-[20px]">
                    <p className="font-normal">{follower.username}</p>
                    <p className="text-sm text-[#808080]">
                      {follower.location}
                    </p>
                  </div>
                </div>

                <Button className="px-2 h-[37px] text-sm font-normal bg-[#E4E2E2] rounded-xl">
                  Following
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};

export default Followwings;
