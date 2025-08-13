import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/custom/Nav/navbar";
import Footer from "../components/Footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Niazi Mahrab - Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <title>My Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased relative">
        <Navbar /> {/* Navbar inside body */}
        <main>{children}</main> {/* Page content */}
        <Script src="/cursor.js" strategy="afterInteractive" />
        <Footer /> {/* Footer added */}
        <Analytics />
      </body>
    </html>
  );
}



