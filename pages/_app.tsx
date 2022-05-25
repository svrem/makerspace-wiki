import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Makerspace Wiki" />
        <meta name="keywords" content="makerspace, wiki" />
        <meta name="author" content="Makerspace" />
        <meta httpEquiv="content-language" content="nl" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
