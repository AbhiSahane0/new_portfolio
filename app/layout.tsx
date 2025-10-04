import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../globals.css";
import Navbar from "./_components/Navbar/Navbar";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "...",
  description: "Hi, I'm Abhijit a professional Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable}`}>
      <body
        className={`${lato.variable} bg-gradient-to-b from-black via-indigo-950 to-black text-white min-h-screen`}
      >
        {/* Navbar stays fixed across pages */}
        <Navbar />

        {/* Main content */}
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
