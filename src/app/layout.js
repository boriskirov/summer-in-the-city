import "./globals.css";
import { Gelasio } from "next/font/google";

const font = Gelasio({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://summer-in-the-city.vercel.app"),
  title: "SUMMER IN THE CITY",
  description: "Photographic exhibit by Boris Kirov & Nuno Cruz",
  icons: {
    icon: "/icon.ico",
  },
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
        <link rel="icon" href="/images/icon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/icon.png" />
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
