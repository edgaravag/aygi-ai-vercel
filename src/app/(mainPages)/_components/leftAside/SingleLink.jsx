"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import AdminPanel from "./AdminPanel";

const SingleLink = ({ link }) => {
  const router = usePathname();
  const isActive = router === link.path;

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return link.isAdmin ? (
    <AdminPanel 
      link={link} 
      isActive={isActive} 
      router={router} 
    />
  ) : (
    <Link
      href={link.path}
      className={classNames(
        "flex items-center gap-6 cursor-pointer py-4",
        isActive && "border-r-4 border-r-[#68bb59]",
        !link.path && "hidden" 
      )}
    >
      <Image src={link.img} alt="" width={24} height={24} />
      {!router.includes("/faq/questions") && router !== "/library" && (
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
