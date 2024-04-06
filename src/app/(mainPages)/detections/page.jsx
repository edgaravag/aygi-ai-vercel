import SingleDetection from "./_components/SingleDetection"
import DetectionImage from "@public/plants/detectionImage.webp"

const detections = [
    { img: DetectionImage.src, name: "Plant Name", description: "Lorem Imspum ipsum Lorem", date: "08.10.2014" },
    { img: DetectionImage.src, name: "Plant Name", description: "Lorem Imspum ipsum Lorem", date: "08.10.2014" },
    { img: DetectionImage.src, name: "Plant Name", description: "Lorem Imspum ipsum Lorem", date: "08.10.2014" },
    { img: DetectionImage.src, name: "Plant Name", description: "Lorem Imspum ipsum Lorem", date: "08.10.2014" },
    { img: DetectionImage.src, name: "Plant Name", description: "Lorem Imspum ipsum Lorem", date: "08.10.2014" },
    { img: DetectionImage.src, name: "Plant Name", description: "Lorem Imspum ipsum Lorem", date: "08.10.2014" },
    { img: DetectionImage.src, name: "Plant Name", description: "Lorem Imspum ipsum Lorem", date: "08.10.2014" },
    { img: DetectionImage.src, name: "Plant Name", description: "Lorem Imspum ipsum Lorem", date: "08.10.2014" }
]

const Detections = () => {
  return (
    <main className="w-full flex flex-col items-center  mx-auto px-[95px] py-9">
      <h2 className="font-semibold text-lg">Detection History</h2>
      <div className="flex flex-col w-full gap-4 mt-6 max-w-[572px]">
          {detections.map((detection, index) => {
              return <SingleDetection key={index} detection={detection} />
          })}
      </div>
    </main>
  )
}

export default Detections