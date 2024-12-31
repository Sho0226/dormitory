'use client';

import {
  Bell,
  Book,
  Calendar,
  HelpCircle,
  Menu,
  Music,
  Users,
  Utensils,
  Video,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import styles from './index.module.css';

export default function AIHousePortal() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFloor, setSelectedFloor] = useState('2F');
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  const roomsByFloor: { [key: string]: { name: string; url: string }[] } = {
    '2F': [
      { name: 'tamokuteki1', url: 'https://docs.google.com/forms/d/1pby8T8OHJFTaU8eJLjFqUK7VXFnexKDsty8hrxS2osA/edit' },
      { name: 'tamokuteki2', url: 'https://docs.google.com/forms/d/1wL-meG9z7JsajwlBVNs59d8vNW62kQ_PFziOJx5vpOk/edit' },
      { name: 'study1', url: 'https://docs.google.com/forms/d/1ybgU0g83dxo532svQwoarlYohYnpz2NsD67tIx9X_ug/edit' },
      { name: 'study2', url: 'https://docs.google.com/forms/d/1rTOkAkuLmJaLhyXheUurmBTcU-UwKCKyz0iNYvXKJFI/edit' },
    ],
    '3F': [
      { name: 'tamokuteki1', url: 'https://docs.google.com/forms/d/e/1FAIpQLSdAQDlIkv7qL13JYnkUFKgXunIK18CEMNVgFpXRVcSFh5mHbg/viewform' },
      { name: 'tamokuteki2', url: 'https://docs.google.com/forms/d/e/1FAIpQLSdGDN5OChC4WxWq5_z9OzjYJ12P8bo4G63AV2vPGSu8Arm6jQ/viewform' },
      { name: 'study1', url: 'https://docs.google.com/forms/d/e/1FAIpQLSeUk1jdnvE9A4IMK-uOks9DkXVDb8hPmj32IOklfgBu-NawWA/viewform' },
      { name: 'study2', url: 'https://docs.google.com/forms/d/e/1FAIpQLSdLkgWD7-OgsqwwN_0zmrbINR5ICZRG9vb8fEoZ6dGUpBVAyQ/viewform' },
    ],
    '4F': [
      { name: 'tamokuteki1', url: 'https://docs.google.com/forms/d/1OsfZtNlfK2Gms9nrlnQsEKYlfyNxG6JRR1z8kYogOLo/edit' },
      { name: 'tamokuteki2', url: 'https://docs.google.com/forms/d/1DM2prD4anLzi2V54j1Nw3Nu58pP25ZF601OXEPNG5wo/edit' },
      { name: 'study1', url: 'https://docs.google.com/forms/d/1Q7tt0W5wXoBZWY0Y5_OgLX-yv-YeWr3yz87MorFOFsE/edit' },
      { name: 'study2', url: 'https://docs.google.com/forms/d/1cg1ko1flwgNeffOsFFojr3h4qItV-XHlij0nFFONg_Y/edit' },
    ],
    '5F': [
      { name: 'tamokuteki1', url: 'https://docs.google.com/forms/d/1Jx-zP3R14KRZoP2oSqhp1fYVHDJ8AXmBon80o_Hhyds/edit' },
      { name: 'tamokuteki2', url: 'https://docs.google.com/forms/d/1sIU7tQrD88wA9d1S3rhMLkVjLqtI6ca3MrofEzvEFrw/edit' },
      { name: 'study1', url: 'https://docs.google.com/forms/d/1UyjN74ViE6DK0h-FsXzGGdqo5EASL7_tIqA3xjgQSig/edit' },
      { name: 'study2', url: 'https://docs.google.com/forms/d/1cCRAnF8kBSD4TA8pPzHOBLowlVDB2UpJa7SYPV7A4_s/edit' },
    ],
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.mainTitle}>AI House Portal</h1>
        <button className={styles.menuButton} onClick={toggleMenu}>
          {isMenuOpen ? <X className={styles.menuIcon} /> : <Menu className={styles.menuIcon} />}
        </button>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <Link href="https://toyo.749.cc/aihouse/" className={styles.navLink} onClick={toggleMenu}>
            ホームページ
          </Link>
          <Link href="/announcements" className={styles.navLink} onClick={toggleMenu}>
            お知らせ
          </Link>
          <Link href="/facilities" className={styles.navLink} onClick={toggleMenu}>
            施設予約
          </Link>
          <Link href="/events" className={styles.navLink} onClick={toggleMenu}>
            イベント
          </Link>
          <Link href="/rules" className={styles.navLink} onClick={toggleMenu}>
            寮則
          </Link>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <Bell className={styles.icon} />
            重要なお知らせ
          </h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>期末試験の静粛時間について（6/1-6/14）</li>
            <li className={styles.listItem}>夏季休暇中の寮の利用について</li>
            <li className={styles.listItem}>新入寮生歓迎会のお知らせ（4/10）</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <Calendar className={styles.icon} />
            施設予約
          </h2>
          <div className={styles.floorSelection}>
            {['2F', '3F', '4F', '5F'].map((floor) => (
              <button
                key={floor}
                className={`${styles.floorButton} ${selectedFloor === floor ? styles.activeFloor : ''}`}
                onClick={() => setSelectedFloor(floor)}
              >
                {floor}
              </button>
            ))}
          </div>

          {/* 施設ボタン */}
          <div className={styles.facilityGrid}>
            {/* 選択した階に応じた部屋を表示 */}
            {roomsByFloor[selectedFloor].map((room) => (
              <a
                key={room.name}
                href={room.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.facilityButton}
              >
                <Users className={styles.facilityIcon} />
                <span className={styles.facilityName}>{room.name}</span>
              </a>
            ))}

          </div>
          <p className={styles.note}>※予約できる部屋は最大２時間使える(目安)</p>
          <button
            className={styles.button}
            onClick={() =>
              window.open(
                'https://script.google.com/a/macros/iniad.org/s/AKfycbxIK0Fi0F52y6RZifYt8MtL9FB-HXNKMboxGZSHmhhWOpFVnfdh6jLcEupz7XSlBLe-/exec?room=AI_STUDIO',
                '_blank',
              )
            }
          >
            スタジオ予約フォーム
          </button>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <Utensils className={styles.icon} />
            食事関連
          </h2>
          <button
            className={styles.button}
            onClick={() =>
              window.open(
                'https://docs.google.com/forms/d/e/1FAIpQLSd14yq1hROVw4VX5g38JBcxUdjLKPugGD2hWRKu3wsVQiWqDQ/viewform',
                '_blank',
              )
            }
          >
            お弁当取り置きフォーム
          </button>
          <button
            className={`${styles.button} ${styles.secondaryButton}`}
            onClick={() =>
              window.open(
                'https://docs.google.com/forms/d/e/1FAIpQLSdXDaIyKGLLflPh4c1SH1NdzYdKf8ltKL5DLmdbq2V2VEdYpg/viewform',
                '_blank',
              )
            }
          >
            欠食届
          </button>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <Users className={styles.icon} />
            イベント情報
          </h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>6/20 留学生交流会</li>
            <li className={styles.listItem}>7/1 七夕飾り付け</li>
            <li className={styles.listItem}>7/15 夏季BBQパーティー</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <Book className={styles.icon} />
            寮則ハイライト
          </h2>
          <ul className={`${styles.list} ${styles.rulesList}`}>
            <li className={styles.listItem}>門限：平日 23:00 / 休日 24:00</li>
            <li className={styles.listItem}>静粛時間：22:00 - 7:00</li>
            <li className={styles.listItem}>来客制限：共用エリアのみ（要事前申請）</li>
          </ul>
          <Link href="/rules">
            <button className={`${styles.button} ${styles.outlineButton}`}>寮則全文を見る</button>
          </Link>
          <button
            className={styles.button}
            onClick={() =>
              window.open(
                'https://docs.google.com/forms/d/e/1FAIpQLSfc5U6jTvsNvotFIiWqHE3RyinwHZU2y8cT4PQDXhURaOxQ6w/viewform',
                '_blank',
              )
            }
          >
            外泊届を提出
          </button>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <HelpCircle className={styles.icon} />
            お問い合わせ&FAQ
          </h2>
          <p className={styles.listItem}>よくある質問と回答をご確認ください。</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>入居条件について</li>
            <li className={styles.listItem}>セキュリティーとサポート</li>
            <li className={styles.listItem}>食事プランについて</li>
            <li className={styles.listItem}>施設・設備について</li>
            <li className={styles.listItem}>教育プログラムについて</li>
          </ul>
          <Link href="https://docs.google.com/forms/d/1Ns6fjpilKiGcxBmMMi1kscd-0rcyBezzEpywZYGqMRU/edit">
            <button className={styles.button}>お問い合わせフォーム</button>
          </Link>
          <Link href="/faq">
            <button className={`${styles.button} ${styles.outlineButton}`}>FAQ全文を見る</button>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>&copy; 2023 AI House. For residents' use only.</footer>
    </div>
  );
}
