import styles from 'styles/Header.module.css';

import ThemeChanger from 'components/ThemeChanger';

const Header = () => {
  return (
    <header className={styles.header}>
      <ThemeChanger />
    </header>
  );
};

export default Header;
