import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { getModeSwitcherVariants, isDark, isDarkModeActive, toggleTheme } from "lib/theme-utils";

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
                {darkModeActive ? (
                    <Image
                        src="/assets/light_mode_white_24dp.svg"
                        width="20"
                        height="20"
                        alt="theme-dark"
                    />
                ) : (
                    <Image
                        src="/assets/dark_mode_black_24dp.svg"
                        width="20"
                        height="20"
                        alt="theme-dark"
                    />
                )}
            </motion.button>
        </AnimatePresence>
    );
};

export default DarkModeToggle;
