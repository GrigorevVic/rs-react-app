import styles from './Toggler.module.css';
import { useTheme } from '../../hooks/useTheme';

export const ThemeToggler = () => {
  const { toggleTheme } = useTheme();

  const handlerThemeToggler = (): void => {
    toggleTheme();
  };

  return (
    <div className={styles['theme-button']}>
      <button className={styles.toggler} onClick={handlerThemeToggler}></button>
    </div>
  );
};
