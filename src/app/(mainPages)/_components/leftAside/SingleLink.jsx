"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const SingleLink = ({ link }) => {
  const router = usePathname();
  const isActive = router === link.path;
  return (
    <Link
      href={link.path}
      className={`flex items-center gap-6 cursor-pointer py-3 ${
        (isActive ? "border-r-4 border-r-[#68bb59]" : "",
        router === "/faq" ? "" : "")
      }`}
    >
      <Image src={link.img} alt="" width={24} height={24} />
      {router !== "/faq" && (
        <p
          className={`text-black text-sm tracking-wider hover:font-semibold ${
            isActive ? "font-semibold" : "font-normal"
          }`}
        >
          {link.title}
        </p>
      )}
    </Link>
  );
};

export default SingleLink;
