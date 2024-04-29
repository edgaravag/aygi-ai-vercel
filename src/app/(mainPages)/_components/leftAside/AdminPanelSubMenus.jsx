import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LibraryIcon from "@public/icons/libraryIcon.webp";
import FaqIcon from "@public/icons/faq.webp";

const AdminPanelSubMenus = ({ router }) => {
  const [showLibraryMenus, setShowLibraryMenus] = useState(false);
  const [showFaqMenus, setShowFaqMenus] = useState(false);

  return (
    <div className="ml-6 flex flex-col gap-6">
      <div
        className={`flex items-center gap-6 cursor-pointer py-3 `}
        onClick={() => setShowLibraryMenus(!showLibraryMenus)}
      >
        <Image src={LibraryIcon} alt="" width={24} height={24} />
        {!router.includes("/faq/questions") && router !== "/library" && (
          <p
            className={`text-black text-sm tracking-wider hover:font-semibold `}
          >
            Library
          </p>
        )}
      </div>
      {showLibraryMenus && (
        <div className="ml-8 flex flex-col gap-6">
          <Link
            href={"/admin-panel/library/all-posts"}
            className="text-black text-sm tracking-wider hover:font-semibold"
          >
            All Posts
          </Link>
          <Link
            href={"/admin-panel/library/add-post"}
            className="text-black text-sm tracking-wider hover:font-semibold"
          >
            Add Post
          </Link>
          <Link
            href={"/admin-panel/library/categories"}
            className="text-black text-sm tracking-wider hover:font-semibold"
          >
            Categories
          </Link>
        </div>
      )}
      <div
        className={`flex items-center gap-6 cursor-pointer py-3 `}
        onClick={() => setShowFaqMenus(!showFaqMenus)}
      >
        <Image src={FaqIcon} alt="" width={24} height={24} />
        {!router.includes("/faq/questions") && router !== "/library" && (
          <p
            className={`text-black text-sm tracking-wider hover:font-semibold `}
          >
            FAQ
          </p>
        )}
      </div>
      {showFaqMenus && (
        <div className="ml-8 flex flex-col gap-6">
          <Link
            href={"/admin-panel/faq/all-posts"}
            className="text-black text-sm tracking-wider hover:font-semibold"
          >
            All Posts
          </Link>{" "}
          <Link
            href={"/admin-panel/faq/add-post"}
            className="text-black text-sm tracking-wider hover:font-semibold"
          >
            Add Post
          </Link>
          <Link
            href={"/admin-panel/faq/categories"}
            className="text-black text-sm tracking-wider hover:font-semibold"
          >
            Categories
          </Link>
        </div>
      )}
    </div>
  );
};

export default AdminPanelSubMenus;
