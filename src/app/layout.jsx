import "./globalCss/globals.css";
import StoreProvider from "./StoreProvider";
export const metadata = {
  title: "Aygi | AI",
  description: "Aygi | AI",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body suppressHydrationWarning={true} className="bg-[#F7F7F7]">
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
