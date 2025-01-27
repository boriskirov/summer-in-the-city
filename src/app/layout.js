import "./globals.css";
import { Gelasio, Inter, PT_Serif, Sora } from "next/font/google";

const font = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
