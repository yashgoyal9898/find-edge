import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Head from "next/head"; // Head should remain here for specific meta usage

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trademinia",
  description: "Trademinia – your ultimate platform for learning stock trading, forex trading, and cryptocurrency. Discover beginner-friendly guides, expert trading strategies, and valuable tips for mastering the stock market, forex, and crypto. Start trading smarter with Trademinia today",
  keywords: "stock trading, forex trading, cryptocurrency, trading strategies"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <body className="main-container">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
