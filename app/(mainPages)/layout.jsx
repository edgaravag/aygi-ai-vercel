import Header from "./components/Header";
import LeftAside from "./components/LeftAside";
import RightAside from "./components/RightAside";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="bg-[#F7F7F7] flex justify-between">
          <LeftAside />
          	{children}
          <RightAside />
        </div>
      </body>
    </html>
  );
}
