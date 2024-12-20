import { Bell } from "lucide-react";
import { useState } from "react";
import styles from "./index.module.css";
import AkabaneRecommendations from "components/Akabane/Akabane";
import Auth from "features/domitoryAuth/Auth";
import PortalHeader from "components/Header/PortalHeader";
import Floor from "components/Floor/Floor";
import Meal from "components/Meal/Meal";
import Rule from "components/RuleHighlight/Rule";

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
            <AkabaneRecommendations />
            <Rule />
          </main>
          <footer className={styles.footer}>
            &copy; 2024 AI House. For residents' use only.
          </footer>
        </>
      )}
    </div>
  );
}
