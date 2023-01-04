import React from "react";
import Head from "./head";
import "./globals.css";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <Head />
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
