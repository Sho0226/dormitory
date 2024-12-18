import React, { useState } from "react";
import styles from "./Akabane.module.css";
import { apiClient } from "utils/apiClient";

const AkabaneRecommendations: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  //eslint-disable-next-line
  const fetchRecommendations = async () => {
    setLoading(true);
    setError(null);
    setResponse("");

    try {
      const res = await apiClient.openai.post({
        body: { question: "赤羽でおすすめの美味しいお店を教えてください。" },
      });

      if (!res.body.response) {
        throw new Error("Failed to fetch recommendations.");
      } else {
        setResponse(res.body.response);
      }
    } catch (err) {
      setError((err as Error).message || "An unknown error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.akabaneContainer}>
      <p>赤羽でおすすめの美味しいお店を知りたい方はこちら！</p>

      <button
        onClick={fetchRecommendations}
        disabled={loading}
        className={`${styles.akabaneButton} ${loading ? styles.loading : ""}`}
      >
        {loading ? "読み込み中..." : "おすすめのお店を教えて！"}
      </button>

      {error && (
        <p className={styles.akabaneError}>エラーが発生しました: {error}</p>
      )}

      {response && (
        <div className={styles.akabaneResponse}>
          <h2>おすすめのお店:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default AkabaneRecommendations;
