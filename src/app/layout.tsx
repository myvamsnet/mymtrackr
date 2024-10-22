import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simplify Your Financial Management with Mtrackr",
  description:
    "Say goodbye to someone must be stealing my money, stress and the Hassles of Traditional Money Management. Mtrackr allows you to effortlessly manage money with confidence and ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=" overflow-x-hidden ">
          <Provider>{children}</Provider>
        </main>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
