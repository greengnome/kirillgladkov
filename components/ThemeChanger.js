import Image from 'next/image';
import { useTheme } from 'next-themes';

import { DARK, LIGHT } from 'constants/theme-modes';
import styles from 'styles/ThemeChanger.module.scss';

const ThemeChanger = () => {
  const { setTheme, theme } = useTheme();

  const imgPath = `/assets/${
    theme === DARK ? 'light_mode_white_24dp.svg' : 'dark_mode_black_24dp.svg'
  }`;

  const changeTheme = () => {
    if (theme === LIGHT) {
      setTheme(DARK);
    } else {
      setTheme(LIGHT);
    }
  };

  return (
    <button
      className={styles.themeButton}
      type="button"
      aria-label="theme-button"
    >
      <Image
        src={imgPath}
        width={25}
        height={25}
        onClick={changeTheme}
        alt="mode-img"
      />
    </button>
  );
};

export default ThemeChanger;
