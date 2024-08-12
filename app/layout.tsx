import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
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
      <Head>
        <title>Surviving the hellscape of late-stage capitalism</title>
        <meta name="description" content="Jackson & Friends" />
        <link rel="icon" href="/favicon.ico" /> {/* For compatibility */}
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
