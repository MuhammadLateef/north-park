import type { Metadata } from "next";
import { Geist, Poppins } from "next/font/google";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-playfair",
});


const PoppinSans = Poppins({
  variable: "--font-poppins",
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "North Go Pak",
  description: "Traveling Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${PoppinSans.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${playfair.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
