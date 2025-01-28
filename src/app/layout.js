import "./globals.css";
import { Gelasio, Inter, PT_Serif, Sora } from "next/font/google";

const font = Gelasio({ subsets: ["latin"] });

export const metadata = {
  title: "SUMMER IN THE CITY",
  description: "Photographic exhibit by Boris Kirov & Nuno Cruz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
