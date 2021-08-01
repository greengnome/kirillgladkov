import styles from 'styles/Header.module.scss';

import ThemeChanger from 'components/ThemeChanger';
import Navigation from 'components/Navigation';

const Header = () => {
  return (
    <header className={styles.header}>
      <ThemeChanger />
      <Navigation />
    </header>
  );
};

export default Header;
