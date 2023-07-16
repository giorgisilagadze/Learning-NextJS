import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps, NextComponentType } from "next/app";
import type { NextPageContext } from "next";
import Head from "next/head";

interface ComponentWithLayout
  extends NextComponentType<NextPageContext, any, any> {
  getLayout?: (page: JSX.Element) => JSX.Element;
}

export default function App({ Component, pageProps }: AppProps) {
  const ComponentWithLayout = Component as ComponentWithLayout;

  if (ComponentWithLayout.getLayout) {
    return ComponentWithLayout.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Head>
        <title>Learning Next.js</title>
        <meta name="description" content="Learning Next.js" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
