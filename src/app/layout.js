import "./globals.css";
import { Gelasio, Inter, PT_Serif, Sora } from "next/font/google";

const font = Gelasio({ subsets: ["latin"] });

export const metadata = {
  title: "SUMMER IN THE CITY",
  description: "Photographic exhibit by Boris Kirov & Nuno Cruz",
  icon: "fav.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fav.ico" sizes="any" />
        <meta property="og:image" content="fav.me" />
      </head>

      <body className={font.className}>{children}</body>
    </html>
  );
}
