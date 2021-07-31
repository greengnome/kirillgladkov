import classes from 'styles/Navigation.module.scss';

const Navigation = () => (
  <nav className={classes.navigation}>
    <ul className={classes.menu}>
      <li className={classes['menu--item']}>Home</li>
      <li className={classes['menu--item']}>Experience</li>
      <li className={classes['menu--item']}>Contact</li>
    </ul>
    <div onClick={() => {}}>dd</div>
  </nav>
);

export default Navigation;
