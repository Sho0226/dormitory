import { Layout } from 'layouts/Layout';
import styles from './index.module.css';

const Home = () => {
  return (
    <Layout
      render={() => (
        <div className={styles.container}>
          {/* 既存のコンテンツ */}
          <div className={styles.box1}>タイトル</div>
          <div className={styles.box2}>おしらせ</div>

          {/* 枠2の下に左右の枠を配置 */}
          <div className={styles.sidebarContainer}>
            <div className={styles.sidebar}>予約</div>

            <div className={styles.sidebarRight}>ルール</div>
          </div>
        </div>
      )}
    />
  );
};

export default Home;
