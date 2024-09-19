import { Bell, Book, Calendar, Menu, Users, Utensils, Wifi, X } from 'lucide-react';
import { useState } from 'react';
import styles from './index.module.css';

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.mainTitle}>Dorm Portal</h1>
        <button className={styles.menuButton} onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <a href="#announcements" className={styles.navLink} onClick={toggleMenu}>
          お知らせ
        </a>
        <a href="#facilities" className={styles.navLink} onClick={toggleMenu}>
          施設予約
        </a>
        <a href="#events" className={styles.navLink} onClick={toggleMenu}>
          イベント
        </a>
        <a href="#rules" className={styles.navLink} onClick={toggleMenu}>
          寮則
        </a>
      </nav>

      <main className={styles.main}>
        <section id="announcements" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Bell className={styles.icon} />
            重要なお知らせ
          </h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>期末試験の静粛時間について（6/1-6/14）</li>
            <li className={styles.listItem}>夏季休暇中の寮の利用について</li>
            <li className={styles.listItem}>新入寮生歓迎会のお知らせ（4/10）</li>
          </ul>
        </section>

        <section id="facilities" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Calendar className={styles.icon} />
            施設予約
          </h2>
          <div className={styles.facilityGrid}>
            <button className={styles.facilityButton}>
              <Users className={styles.facilityIcon} />
              共用スペース
            </button>
            <button className={styles.facilityButton}>
              <Utensils className={styles.facilityIcon} />
              キッチン
            </button>
            <button className={styles.facilityButton}>
              <Wifi className={styles.facilityIcon} />
              ミーティングルーム
            </button>
          </div>
        </section>

        <section id="events" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Users className={styles.icon} />
            イベント情報
          </h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>6/20 留学生交流会</li>
            <li className={styles.listItem}>7/1 七夕飾り付け</li>
            <li className={styles.listItem}>7/15 夏季BBQパーティー</li>
          </ul>
        </section>

        <section id="rules" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Book className={styles.icon} />
            寮則ハイライト
          </h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>門限：平日 23:00 / 休日 24:00</li>
            <li className={styles.listItem}>静粛時間：22:00 - 7:00</li>
            <li className={styles.listItem}>来客制限：共用エリアのみ（要事前申請）</li>
          </ul>
          <button className={styles.button}>寮則全文を見る</button>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2023 University Dormitory. For residents' use only.</p>
      </footer>
    </div>
  );
}
