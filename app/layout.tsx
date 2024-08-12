import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Surviving the hellscape of late-stage capitalism",
  description: "Jackson & Friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex items-center justify-center py-6">
          <Image
            src="/logo.svg" 
            alt="Logo"
            width={100} 
            height={100}
          />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
