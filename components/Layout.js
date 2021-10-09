import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = ({ children }) => (
    <div>
        <motion.main
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: "linear" }}
            className="
                    flex flex-col items-start w-full
                    px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
                    pt-24 h-full
                "
        >
            {children}
        </motion.main>
    </div>
);

Layout.propTypes = {
    children: PropTypes.node,
};

export default Layout;
