"use client";
import { getModalState } from "@/src/store/features/modalSlice/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import { setIsOpen } from "@/src/store/features/modalSlice/modalSlice";
import RightAside from "./_components/rightAside/RightAside";
import Header from "./_components/header/Header";
import LeftAside from "./_components/leftAside/LeftAside";
import dynamic from "next/dynamic";
import { usePathname, useRouter } from "next/navigation";
const EditDiary = dynamic(() => import("@/src/components/popups/EditDiary"))
const Footer = dynamic(() => import("../_components/footer/Footer"));
const MakeDetection = dynamic(() =>
  import("@/src/components/popups/MakeDetection")
);

export default function RootLayout({ children }) {
  // console.log(children);
  const dispatch = useDispatch();
  const isOpen = useSelector(getModalState);

  const handleClose = () => {
    dispatch(setIsOpen(false));
  };

  const router = usePathname();
  const path = useRouter()

 const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    path.push('/')
  }

  return (
    <div className="bg-[#F7F7F7]">
      {isOpen && <MakeDetection onClose={handleClose} />}
      {isOpen && <EditDiary onClose={handleClose} />}

      <Header />
      <div className="w-full flex pt-[104px]">
        <LeftAside path={router} />
        <main className="px-8 py-9 mx-auto">{children}</main>
        {router.includes("/faq/questions") ||
        router.includes("/library") ? null : (
          <RightAside />
        )}
      </div>
      {router.includes("/faq/questions") || router.includes("/library") ? (
        <Footer />
      ) : null}
    </div>
  );
}
