import styles from './Button.module.css';
export const Button = ({ onClick }) => (
  <button className={styles.loadbutn} type="button" onClick={onClick}>
    Load more
  </button>
);
