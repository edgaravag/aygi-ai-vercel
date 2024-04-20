import Image from "next/image";
import Link from "next/link";
import LogoIcon from "@public/icons/AygiLogo.webp";

const Logo = () => {
  return (
    <Link href={"/"} className="cursor-pointer">
      <Image src={LogoIcon} alt="AygiAI Logo" priority />
    </Link>
  );
};

export default Logo;
