import { useState } from "react";
import Image from "next/image";
import AdminPanelSubMenus from "./AdminPanelSubMenus";

const AdminPanel = ({ link, isActive, router }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <>
      <div
        className={`flex items-center gap-6 cursor-pointer py-3 ${
          isActive ? "border-r-4 border-r-[#68bb59]" : ""
        }`}
        onClick={() => setShowSubMenu(!showSubMenu)}
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
      </div>
      {showSubMenu && (
        <AdminPanelSubMenus router={router} />
      )}
    </>
  );
};

export default AdminPanel;
