import Image from "next/image"; 
import ShowOpenCard from "./ShowOpenCard";
import MoreIcon from "@public/icons/moreIcon.webp";

const SingleComment = ({ post }) => {
	return (
		<>
			<div className="flex justify-between items-center gap-5">
				<div className="flex items-center justify-start gap-4">
					<div>
						<Image src={post.img} alt="" width={40} height={40} />
					</div>
					<div className="flex flex-col gap-1">
						<p className="text-sm text-[#979797] font-normal">
							{post.postDate}
						</p>
						<p className="text-sm font-normal">{post.title}</p>
					</div>
				</div>
				<div>
					<Image src={MoreIcon} alt="" className="cursor-pointer" />
				</div>
			</div>
			<ShowOpenCard post={post} />
		</>
	)
}

export default SingleComment
