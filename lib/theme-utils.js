import { DARK, LIGHT } from "constants/theme-modes";

const getThemeString = (isDark) => (isDark ? DARK : LIGHT);

export const isDark = () =>
  (localStorage && localStorage.theme === DARK) ||
  (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);

export const toggleTheme = (isDarkMode = false) => {
  localStorage.theme = getThemeString(!isDarkMode);
  if (localStorage.theme === DARK) {
    document.documentElement.classList.add(DARK);
  } else {
    document.documentElement.classList.remove(DARK);
  }
};

export const isDarkModeActive = () => {
  return process.browser && document.documentElement.classList.contains(DARK);
};

export const getModeSwitcherVariants = () => {
  return {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
    transition: { duration: 0.2 },
  };
};
