import Image from 'next/image';
import { useTheme } from 'next-themes';

import styles from './../styles/ThemeChanger.module.css';

const ThemeChanger = () => {
  const { setTheme, theme } = useTheme();

  const imgPath = `/assets/${
    theme === 'dark' ? 'light_mode_white_24dp.svg' : 'dark_mode_black_24dp.svg'
  }`;

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
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
        width={18}
        height={18}
        onClick={changeTheme}
        alt="mode-img"
      />
    </button>
  );
};

export default ThemeChanger;
