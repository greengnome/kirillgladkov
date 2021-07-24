import Image from 'next/image';
import Header from '../components/Header';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles['soon-wrapper']}>
        <div>
          <span className={styles['soon-title']}>Coming soon...</span>
        </div>
        <div className={styles['img-container']}>
          <Image
            src="/assets/programmer.webp"
            width={400}
            height={400}
            layout="responsive"
            alt="programmer"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}
