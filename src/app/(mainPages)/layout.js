"use client";
import MakeDetection from "@/src/components/popups/MakeDetection";
import RightAside from "./_components/rightAside/RightAside";
import Header from "./_components/header/Header";
import LeftAside from "./_components/leftAside/LeftAside";
import { getModalState } from "@/src/store/features/modalSlice/modalSlice";
import { useSelector } from "react-redux";
export default function RootLayout({ children }) {
  const isOpen = useSelector(getModalState);
  return (
    <html lang="en">
      <body className="bg-[#F7F7F7]">
        {isOpen && <MakeDetection onClose={() => {}} />}

        <Header />
        <div className="flex">
          <LeftAside />
          {children}
          <RightAside />
        </div>
      </body>
    </html>
  );
}
