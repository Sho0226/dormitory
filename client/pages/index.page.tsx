import { useState } from "react";
import styles from "./index.module.css";
import AkabaneRecommendations from "components/Akabane/Akabane";
import Auth from "features/domitoryAuth/Auth";
import PortalHeader from "components/Header/PortalHeader";
import Floor from "components/Floor/Floor";
import Meal from "components/Meal/Meal";
import Rule from "components/RuleHighlight/Rule";
import InquiryFaq from "components/InquiryFaq/InquiryFaq";
import { Calendar } from "components/Calendar/Calendar";

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
            <Calendar />
            <Floor />
            <Meal />
            <AkabaneRecommendations />
            <Rule />
            <InquiryFaq />
          </main>
          <footer className={styles.footer}>
            &copy; 2025 AI House. For residents' use only.
          </footer>
        </>
      )}
    </div>
  );
}
