import Link from "next/link";
import Image from "next/image";
import Button from "@/src/components/ui/Button";
import DeleteDetectionButton from "./DeleteDetectionButton";
import formatDate from "@/src/utils/formatDate";
import getSectionContent from "@/src/utils/getSectionContent";

const SingleDetection = ({ detection }) => {
  const formattedDate = formatDate(detection?.timestamp);
  const lines = detection?.text ? detection?.text.split("\n") : [];

  const plantName = getSectionContent(detection?.text, "Plant Name");
  const aboutPlantIndex = lines.findIndex((l) =>
    l.startsWith("About the Plant:"),
  );
  const aboutPlant =
    aboutPlantIndex !== -1 ? lines.slice(aboutPlantIndex).join("\n") : "";

  return (
    <div className="flex justify-between pb-3 border-b">
      <div className="flex gap-4">
        <div>
          <Image
            src={`data:image/jpeg;base64,${detection?.imageBase64}`}
            alt="Detection Image"
            width={62}
            height={62}
          />
        </div>
        <div>
          <p className="font-semibold">{detection.text}</p>
          <p className="w-[430px] text-xs overflow-hidden whitespace-nowrap overflow-ellipsis">
            {aboutPlant}
          </p>
          <p className="text-xs mt-1.5">{formattedDate}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end gap-10">
        <DeleteDetectionButton id={detection.id} />
        <Link href={`/detections/view/${detection.id}`}>
          <Button className="bg-[#68BB59] text-white py-px px-4">View</Button>
        </Link>
      </div>
    </div>
  );
};

export default SingleDetection;
