import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  getModeSwitcherVariants,
  isDark,
  isDarkModeActive,
  toggleTheme,
} from "lib/theme-utils";

const variants = getModeSwitcherVariants();

const DarkModeToggle = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    toggleTheme(isDarkMode);
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    setDarkMode(isDark());
  }, []);

  const darkModeActive = isDarkModeActive();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.button
        className="text-2xl sm:text-3xl text-yellow-400 dark:text-yellow-300 focus:outline-none"
        onClick={toggleMode}
        key={darkModeActive ? "dark-icon" : "light-icon"}
        initial={variants.initial}
        animate={variants.animate}
        exit={variants.exit}
        transition={variants.transition}
      >
        {darkModeActive ? "🌙" : "🌤️"}
      </motion.button>
    </AnimatePresence>
  );
};

export default DarkModeToggle;
