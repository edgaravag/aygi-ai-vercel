import Image from "next/image";
import Link from "next/link";
import BackIcon from "@public/icons/backButton.webp";

const AccountQuestionPage = () => {
	return (
		<>
			<Link href={"/faq/account"} className="mt-6 flex items-center gap-4">
        <Image src={BackIcon} alt="Back Button" />
        Back
      </Link>
			<h2 className="font-semibold text-2xl mt-10">
				How we can help your plant
			</h2>
			<p className="mt-3 w-[988px] text-[#979797] text-xl leading-[30px]">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer  took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer  took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer  took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer  took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer  took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of  
			</p>
		</>
	)
}

export default AccountQuestionPage
