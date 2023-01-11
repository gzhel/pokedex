import React, { FC } from "react";
import { default as Head } from "./head";
import { default as Header } from "@layouts/header/header.component";
import { default as Footer } from "@layouts/footer/footer.component";
import { default as Main } from "@layouts/main/main.component";
import "./globals.css";
import { TRPCProvider } from "@utils/hooks/trpc";

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
        <TRPCProvider>
          {/* @ts-expect-error Server Component */}
          <Header />
          <Main children={props.children} />
          <Footer />
        </TRPCProvider>
      </body>
    </html>
  );
};

export default RootLayout;
