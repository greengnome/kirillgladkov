import ThemeChanger from "components/ThemeChanger";
import Navigation from "components/Navigation";
import Link from "components/NoScrollLink";

const Header = () => {
    return (
        <header
            className="
        w-full fixed bg-white flex flex-row justify-between items-center
        h-16 md:h-20 border-b border-gray-200 z-50
        px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
        dark:bg-gray-800 dark:border-gray-600
        text-black dark:text-white"
        >
            <Link href="/">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>
                    <span className="show sm:hide">KG</span>
                    <span className="hide sm:show">Kirill Gladkov</span>
                </a>
            </Link>
            <div className="flex flex-row items-center">
                <Navigation />
                <ThemeChanger />
            </div>
        </header>
    );
};

export default Header;
