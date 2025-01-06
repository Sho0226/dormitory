import { CalendarCheck } from "lucide-react";
import styles from "./Calendar.module.css";
import React from "react";
import Link from "next/link";

export function Calendar() {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>
        <CalendarCheck className={styles.icon} /> 東洋大学カレンダー
      </h2>
      <Link href="/calendar">
        <button className={styles.button}>学年暦を見る</button>
      </Link>
    </div>
  );
}
