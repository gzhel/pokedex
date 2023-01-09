import React, { FC } from "react";
import { default as Head } from "./head";
import { default as Header } from "@layouts/header/header.component";
import { default as Footer } from "@layouts/footer/footer.component";
import { default as Main } from "@layouts/main/main.component";
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
        {/* @ts-expect-error Server Component */}
        <Header />
        <Main children={props.children} />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
