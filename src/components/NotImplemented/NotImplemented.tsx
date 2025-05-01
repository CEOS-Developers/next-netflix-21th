import styles from './NotImplemented.module.css';

export default function NotImplemented() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <span className={styles.loader} />
    </div>
  );
}
