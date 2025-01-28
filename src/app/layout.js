import "./globals.css";
import { Gelasio } from "next/font/google";

const font = Gelasio({ subsets: ["latin"] });

export const metadata = {
  title: "SUMMER IN THE CITY",
  description: "Photographic exhibit by Boris Kirov & Nuno Cruz",
  icon: "/favicon.ico",
  openGraph: {
    title: "SUMMER IN THE CITY",
    description: "Photographic exhibit by Boris Kirov & Nuno Cruz",
    images: {
      url: "/me.png",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
