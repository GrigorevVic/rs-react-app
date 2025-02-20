import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Star Wars Сharacters</h1>
    </header>
  );
}
