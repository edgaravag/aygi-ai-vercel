import Image from "next/image";
import ArrowRight from "@public/icons/arrowRight.svg";

const SingleLibrary = ({ library }) => {
	return (
		<div className="p-7 border border-green rounded-md cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200 active:scale-95">
			<Image src={library.img} alt="Library Image" width={283} height={275} />
			<p className="mt-3 text-sm">Date / <span className="text-sm text-[#808080]">{library.date}</span></p>
			<div className="w-[283px] mt-4">	
				<h2 className="text-xl font-medium">Lorem ipsum dolor sit amet consectetur.</h2>
				<p className="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
			</div>
			<button className="flex items-center gap-2 mt-4 text-green font-semibold">
				Read More
				<Image src={ArrowRight} alt="Arrow Right Icon" />
			</button>
		</div>
	)
}

export default SingleLibrary
