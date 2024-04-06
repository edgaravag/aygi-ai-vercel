import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={"/"} className="cursor-pointer">
        <p className="text-white text-2xl font-bold font-aygiFont">AYGI AI</p>
      </Link>
    </div>
  );
};

export default Logo;
