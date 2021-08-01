/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { useState } from 'react';
import classes from 'styles/Navigation.module.scss';

const Navigation = () => {
  const [active, setActive] = useState(false);
  const onMenuClick = () => {
    setActive((prev) => !prev);
  };
  return (
    <nav className={classes.navbar}>
      <ul className={`${classes['nav-menu']} ${active && classes.active}`}>
        <li className={classes['nav-item']}>
          <Link href="/">
            <a className={classes['nav-link']}>Home</a>
          </Link>
        </li>
        <li className={classes['nav-item']}>
          <Link href="/about">
            <a className={classes['nav-link']}>About</a>
          </Link>
        </li>
        <li className={classes['nav-item']}>
          <Link href="/contact">
            <a className={classes['nav-link']}>Contact</a>
          </Link>
        </li>
      </ul>
      <button
        type="button"
        aria-label="navigation-menu-button"
        className={`${classes.hamburger} ${active && classes.active}`}
        onClick={onMenuClick}
      >
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
      </button>
    </nav>
  );
};

export default Navigation;
