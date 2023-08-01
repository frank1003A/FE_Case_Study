import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BaseLayout from "./layouts/BaseLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metrix",
  description: "Frontend Engineer Case Study",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
