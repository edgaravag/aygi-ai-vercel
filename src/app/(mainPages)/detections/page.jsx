import DeleteAllButton from "./_components/DeleteAllButton";
import PrevAndNextPages from "./_components/PrevAndNextPages";
import SingleDetection from "./_components/SingleDetection";
import DetectionImage from "@public/plants/detectionImage.webp";

const detections = [
  {
    img: DetectionImage.src,
    name: "Plant Name",
    description: "Lorem Ipsum Lorem Ipsum lorem Lorem Ipsum Lorem Ipsum lorem Lorem",
    date: "08.10.2014",
  },
  {
    img: DetectionImage.src,
    name: "Plant Name",
    description: "Lorem Ipsum Lorem Ipsum lorem Lorem Ipsum Lorem Ipsum lorem Lorem",
    date: "08.10.2014",
  },
  {
    img: DetectionImage.src,
    name: "Plant Name",
    description: "Lorem Ipsum Lorem Ipsum lorem Lorem Ipsum Lorem Ipsum lorem Lorem",
    date: "08.10.2014",
  },
  {
    img: DetectionImage.src,
    name: "Plant Name",
    description: "Lorem Ipsum Lorem Ipsum lorem Lorem Ipsum Lorem Ipsum lorem Lorem",
    date: "08.10.2014",
  },
  {
    img: DetectionImage.src,
    name: "Plant Name",
    description: "Lorem Ipsum Lorem Ipsum lorem Lorem Ipsum Lorem Ipsum lorem Lorem",
    date: "08.10.2014",
  },
  {
    img: DetectionImage.src,
    name: "Plant Name",
    description: "Lorem Ipsum Lorem Ipsum lorem Lorem Ipsum Lorem Ipsum lorem Lorem",
    date: "08.10.2014",
  },
  {
    img: DetectionImage.src,
    name: "Plant Name",
    description: "Lorem Ipsum Lorem Ipsum lorem Lorem Ipsum Lorem Ipsum lorem Lorem",
    date: "08.10.2014",
  },
  {
    img: DetectionImage.src,
    name: "Plant Name",
    description: "Lorem Ipsum Lorem Ipsum lorem Lorem Ipsum Lorem Ipsum lorem Lorem",
    date: "08.10.2014",
  },
];

const Detections = () => {
  return (
    <div className="w-full">
      <div className="mx-auto flex flex-col w-full gap-4 ">
      <h2 className="font-semibold text-lg">Detection History</h2>
        {detections.map((detection, index) => {
          return <SingleDetection key={index} detection={detection} />;
        })}
        <div className="flex items-center justify-between mt-9">
          <DeleteAllButton />
          <PrevAndNextPages />
        </div>
      </div>
    </div>
  );
};

export default Detections;
