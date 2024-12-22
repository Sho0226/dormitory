import React, { useState } from "react";
import styles from "./Floor.module.css";
import { Calendar, Music, Users, Video } from "lucide-react";

function Floor() {
  const [selectedFloor, setSelectedFloor] = useState("2F");
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
    <div>
      {" "}
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
            key={floor}
            className={`${floor} ${getClassName(selectedFloor, floor)}`}
          >
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
        <p className={styles.note}>※予約できる部屋は最大２時間使える(目安)</p>
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
    </div>
  );
}

export default Floor;
