import LanguageSwitcher from "components/Translation/Translation";
import React from "react";
import { useState } from "react";
import styles from "./PortalHeader.module.css";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function PortalHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scroll = (value: string) => {
    const Element = document.getElementById(value);
    if (Element) {
      Element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <button
            className={styles.navLink}
            onClick={() => {
              toggleMenu();
              scroll("floor");
            }}
          >
            施設予約
          </button>
          <button
            className={styles.navLink}
            onClick={() => {
              toggleMenu();
              scroll("restaurant");
            }}
          >
            お店
          </button>
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
