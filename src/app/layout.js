

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trademinia",
  description: "Home Page",
  icons: {
    icon: "/favicofdn.ico", // or any other path to your icon file
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="main-container" >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
