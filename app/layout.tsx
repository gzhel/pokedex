import React, { FC } from "react";
import { default as Head } from "./head";
import { default as Header } from "@layouts/header";
import { default as Footer } from "@layouts/footer";
import { default as MainLayout } from "@layouts/main";
import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = (props) => {
  return (
    <html>
      <Head>
        <title>Pokedex</title>
      </Head>
      <body>
        <Header />
        <MainLayout children={props.children} />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
