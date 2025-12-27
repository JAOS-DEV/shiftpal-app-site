import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShiftPal - Track Shifts, Calculate Pay | Shift Tracker App",
  description:
    "Simple shift tracking and pay calculator for hourly workers. Track hours, breaks, and earnings. Available on iOS.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "ShiftPal - Shift Tracker & Pay Calculator",
    description: "Track your shifts and calculate pay with ShiftPal",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


