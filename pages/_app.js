import { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

import Header from "components/Header";

import "styles/globals.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps, router }) {
  const url = `https://kirillgladkov.dev${router.route}`;

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <>
      <Head>
        <title>Gladkov Kirill</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="The personal website for Kirill Gladkov, developer." />
      </Head>
      <Header />
      <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} canonical={url} key={url} />
      </AnimatePresence>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.elementType]),
  pageProps: PropTypes.object,
  router: PropTypes.object,
};

export default MyApp;
