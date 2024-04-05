import SingleDetection from "./SingleDetection"
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
    <main className="w-full px-[95px] py-9">
        <h2 className="font-semibold text-lg">Detection History</h2>
        <div className="flex flex-col gap-4">
            {detections.map((detection, index) => {
                return <SingleDetection key={index} detection={detection} />
            })}
        </div>
    </main>
  )
}

export default Detections