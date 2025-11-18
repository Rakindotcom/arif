import { Anek_Bangla } from "next/font/google";
import "./globals.css";
import { FirebaseProvider } from "@/contexts/FirebaseContext";

const anekBangla = Anek_Bangla({
  variable: "--font-bengali",
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "আরিফুল ইসলাম - মার্কেটিং সাইকোলজি বিশেষজ্ঞ ও লেখক",
  description: "মার্কেটিং সাইকোলজি বিশেষজ্ঞ আরিফুল ইসলামের অফিশিয়াল ওয়েবসাইট। নিড (Need) এর সহ-প্রতিষ্ঠাতা। ইসলামিক জ্ঞান ও ব্যক্তিগত উন্নয়ন।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" dir="ltr">
      <body className={`${anekBangla.variable} antialiased`}>
        <FirebaseProvider>
          {children}
        </FirebaseProvider>
      </body>
    </html>
  );
}
