import React from "react";
import styles from "./Rule.module.css";
import { Book } from "lucide-react";
import Link from "next/link";

function Rule() {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>
        <Book className={styles.icon} /> 寮則ハイライト
      </h2>
      <ul className={`${styles.list} ${styles.rulesList}`}>
        <li className={styles.listItem}>門限：平日 23:00 / 休日 24:00</li>
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
  );
}

export default Rule;
