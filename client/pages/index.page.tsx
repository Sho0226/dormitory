import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <h1 className={styles.title}>Domitory</h1>
      </div>
      <div className={styles.box2}>
        <h2 className={styles.title}>おしらせ</h2>
        <p className={styles.paragraph}>
          新しいルールやイベント情報を
          <a href="http://localhost:3000/information" className={styles.link}>
            こちら
          </a>
          で確認できます。
        </p>
      </div>
      <div className={styles.sidebarContainer}>
        <div className={styles.sidebar}>
          <h3 className={styles.title}>予約</h3>
          施設の予約は
          <a href="http://localhost:3000/reservation" className={styles.link}>
            こちら
          </a>
          から行えます。
        </div>
        <div className={styles.sidebarRight}>
          <h3 className={styles.title}>ルール</h3>
          <p className={styles.paragraph}>
            寮で守るべきルールは
            <a href="http://localhost:3000/rule" className={styles.link}>
              こちら
            </a>
            を確認してください。
          </p>
        </div>
      </div>
      <button className={styles.button}>
        <a href="http://localhost:3000/more">もっと詳しく</a>
      </button>{' '}
      {/* クラスを追加 */}
    </div>
  );
};

export default Home;
