import Image from 'next/image';

import classes from 'styles/Teaser.module.scss';

const Teaser = () => {
  return (
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
  );
};
export default Teaser;
