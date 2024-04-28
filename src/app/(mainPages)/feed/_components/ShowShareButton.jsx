'use client'
import { useState } from 'react'
import Image from "next/image";
import ShareIcon from "@public/icons/shareIcon.webp";
import ShowShare from "./ShowShare";

const ShowShareButton = () => {
	const [showShare, setShowShare] = useState(false)

	return (
		<div 
			className="relative flex items-center gap-4 cursor-pointer"
			onClick={() => setShowShare(!showShare)}
		>
			<Image src={ShareIcon} alt="Share Icon" />
			<button className="font-normal text-[#808080]">Share</button>
			{showShare && <ShowShare />}
		</div>
	)
}

export default ShowShareButton
