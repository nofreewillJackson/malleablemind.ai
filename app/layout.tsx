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

        {/* Favicon for most browsers */}
        <link rel="icon" type="image/png" sizes="32x32" href="app/favicon-32x32.png" /> 

        {/* Favicon for Apple devices */}
        <link rel="apple-touch-icon" sizes="180x180" href="app/apple-touch-icon-152x152.png" /> 
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}