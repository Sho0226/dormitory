import LanguageSwitcher from "components/Translation/Translation";
import React from "react";
import { useState } from "react";
import styles from "./PortalHeader.module.css";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function PortalHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      {" "}
      <header className={styles.header}>
        <h1 className={styles.mainTitle}>AI House Portal</h1>
        <button className={styles.menuButton} onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className={styles.menuIcon} />
          ) : (
            <Menu className={styles.menuIcon} />
          )}
        </button>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <Link
            href="https://toyo.749.cc/aihouse/"
            className={styles.navLink}
            onClick={toggleMenu}
          >
            ホームページ
          </Link>
          <Link
            href="/announcements"
            className={styles.navLink}
            onClick={toggleMenu}
          >
            お知らせ
          </Link>
          <Link
            href="/facilities"
            className={styles.navLink}
            onClick={toggleMenu}
          >
            施設予約
          </Link>
          <Link href="/events" className={styles.navLink} onClick={toggleMenu}>
            イベント
          </Link>
          <Link href="/rule" className={styles.navLink} onClick={toggleMenu}>
            寮則
          </Link>
          <LanguageSwitcher />
        </nav>
      </header>
    </div>
  );
}

export default PortalHeader;
