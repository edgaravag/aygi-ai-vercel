'use client'
import Image from "next/image";
import UploadedPhotoImg from '@public/plants/detectionImg.webp'
import Button from "@/src/components/ui/Button";
import { useSelector } from "react-redux";

const ViewPage = () => {
	const geminiText = useSelector((state) => state?.geminiText?.text)
	console.log(geminiText);
	
	return (
		<div className="w-[688px]">
			<h2 className="text-lg font-bold mb-3">Detection Result</h2>
			<div className="flex gap-6">
				<p className="text-sm text-[#68BB59] font-medium">Plant Category</p>
				<p>Veggies</p>
			</div>
			<div className="flex gap-12 mt-2">
				<p className="text-sm text-[#68BB59] font-medium">Plant Name</p>
				<p>Carrot</p>
			</div>
			<div className="mt-6">
				<h3 className="text-sm font-semibold">Plant Disease Result</h3>
				<p className="text-[#808080] mt-3 leading-7">Lorem ipsum dolor sit amet consectetur. Mauris vitae integer eu in arcu. Viverra felis rhoncus malesuada fringilla elementum. Velit malesuada fames nulla aliquet orci diam ut aliquet. Enim id massa libero odio.Lorem ipsum dolor sit amet consectetur. Mauris vitae integer eu in arcu. Viverra felis rhoncus malesuada fringilla elementum. Velit malesuada fames nulla aliquet orci diam ut aliquet. Enim id massa libero odio.</p>
			</div>
			<div className="mt-6">
				<h3 className="text-sm font-semibold">How you can help your plant</h3>
				<p className="text-[#808080] mt-3 leading-7">Lorem ipsum dolor sit amet consectetur. Mauris vitae integer eu in arcu. Viverra felis rhoncus malesuada fringilla elementum. Velit malesuada fames nulla aliquet orci diam ut aliquet. Enim id massa libero odio.Lorem ipsum dolor sit amet consectetur. Mauris vitae integer eu in arcu. Viverra felis rhoncus malesuada fringilla elementum. Velit malesuada fames nulla aliquet orci diam ut aliquet. Enim id massa libero odio.</p>
			</div>
			<div className="flex flex-col gap-1 mt-3">
				<p className="text-sm">1. lorem ipsum dolor sit amet consectetur.</p>
				<p className="text-sm">2. lorem ipsum dolor sit amet consectetur.</p>
				<p className="text-sm">3. lorem ipsum dolor sit amet consectetur.</p>
			</div>
			<div className="mt-6">
				<h3 className="text-sm font-semibold">Uploaded  photo</h3>
				<div className="flex justify-between items-end mt-3">
					<Image src={UploadedPhotoImg} alt="Uploaded Photo" width={240} height={180} />
					<Button className="border border-[#68BB59] h-[41px] text-[#68BB59] px-3 py-2.5">
						Delete Detection
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ViewPage
