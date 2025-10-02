import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../globals.css";

const lato = Lato({
  subsets: ["latin"], // required
  variable: "--font-lato", // optional (for CSS variable use)
  weight: ["400", "700"], // pick the weights you need
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
      <body className={`${lato.variable} bg-bg-color`}>{children}</body>
    </html>
  );
}
