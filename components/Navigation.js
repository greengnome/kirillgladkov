import classes from 'styles/Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <ul className={classes.menu}>
        <li className={classes['menu--item']}>Home</li>
        <li className={classes['menu--item']}>Experience</li>
        <li className={classes['menu--item']}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
