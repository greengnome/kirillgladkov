import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles['soon-wrapper']}>
      <div>
        <span className={styles['soon-title']}>Coming soon...</span>
      </div>
      <div className={styles['img-container']}>
        <picture>
          <source
            className={styles['programmer']}
            srcSet="assets/programmer.webp"
          />
          <img
            className={styles['programmer']}
            src="assets/programmer.jpg"
            width="100%"
            alt="programmer"
          />
        </picture>
      </div>
    </div>
  );
}
