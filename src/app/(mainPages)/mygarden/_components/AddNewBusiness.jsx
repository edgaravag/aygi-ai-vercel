import Image from "next/image";
import Link from 'next/link'
import BusinessIcon from '@public/icons/blueBusinessIcon.webp'
import PlusIcon from "@public/icons/plusIcon.svg";
import NextUser from "@public/icons/nextUser.webp";

const icons = [
	BusinessIcon.src,
	BusinessIcon.src,
	BusinessIcon.src,
	BusinessIcon.src,
	BusinessIcon.src,
	BusinessIcon.src,
	BusinessIcon.src,
]

const AddNewBusiness = () => {
	return (
		<div className="mb-7 mt-[20px]">
			<button className="flex items-center w-[704px] mx-auto p-1 gap-2 text-[#68BB59] font-normal">
        Add New Business
        <Image src={PlusIcon} alt="" />
      </button>
			<div className="flex items-center gap-4 mt-[20px]">
				{
					icons.map((icon, index) => {
						return (
							<Link href={'/mybusiness'} key={index}>
								<Image 
									src={icon} 
									alt="Business Icon" 
									width={80}
									height={80}
								/>
							</Link>
					)})
				}
				<div className="cursor-pointer">
          <Image alt="Next" src={NextUser} />
        </div>
			</div>
		</div>
	)
}

export default AddNewBusiness
