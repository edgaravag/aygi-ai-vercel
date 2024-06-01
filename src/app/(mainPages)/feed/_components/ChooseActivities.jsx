'use client'
import { useState } from "react";
import Image from "next/image";
import ArrowIcon from "@public/icons/arrowDown.webp";

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

const ChooseActivities = ({ setSelectedActivities, selectedActivities }) => {
  const [showChooseActivities, setShowChooseActivities] = useState(false);

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
    <div className="relative">
      <button className="flex items-center gap-2 text-[#808080]" onClick={() => setShowChooseActivities(!showChooseActivities)}>
        Choose Activities
        <Image src={ArrowIcon} alt="" />
      </button>
      {showChooseActivities && (
        <div className="absolute flex flex-col right-[-20px] gap-3 pb-1 bg-white border border-[#68BB59] rounded-md">
          {activities.map((activity) => {
            const isChecked = selectedActivities.includes(activity);
            const isDisabled = selectedActivities.length >= 6 && !isChecked;
            return (
              <label key={activity} className="flex items-center gap-4 py-1.5 px-4 text-sm text-[#808080]">
                <input
                  type="checkbox"
                  className="size-[18px] border-2 border-[#808080] rounded-sm appearance-none checked:bg-[#68BB59] checked:border-none"
                  checked={isChecked}
                  onChange={() => toggleActivity(activity)}
                  disabled={isDisabled}
                />
                <p>
                  {activity}
                </p>
              </label>
            );
          })}
        </div>
      )}
    </div>
  )
}

export default ChooseActivities