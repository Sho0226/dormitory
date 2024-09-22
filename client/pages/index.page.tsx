'use client';

import { Bell, Book, Calendar, Menu, Music, Users, Utensils, Video, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import styles from './index.module.css';

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.mainTitle}>AI House Portal</h1>
        <button className={styles.menuButton} onClick={toggleMenu}>
          {isMenuOpen ? <X className={styles.menuIcon} /> : <Menu className={styles.menuIcon} />}
        </button>
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
      </header>

      <main className={styles.main}>
        <Card className={styles.card}>
          <CardHeader>
            <CardTitle className={styles.cardTitle}>
              <Bell className={styles.icon} />
              重要なお知らせ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className={styles.list}>
              <li className={styles.listItem}>期末試験の静粛時間について（6/1-6/14）</li>
              <li className={styles.listItem}>夏季休暇中の寮の利用について</li>
              <li className={styles.listItem}>新入寮生歓迎会のお知らせ（4/10）</li>
            </ul>
          </CardContent>
        </Card>

        <Card className={styles.card}>
          <CardHeader>
            <CardTitle className={styles.cardTitle}>
              <Calendar className={styles.icon} />
              施設予約
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={styles.facilityGrid}>
              {['tamokuteki1', 'tamokuteki2', 'study1', 'study2', 'AI-Stadio', 'Music Room'].map(
                (room) => (
                  <Button key={room} variant="outline" className={styles.facilityButton}>
                    {room === 'AI-Stadio' ? (
                      <Video className={styles.facilityIcon} />
                    ) : room === 'Music Room' ? (
                      <Music className={styles.facilityIcon} />
                    ) : (
                      <Users className={styles.facilityIcon} />
                    )}
                    <span className={styles.facilityName}>{room}</span>
                  </Button>
                ),
              )}
            </div>
            <p className={styles.note}>※予約できる部屋は最大２時間使える(目安)</p>
            <Button
              className={styles.button}
              onClick={() =>
                window.open(
                  'https://script.google.com/a/macros/iniad.org/s/AKfycbxIK0Fi0F52y6RZifYt8MtL9FB-HXNKMboxGZSHmhhWOpFVnfdh6jLcEupz7XSlBLe-/exec?room=AI_STUDIO',
                  '_blank',
                )
              }
            >
              スタジオ予約フォーム
            </Button>
          </CardContent>
        </Card>

        <Card className={styles.card}>
          <CardHeader>
            <CardTitle className={styles.cardTitle}>
              <Utensils className={styles.icon} />
              食事関連
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button
              className={styles.button}
              onClick={() =>
                window.open(
                  'https://docs.google.com/forms/d/e/1FAIpQLSd14yq1hROVw4VX5g38JBcxUdjLKPugGD2hWRKu3wsVQiWqDQ/viewform',
                  '_blank',
                )
              }
            >
              お弁当取り置きフォーム
            </Button>
            <Button
              className={`${styles.button} ${styles.secondaryButton}`}
              onClick={() =>
                window.open(
                  'https://docs.google.com/forms/d/e/1FAIpQLSdXDaIyKGLLflPh4c1SH1NdzYdKf8ltKL5DLmdbq2V2VEdYpg/viewform',
                  '_blank',
                )
              }
            >
              欠食届
            </Button>
          </CardContent>
        </Card>

        <Card className={styles.card}>
          <CardHeader>
            <CardTitle className={styles.cardTitle}>
              <Users className={styles.icon} />
              イベント情報
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className={styles.list}>
              <li className={styles.listItem}>6/20 留学生交流会</li>
              <li className={styles.listItem}>7/1 七夕飾り付け</li>
              <li className={styles.listItem}>7/15 夏季BBQパーティー</li>
            </ul>
          </CardContent>
        </Card>

        <Card className={styles.card}>
          <CardHeader>
            <CardTitle className={styles.cardTitle}>
              <Book className={styles.icon} />
              寮則ハイライト
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className={`${styles.list} ${styles.rulesList}`}>
              <li className={styles.listItem}>門限：平日 23:00 / 休日 24:00</li>
              <li className={styles.listItem}>静粛時間：22:00 - 7:00</li>
              <li className={styles.listItem}>来客制限：共用エリアのみ（要事前申請）</li>
            </ul>
            <Button className={`${styles.button} ${styles.outlineButton}`}>寮則全文を見る</Button>
            <Button
              className={styles.button}
              onClick={() =>
                window.open(
                  'https://docs.google.com/forms/d/e/1FAIpQLSfc5U6jTvsNvotFIiWqHE3RyinwHZU2y8cT4PQDXhURaOxQ6w/viewform',
                  '_blank',
                )
              }
            >
              外泊届を提出
            </Button>
          </CardContent>
        </Card>
      </main>

      <footer className={styles.footer}>&copy; 2023 AI House. For residents' use only.</footer>
    </div>
  );
}
