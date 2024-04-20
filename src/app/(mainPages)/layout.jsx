"use client";
import { getModalState } from "@/src/store/features/modalSlice/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import { setIsOpen } from "@/src/store/features/modalSlice/modalSlice";
import RightAside from "./_components/rightAside/RightAside";
import Header from "./_components/header/Header";
import LeftAside from "./_components/leftAside/LeftAside";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import Footer from "../_components/footer/Footer";
const MakeDetection = dynamic(() =>
  import("@/src/components/popups/MakeDetection")
);

export default function RootLayout({ children }) {
  const dispatch = useDispatch();
  const isOpen = useSelector(getModalState);

  const handleClose = () => {
    dispatch(setIsOpen(false));
  };

  const path = usePathname();

  return (
    <html lang="en">
      <body className="bg-[#F7F7F7]">
        {isOpen && <MakeDetection onClose={handleClose} />}

        <Header />
        <div className="w-full h-screen flex">
          <LeftAside path={path} />
          <main className="px-8 py-9 mx-auto">{children}</main>
          {path !== "/faq" && <RightAside />}
        </div>
        {path === "/faq" && <Footer />}
      </body>
    </html>
  );
}
