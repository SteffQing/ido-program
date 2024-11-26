import type { Metadata } from "next";
import "./globals.css";
import RootProvider from "@/providers/root";
import Navbar from "@/components/layout/navbar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GreenDot",
  description: "Get early access to groundbreaking protocols on the SOON Network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased scroll-smooth`}>
        <RootProvider>
          <Navbar />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
