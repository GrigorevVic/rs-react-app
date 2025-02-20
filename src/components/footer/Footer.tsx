import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/GrigorevVic"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub: GrigorevVic
      </a>
    </footer>
  );
}
