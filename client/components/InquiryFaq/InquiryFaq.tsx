import React from "react";
import styles from "./InquirfFaq.module.css";
import { HelpCircle } from "lucide-react";
import Link from "next/link";

function InquiryFaq() {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>
        <HelpCircle className={styles.icon} /> お問い合わせ&FAQ
      </h2>
      <p className={styles.listItem}>よくある質問と回答をご確認ください。</p>
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
  );
}

export default InquiryFaq;
