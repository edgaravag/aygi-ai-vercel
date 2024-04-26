import Image from "next/image";
import Button from "@/src/components/ui/Button"
import ArrowDownIcon from "@public/icons/greenArrowDown.svg";

const Categories = () => {
	return (
		<Button className="flex items-center gap-2 px-3 py-2 border border-green text-green tracking-wider">
			Categories
			<Image src={ArrowDownIcon} alt="Arrow Down Icon" />
		</Button>
	)
}

export default Categories
