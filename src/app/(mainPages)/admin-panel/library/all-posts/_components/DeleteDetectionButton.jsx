'use client'
import { useState } from "react";
import dynamic from 'next/dynamic';
import Image from "next/image";
import GarbageIcon from "@public/icons/grayGarbageIcon.webp";
const DeleteDetection = dynamic(() => import("@/src/components/popups/DeleteDetection"))

const DeleteDetectionButton = () => {
	const [showDeleteDetection, setShowDeleteDetection] = useState(false);

	return (
		<>
			<Image 
				src={GarbageIcon} 
				alt="Garbage Icon"  
				className="cursor-pointer"
				onClick={() => setShowDeleteDetection(true)}
			/>
			{showDeleteDetection && <DeleteDetection onClose={() => setShowDeleteDetection(false)} />}
		</>
	)
}

export default DeleteDetectionButton
