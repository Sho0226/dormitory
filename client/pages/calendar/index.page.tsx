import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";
import styles from "./index.module.css";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/router";
import { Events } from "./event";

const Calendar = () => {
  const router = useRouter();
  const events = Events;

  return (
    <div className={styles.calendarWrapper}>
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
          right: "",
        }}
        height="auto"
        events={events}
        eventClick={(info) => {
          console.log(info.event.title);
        }}
        dayCellClassNames={(arg) => {
          if (arg.date.getDay() === 0) return "sunday";
          if (arg.date.getDay() === 6) return "saturday";
          return "";
        }}
      />
      <style jsx global>{`
        .fc {
          --fc-border-color: #ddd;
          --fc-day-today-bg-color: rgba(66, 165, 245, 0.1);
        }
        .sunday {
          background-color: rgba(244, 67, 54, 0.05);
        }
        .saturday {
          background-color: rgba(33, 150, 243, 0.05);
        }
        .fc-day-today {
          background: var(--fc-day-today-bg-color) !important;
        }
        .fc-event {
          border: none;
          border-radius: 4px;
          padding: 2px 4px;
        }
      `}</style>
    </div>
  );
};

export default Calendar;
