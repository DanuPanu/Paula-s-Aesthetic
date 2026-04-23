import type { Metadata } from "next";
import { Quicksand, WindSong } from "next/font/google"; // Tuodaan WindSong
import "./globals.css";

const quicksand = Quicksand({ 
  subsets: ["latin"],
  variable: '--font-quicksand'
});

// Määritellään WindSong (painot 400 tai 500 ovat yleisimmät)
const windSong = WindSong({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: '--font-windsong',
});

export const metadata: Metadata = {
  title: "Paula’s Aesthetic",
  description: "Kauneus alkaa luottamuksesta ja ammattitaidosta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fi"
      // Lisätään molemmat muuttujat html-tagiin
      className={`${quicksand.variable} ${windSong.variable} font-sans antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}