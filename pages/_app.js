import Head from 'next/head';
import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Gladkov Kirill</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Kirill`s Gladkov personal site."
        ></meta>
      </Head>
      <ThemeProvider attribute="data-theme" defaultTheme="system">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
