import Image from "next/image"


const SingleDetection = ({ detection }) => {
  return (
    <div className="flex gap-4">
        <div>
            <Image src={detection.img} alt="Detection Image" width={62} height={62} />
        </div>

        <div>
            <p className=" font-semibold"> {detection.name} </p>
            <p className="text-xs"> {detection.description} </p>
            <p className="text-xs mt-1.5"> {detection.date} </p>
        </div>
    </div>
    
  )
}

export default SingleDetection