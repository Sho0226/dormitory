import React from "react";
import styles from "./Meal.module.css";
import { Utensils } from "lucide-react";

function Meal() {
  return (
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
  );
}

export default Meal;
