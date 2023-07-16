import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { NextPageContext, NextComponentType } from "next";

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
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
