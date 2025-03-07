import styles from './Loader.module.css';

export function Loader() {
  return (
    <div className={styles['loader-container']}>
      <div id="loader" className={styles.loader}></div>
    </div>
  );
}
