import React, { useState } from "react";
import styles from "./Floor.module.css";
import { Calendar, Users } from "lucide-react";

function Floor() {
  const [selectedFloor, setSelectedFloor] = useState("2F");
  const getClassName = (selectedFloor: string, floor: string) => {
    return selectedFloor === floor ? styles.isActive : styles.notActive;
  };

  // フロアごとの部屋リスト
  const roomsByFloor: { [key: string]: { name: string; url: string }[] } = {
    "2F": [
      {
        name: "tamokuteki1",
        url: "https://docs.google.com/forms/d/1pby8T8OHJFTaU8eJLjFqUK7VXFnexKDsty8hrxS2osA/edit",
      },
      {
        name: "tamokuteki2",
        url: "https://docs.google.com/forms/d/1wL-meG9z7JsajwlBVNs59d8vNW62kQ_PFziOJx5vpOk/edit",
      },
      {
        name: "study1",
        url: "https://docs.google.com/forms/d/1ybgU0g83dxo532svQwoarlYohYnpz2NsD67tIx9X_ug/edit",
      },
      {
        name: "study2",
        url: "https://docs.google.com/forms/d/1rTOkAkuLmJaLhyXheUurmBTcU-UwKCKyz0iNYvXKJFI/edit",
      },
    ],
    "3F": [
      {
        name: "tamokuteki1",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSdAQDlIkv7qL13JYnkUFKgXunIK18CEMNVgFpXRVcSFh5mHbg/viewform",
      },
      {
        name: "tamokuteki2",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSdGDN5OChC4WxWq5_z9OzjYJ12P8bo4G63AV2vPGSu8Arm6jQ/viewform",
      },
      {
        name: "study1",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSeUk1jdnvE9A4IMK-uOks9DkXVDb8hPmj32IOklfgBu-NawWA/viewform",
      },
      {
        name: "study2",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSdLkgWD7-OgsqwwN_0zmrbINR5ICZRG9vb8fEoZ6dGUpBVAyQ/viewform",
      },
    ],
    "4F": [
      {
        name: "tamokuteki1",
        url: "https://docs.google.com/forms/d/1OsfZtNlfK2Gms9nrlnQsEKYlfyNxG6JRR1z8kYogOLo/edit",
      },
      {
        name: "tamokuteki2",
        url: "https://docs.google.com/forms/d/1DM2prD4anLzi2V54j1Nw3Nu58pP25ZF601OXEPNG5wo/edit",
      },
      {
        name: "study1",
        url: "https://docs.google.com/forms/d/1Q7tt0W5wXoBZWY0Y5_OgLX-yv-YeWr3yz87MorFOFsE/edit",
      },
      {
        name: "study2",
        url: "https://docs.google.com/forms/d/1cg1ko1flwgNeffOsFFojr3h4qItV-XHlij0nFFONg_Y/edit",
      },
    ],
    "5F": [
      {
        name: "tamokuteki1",
        url: "https://docs.google.com/forms/d/1Jx-zP3R14KRZoP2oSqhp1fYVHDJ8AXmBon80o_Hhyds/edit",
      },
      {
        name: "tamokuteki2",
        url: "https://docs.google.com/forms/d/1sIU7tQrD88wA9d1S3rhMLkVjLqtI6ca3MrofEzvEFrw/edit",
      },
      {
        name: "study1",
        url: "https://docs.google.com/forms/d/1UyjN74ViE6DK0h-FsXzGGdqo5EASL7_tIqA3xjgQSig/edit",
      },
      {
        name: "study2",
        url: "https://docs.google.com/forms/d/1cCRAnF8kBSD4TA8pPzHOBLowlVDB2UpJa7SYPV7A4_s/edit",
      },
    ],
  };

  return (
    <div id="floor">
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
                onClick={() => window.open(room.url, "_blank")} // URLを新しいタブで開く
              >
                <Users className={styles.facilityIcon} />
                <span className={styles.facilityName}>{room.name}</span>
              </button>
            ))}
          </div>
        ))}
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
