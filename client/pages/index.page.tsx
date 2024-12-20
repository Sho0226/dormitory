import { Bell, Book, HelpCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import styles from "./index.module.css";
import AkabaneRecommendations from "components/Akabane/Akabane";
import Auth from "features/domitoryAuth/Auth";
import PortalHeader from "components/Header/PortalHeader";
import Floor from "components/Floor/Floor";
import Meal from "components/Meal/Meal";

//eslint-disable-next-line
export default function AIHousePortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className={styles.container}>
      {!isLoggedIn ? (
        <Auth setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <>
          <PortalHeader />
          <main className={styles.main}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>
                <Bell className={styles.icon} />
                重要なお知らせ
              </h2>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  期末試験の静粛時間について（6/1-6/14）
                </li>
                <li className={styles.listItem}>
                  夏季休暇中の寮の利用について
                </li>
                <li className={styles.listItem}>
                  新入寮生歓迎会のお知らせ（4/10）
                </li>
              </ul>
            </div>
            <Floor />
            <Meal />

            <div className={styles.card}>
              <AkabaneRecommendations />
            </div>

            <div className={styles.card}>
              <h2 className={styles.cardTitle}>
                <Book className={styles.icon} /> 寮則ハイライト
              </h2>
              <ul className={`${styles.list} ${styles.rulesList}`}>
                <li className={styles.listItem}>
                  門限：平日 23:00 / 休日 24:00
                </li>
                <li className={styles.listItem}>静粛時間：22:00 - 7:00</li>
                <li className={styles.listItem}>
                  来客制限：共用エリアのみ（要事前申請）
                </li>
              </ul>
              <Link href="/rules">
                <button className={`${styles.button} ${styles.outlineButton}`}>
                  寮則全文を見る
                </button>
              </Link>
              <button
                className={styles.button}
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSfc5U6jTvsNvotFIiWqHE3RyinwHZU2y8cT4PQDXhURaOxQ6w/viewform",
                    "_blank",
                  )
                }
              >
                外泊届を提出
              </button>
            </div>

            <div className={styles.card}>
              <h2 className={styles.cardTitle}>
                <HelpCircle className={styles.icon} /> お問い合わせ&FAQ
              </h2>
              <p className={styles.listItem}>
                よくある質問と回答をご確認ください。
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>入居条件について</li>
                <li className={styles.listItem}>セキュリティーとサポート</li>
                <li className={styles.listItem}>食事プランについて</li>
                <li className={styles.listItem}>施設・設備について</li>
                <li className={styles.listItem}>教育プログラムについて</li>
              </ul>
              <button
                className={styles.button}
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSd14yq1hROVw4VX5g38JBcxUdjLKPugGD2hWRKu3wsVQiWqDQ/viewform",
                    "_blank",
                  )
                }
              >
                寮生向けお問い合わせフォーム
              </button>
              <Link href="/faq">
                <button className={`${styles.button} ${styles.outlineButton}`}>
                  FAQ全文を見る
                </button>
              </Link>
            </div>
          </main>
          <footer className={styles.footer}>
            &copy; 2024 AI House. For residents' use only.
          </footer>
        </>
      )}
    </div>
  );
}
