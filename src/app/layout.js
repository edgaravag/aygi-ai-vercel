import "./globalCss/globals.css";

export const metadata = {
  title: "Aygi | AI",
  description: "Aygi | AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
