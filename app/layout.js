import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Fontları tanımla (Tailwind ile uyumlu class variable olarak)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Görev Yönetim Sistemi",
  description: "Next.js + SQLite görev takip uygulaması",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-white font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
