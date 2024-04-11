import Image from "next/image";
import Button from "@/src/components/ui/Button";
import PlusIcon from "@public/icons/plusIcon.svg";

const GardenJournalEntry = () => {
  return (
    <Button className="p-1 gap-2 text-[#68BB59] font-normal mt-8">
      Garden Journal Entry
      <Image src={PlusIcon} alt="" />
    </Button>
  );
};

export default GardenJournalEntry;
