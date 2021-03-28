import Head from 'next/head';
import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Gladkov Kirill</title>
      </Head>
      <ThemeProvider attribute="data-theme" defaultTheme="system">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
