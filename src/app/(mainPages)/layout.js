'use client'
import Header from "../components/pages/layout/Header";
import LeftAside from "../components/pages/layout/LeftAside";
import RightAside from "../components/pages/layout/RightAside";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F7F7F7]">
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
