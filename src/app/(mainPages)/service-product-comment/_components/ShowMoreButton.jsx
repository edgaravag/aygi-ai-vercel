'use client'
import { useState } from "react";
import Image from "next/image";
import MoreIcon from "@public/icons/moreIcon.webp";
import ShowMore from "./ShowMore";

const ShowMoreButton = () => {
	const [showMore, setShowMore] = useState(false)
  return (
    <>
      <button onClick={() => setShowMore(!showMore)}>
				<Image src={MoreIcon} alt="More Icon" className="w-6 h-[6px]" />
			</button>
			{showMore && <ShowMore />}
    </>
  );
};

export default ShowMoreButton;
