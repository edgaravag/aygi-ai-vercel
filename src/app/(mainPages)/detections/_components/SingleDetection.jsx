import Link from 'next/link'
import Image from "next/image";
import Button from "@/src/components/ui/Button";
import DeleteDetectionButton from "./DeleteDetectionButton";

const SingleDetection = ({ detection }) => {
  return (
    <div className="flex justify-between pb-3 border-b">
      <div className="flex gap-4">
        <div>
          <Image
            src={detection.img}
            alt="Detection Image"
            width={62}
            height={62}
          />
        </div>
        <div>
          <p className=" font-semibold">{detection.name}</p>
          <p className="text-xs">{detection.description}</p>
          <p className="text-xs mt-1.5">{detection.date}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end gap-10">
        <DeleteDetectionButton />
        <Link href={'/detections/view'}>
          <Button className="bg-[#68BB59] text-white py-px px-4">View</Button>
        </Link>
      </div>
    </div>
  );
};

export default SingleDetection;
