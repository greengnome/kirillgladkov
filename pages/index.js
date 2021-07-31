import Image from 'next/image';
import Header from 'components/Header';

import classes from 'styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Header />
      <div className={classes['soon-wrapper']}>
        <div>
          <span className={classes['soon-title']}>Coming soon...</span>
        </div>
        <div className={classes['img-container']}>
          <Image
            src="/assets/programmer.webp"
            width={400}
            height={400}
            className={classes.programmer}
            layout="responsive"
            alt="programmer"
          />
        </div>
      </div>
    </>
  );
}
