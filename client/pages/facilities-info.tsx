import styles from './index.module.css'; // 同じスタイルを使用

export default function FacilitiesInfo() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.mainTitle}>施設・設備について</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>施設の詳細</h2>
          <p className={styles.listItem}>
            AI Houseの施設や設備に関する情報はこちらでご確認いただけます。
          </p>
        </div>
      </main>
      <footer className={styles.footer}>
        &copy; 2023 AI House. 居住者専用。
      </footer>
    </div>
  );
}
