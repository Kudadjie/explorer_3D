import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "3D Explorer",
  description: "A 3D model viewer for a school project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src="https://kit.fontawesome.com/6405d986fe.js" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
