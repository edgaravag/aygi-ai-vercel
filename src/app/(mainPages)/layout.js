import Header from "./_components/header/Header";
import LeftAside from "./_components/leftAside/LeftAside";
import RightAside from "./_components/rightAside/RightAside";

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
