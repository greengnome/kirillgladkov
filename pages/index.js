import Header from 'components/Header';
import Teaser from 'components/Teaser';

import classes from 'styles/Main.module.scss';

export default function Home() {
  return (
    <main id={classes.container}>
      <Header />
      <Teaser />
    </main>
  );
}
