import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Satya - Certification & Consultancy Services",
  description:
    "Professional certification and consultancy services including BIS Registration, FMCS, ISI Mark Certification, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-white text-black">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
