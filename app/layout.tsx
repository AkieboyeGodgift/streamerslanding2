import type { Metadata } from "next";
import localFont from "next/font/local";
import Loader from "./components/Loader";
import loaderImage from "@/public/loader.png";  // your custom loader image
import profileImage from "@/public/loader.png"; // your profile circle
import "./globals.css";

// ✅ Load local font
const gamerFont = localFont({
  src: "../public/font/f.ttf",
  display: "swap",
  variable: "--font-gamer", // optional but neat if you want CSS access
});

export const metadata: Metadata = {
  title: "Gamer Portal",
  description: "Immersive gaming experience built by Gifted Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={gamerFont.className}>
        <Loader loaderImg={loaderImage.src} profileImg={profileImage.src} />
        {children}
      </body>
    </html>
  );
}
