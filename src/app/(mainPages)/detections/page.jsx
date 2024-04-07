import DeleteAllButton from "./_components/DeleteAllButton";
import PrevAndNextPages from "./_components/PrevAndNextPages";
import SingleDetection from "./_components/SingleDetection";
import DetectionImage from "@public/plants/detectionImage.webp";

const detections = [
  {
    img: DetectionImage.src,
    name: "Plant Name",
    description: "Lorem Imspum ipsum Lorem",
    date: "08.10.2014",
  },
  {
    img: DetectionImage.src,
    name: "Plant Name",
    description: "Lorem Imspum ipsum Lorem",
    date: "08.10.2014",
  },
  {
    img: DetectionImage.src,
    name: "Plant Name",
    description: "Lorem Imspum ipsum Lorem",
    date: "08.10.2014",
  },
  {
    img: DetectionImage.src,
    name: "Plant Name",
    description: "Lorem Imspum ipsum Lorem",
    date: "08.10.2014",
  },
  {
    img: DetectionImage.src,
    name: "Plant Name",
    description: "Lorem Imspum ipsum Lorem",
    date: "08.10.2014",
  },
  {
    img: DetectionImage.src,
    name: "Plant Name",
    description: "Lorem Imspum ipsum Lorem",
    date: "08.10.2014",
  },
  {
    img: DetectionImage.src,
    name: "Plant Name",
    description: "Lorem Imspum ipsum Lorem",
    date: "08.10.2014",
  },
  {
    img: DetectionImage.src,
    name: "Plant Name",
    description: "Lorem Imspum ipsum Lorem",
    date: "08.10.2014",
  },
];

const Detections = () => {
  return (
    <main className="w-full px-[95px] py-9">
      <div className="mx-auto flex flex-col w-full gap-4 max-w-[572px]">
      <h2 className="font-semibold text-lg">Detection History</h2>
        {detections.map((detection, index) => {
          return <SingleDetection key={index} detection={detection} />;
        })}
        <div className="flex items-center justify-between mt-9">
          <DeleteAllButton />
          <PrevAndNextPages />
        </div>
      </div>
    </main>
  );
};

export default Detections;
