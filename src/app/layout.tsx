import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { VoiceInputProvider } from "@/providers/Feature.povider";
// import VoiceInputButton from "@/components/custom/section/feature";
import { Header } from "@/layouts/header";
import { Footer } from "@/layouts/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BT solutions",
  description: "BT solutions",
  icons: {
    icon: "/BTSLogo.svg",
    shortcut: "/BTSLogo.svg",
    apple: "/BTSLogo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <VoiceInputProvider>
          <Header />
          {children}
          <Footer />
          {/* <VoiceInputButton /> */}
        </VoiceInputProvider>
      </body>
    </html>
  );
}
