import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import PopUpWrap from "../ui/PopUpWrap";
import Button from "../ui/Button";
import UserIcon from "@public/users/headerUserIcon.webp";
import ArrowDown from "@public/icons/arrowDown.webp";
import GreenPlusIcon from "@public/icons/greenPlusIcon.webp";
import UploadImage from "@public/icons/userUploadImage.webp";

const diaryNames = [
  "Diary name 1",
  "Diary name 2",
  "Diary name 3",
  "Diary name 4",
];

const activities = [
  "Soil fertilizing",
  "Flower deadheading",
  "Watering",
  "Bed weeding",
  "Trimming/pruning",
  "Adding plants",
  "Bed mulching",
  "Fruit harvest",
  "Plant transplanting",
  "Pest control",
  "Leaf raking",
  "Weed control",
];

const AddNewPost = ({ onClose }) => {
  const [showChooseDiary, setShowChooseDiary] = useState(false);
  const [showTodaysActivities, setShowTodaysActivities] = useState(false);
  const [selectedActivities, setSelectedActivities] = useState([]);

  const router = usePathname();

  const toggleActivity = (activity) => {
    if (selectedActivities.includes(activity)) {
      setSelectedActivities(
        selectedActivities.filter((item) => item !== activity)
      );
    } else {
      if (selectedActivities.length < 6) {
        setSelectedActivities([...selectedActivities, activity]);
      }
    }
  };

  return (
    <PopUpWrap onClose={onClose} className="w-[572px] py-8 px-12">
      <div className="flex items-center gap-4">
        <Image alt="" src={UserIcon} width={40} />
        <p>User name</p>
      </div>
      <div className="flex justify-between gap-4 mt-3">
        {router !== "/mygarden" && (
          <div className="w-full relative">
            <div
              className={`flex items-center justify-between text-sm text-[#808080] cursor-pointer py-1.5 pl-4 pr-1 rounded-md border border-[#68BB59] ${
                showChooseDiary && "rounded-b-none"
              }`}
              onClick={() => setShowChooseDiary(!showChooseDiary)}
            >
              Choose Diary
              <div className="center size-6">
                <Image src={ArrowDown} alt="" className="cursor-pointer" />
              </div>
            </div>
            {showChooseDiary && (
              <div className="absolute w-full top-[37px] z-10 pb-1 bg-white border-b border-x border-[#68BB59] rounded-b-md">
                <div className="bg-[#E5F7E2]">
                  <Button className="w-full justify-between py-1.5 pl-4 pr-1 text-sm text-[#68BB59]">
                    Add New Diary
                    <div className="center size-[20px]">
                      <Image alt="" src={GreenPlusIcon} />
                    </div>
                  </Button>
                </div>
                {diaryNames.map((name) => {
                  return (
                    <div className="py-1.5 px-4 text-sm text-[#808080]">
                      {name}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
        <div
          className={`${
            router === "/mygarden" ? "w-[230px]" : "w-full"
          } relative`}
        >
          <div
            className={`flex items-center justify-between text-sm text-[#808080] cursor-pointer py-1.5 pl-4 pr-1 rounded-md border border-[#68BB59] ${
              showTodaysActivities && "rounded-b-none"
            }`}
            onClick={() => setShowTodaysActivities(!showTodaysActivities)}
          >
            Today’s Activities
            <div className="center size-6">
              <Image src={ArrowDown} alt="" className="cursor-pointer" />
            </div>
          </div>
          {showTodaysActivities && (
            <div className="absolute flex flex-col gap-3 w-full top-[37px] z-10 pb-1 bg-white border-b border-x border-[#68BB59] rounded-b-md">
              {activities.map((activity, index) => {
                const isChecked = selectedActivities.includes(activity);
                const isDisabled = selectedActivities.length >= 6 && !isChecked;
                return (
                  <label className="flex items-center gap-4 py-1.5 px-4 text-sm text-[#808080]">
                    <input
                      type="checkbox"
                      className="size-[18px] border-2 border-[#808080] rounded-sm appearance-none checked:bg-[#68BB59] checked:border-none"
                      checked={isChecked}
                      onChange={() => toggleActivity(activity)}
                      disabled={isDisabled}
                    />
                    {activity}
                  </label>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="mt-3">
        <input
          type="text"
          className="py-3 px-4 w-full bg-[#F6F6F6] text-[#808080] rounded-md outline-none"
          placeholder="Plant name"
        />
        <div className="h-[213px] mt-[14px] py-3 px-[18px] bg-[#F6F6F6] flex flex-col justify-between rounded-md">
          <input
            type="text"
            placeholder="Write notes about plants for today "
            className="w-full outline-none bg-[#F6F6F6]"
          />
          <button className="self-end flex text-[#808080]">
            <Image src={UploadImage} alt="" className="mr-2" />
            Upload image
          </button>
        </div>
        <div className="flex items-center justify-between mt-4">
          <label className="center gap-2 text-xs font-normal">
            <input
              type="checkbox"
              className="w-[20px] h-[20px] rounded-full border border-[#D1D1D6] appearance-none checked:bg-[#68BB59]"
            />
            Make Private
          </label>
          <div className="flex gap-6">
            <button className="font-normal text-sm text-[#808080] ">
              Cancel
            </button>
            <Button className="py-[14px] px-12 bg-[#68BB59] text-sm text-white font-normal">
              Publish
            </Button>
          </div>
        </div>
      </div>
    </PopUpWrap>
  );
};

export default AddNewPost;
