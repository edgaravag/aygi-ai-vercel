"use client";
import RightAside from "./_components/rightAside/RightAside";
import Header from "./_components/header/Header";
import LeftAside from "./_components/leftAside/LeftAside";
import dynamic from "next/dynamic";
import { usePathname, useRouter } from "next/navigation";
// import { useDispatch } from "react-redux";
// import { setUserData } from "@/src/store/features/userDataSlice/userDataSlice";
// import { useEffect, useLayoutEffect, useState } from "react";
// import axiosInstance from "@/src/utils/axiosInstance";
const Footer = dynamic(() => import("../_components/footer/Footer"));

export default function RootLayout({ children }) {
  // const [accessToken, setAccessToken] = useState(null);
  const router = usePathname();
  // const path = useRouter();

  // useLayoutEffect(() => {
  //   const token = localStorage.getItem("accessToken");
  //   setAccessToken(token);
  // }, [accessToken]);

  // console.log(accessToken);

  // useEffect(() => {
  //   const token = localStorage.getItem("accessToken");
  //   if (!token) {
  //     // console.log("useEffect" + token);
  //     window.location.href = "/";
  //   }
  // }, [accessToken, router]);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   axiosInstance
  //     .get("/user/")
  //     .then((response) => {
  //       dispatch(setUserData(response.data));
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching user data:", error);
  //     });
  // }, [dispatch]);
  

  // if (accessToken) {
    return (
      <div className="bg-[#F7F7F7] h-auto"> 
        <Header />
        <div className="relative w-full flex justify-between pt-[104px]">
          <LeftAside path={router} />
          <main className="pr-8 pl-[275px] py-9 mx-auto h-full">{children}</main>
          {router.includes("/faq/questions") ||
          router.includes("/library") ? null : (
            <div className="w-[365px]">
              <RightAside />
            </div>
          )}
        </div>
        {router.includes("/faq/questions") || router.includes("/library") ? (
          <Footer />
        ) : null}
      </div>
    );
  // } else {
  //   return null;
  // }
}
