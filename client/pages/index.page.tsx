import {
  Bell,
  Book,
  Calendar,
  HelpCircle,
  Music,
  Users,
  Utensils,
  Video,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import styles from "./index.module.css";
import AkabaneRecommendations from "components/Akabane/Akabane";
import Auth from "features/domitoryAuth/Auth";
import PortalHeader from "components/Header/PortalHeader";

//eslint-disable-next-line
export default function AIHousePortal() {
  const [selectedFloor, setSelectedFloor] = useState("2F");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // メニューのトグル

  const getClassName = (selectedFloor: string, floor: string) => {
    return selectedFloor === floor ? styles.isActive : styles.notActive;
  };

  // フロアごとの部屋リスト
  const roomsByFloor: { [key: string]: string[] } = {
    "2F": ["多目的室1", "多目的室2", "学習室1", "学習室2"],
    "3F": ["多目的室1", "多目的室2", "学習室1", "学習室2"],
    "4F": ["多目的室1", "多目的室2", "学習室1", "学習室2"],
    "5F": ["多目的室1", "多目的室2", "学習室1", "学習室2"],
  };

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

            <div className={styles.card}>
              <h2 className={styles.cardTitle}>
                <Calendar className={styles.icon} />
                施設予約
              </h2>
              <div className={styles.floorSelection}>
                {["2F", "3F", "4F", "5F"].map((floor) => (
                  <button
                    key={floor}
                    className={`${styles.floorButton} ${selectedFloor === floor ? styles.activeFloor : ""}`}
                    onClick={() => setSelectedFloor(floor)}
                  >
                    {floor}
                  </button>
                ))}
              </div>
              {["2F", "3F", "4F", "5F"].map((floor) => (
                <div
                  className={`${floor} ${getClassName(selectedFloor, floor)}`}
                >
                  {/*  選択した階に応じた部屋を表示  */}
                  {roomsByFloor[selectedFloor].map((room, index) => (
                    <button
                      key={`${selectedFloor}-${index}`}
                      className={styles.facilityButton}
                    >
                      <Users className={styles.facilityIcon} />
                      <span className={styles.facilityName}>{room}</span>
                    </button>
                  ))}
                </div>
              ))}
              {/* 常に表示されるAI-StudioとMusic Room  */}
              <div className={styles.floorSelection}>
                <button className={styles.facilityButton}>
                  <Video className={styles.facilityIcon} />
                  <span className={styles.facilityName}>AI-Studio</span>
                </button>
                <button className={styles.facilityButton}>
                  <Music className={styles.facilityIcon} />
                  <span className={styles.facilityName}>Music Room</span>
                </button>
              </div>
              <p className={styles.note}>
                ※予約できる部屋は最大２時間使える(目安)
              </p>
              <button
                className={styles.button}
                onClick={() =>
                  window.open(
                    "https://script.google.com/a/macros/iniad.org/s/AKfycbxIK0Fi0F52y6RZifYt8MtL9FB-HXNKMboxGZSHmhhWOpFVnfdh6jLcEupz7XSlBLe-/exec?room=AI_STUDIO",
                    "_blank",
                  )
                }
              >
                スタジオ予約フォーム
              </button>
            </div>

            <div className={styles.card}>
              <h2 className={styles.cardTitle}>
                <Utensils className={styles.icon} /> 食事関連
              </h2>
              <button
                className={styles.button}
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSd14yq1hROVw4VX5g38JBcxUdjLKPugGD2hWRKu3wsVQiWqDQ/viewform",
                    "_blank",
                  )
                }
              >
                お弁当取り置きフォーム
              </button>
              <button
                className={`${styles.button} ${styles.secondaryButton}`}
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSdXDaIyKGLLflPh4c1SH1NdzYdKf8ltKL5DLmdbq2V2VEdYpg/viewform",
                    "_blank",
                  )
                }
              >
                欠食届
              </button>
            </div>

            <div className={styles.card}>
              <h2 className={styles.cardTitle}>
                <Users className={styles.icon} /> 赤羽の美味しいお店
              </h2>
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
