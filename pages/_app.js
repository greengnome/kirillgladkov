import PropTypes from 'prop-types';
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

MyApp.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.elementType,
  ]),
  pageProps: PropTypes.object,
};

export default MyApp;
