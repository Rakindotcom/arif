import { Anek_Bangla } from "next/font/google";
import "./globals.css";

const anekBangla = Anek_Bangla({
  variable: "--font-bengali",
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "আরিফুল ইসলাম - মার্কেটিং সাইকোলজি বিশেষজ্ঞ ও লেখক",
  description: "মার্কেটিং সাইকোলজি বিশেষজ্ঞ আরিফুল ইসলামের অফিশিয়াল ওয়েবসাইট। নিড (Need) কোর্স প্ল্যাটফর্মের সহ-প্রতিষ্ঠাতা। ইসলামিক জ্ঞান ও ব্যক্তিগত উন্নয়ন।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" dir="ltr">
      <body className={`${anekBangla.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
