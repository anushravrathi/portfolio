import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anushrav Rathi | Portfolio",
  description: "Full Stack Developer (MERN) & React Native",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased dark`}>
      <body className="min-h-full flex flex-col bg-[#080e1a] text-zinc-100">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
