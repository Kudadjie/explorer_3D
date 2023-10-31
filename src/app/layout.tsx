import "./globals.css";

import { Heebo } from "next/font/google";
import Script from "next/script";

const heebo = Heebo({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

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
      <Script rel="preload" src="https://kit.fontawesome.com/6405d986fe.js" />
      {/* <link
        rel="prefetch"
        crossOrigin="anonymous"
        href="https://www.gstatic.com/draco/versioned/decoders/1.5.5/draco_wasm_wrapper.js"
      />
      <link
        rel="prefetch"
        crossOrigin="anonymous"
        href="https://www.gstatic.com/draco/versioned/decoders/1.5.5/draco_decoder.wasm"
      /> */}
      <body className={heebo.className}>{children}</body>
    </html>
  );
}
