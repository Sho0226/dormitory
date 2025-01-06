import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";
import styles from "./index.module.css";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/router";

interface CalendarEvent {
  title: string;
  date: string;
  color?: string;
}

const Calendar = () => {
  const router = useRouter();
  const events: CalendarEvent[] = [
    {
      title: "春学期開始",
      date: "2024-04-08",
      color: "#4CAF50", // 春を表す緑色
    },
    {
      title: "秋学期開始",
      date: "2024-09-20",
      color: "#FF9800", // 秋を表すオレンジ色
    },
    {
      title: "元旦",
      date: "2025-01-01",
      color: "#F44336", // 元旦を表す赤色
    },
    {
      title: "元旦",
      date: "2025-01-01",
      color: "#F44336", // 元旦を表す赤色
    },
  ];

  return (
    <div>
      <div className={styles.backButton} onClick={() => router.back()}>
        <ChevronLeft className={styles.icon} />
        戻る
      </div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locales={allLocales}
        locale="ja"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth",
        }}
        height="auto"
        events={events}
        eventClick={(info) => {
          console.log(info.event.title);
        }}
      />
    </div>
  );
};

export default Calendar;
