import { CalendarCheck } from "lucide-react";
import styles from "./Calendar.module.css";
import React from "react";
import Link from "next/link";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";
import { Events } from "pages/calendar/event";

interface CalendarEvent {
  title: string;
  date?: string;
  start?: string;
  end?: string;
  color?: string;
}

export function CalendarCard() {
  const events = Events as CalendarEvent[];
  return (
    <div>
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>
          <CalendarCheck className={styles.icon} /> 東洋大学カレンダー
        </h2>

        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGrid"
          locales={allLocales}
          locale="ja"
          headerToolbar={{
            left: "",
            center: "",
            right: "",
          }}
          height="auto"
          events={events}
          views={{
            dayGrid: {
              type: "dayGrid",
              duration: { days: 3 },
              visibleRange(currentDate) {
                const startDate = new Date(currentDate.valueOf());
                const endDate = new Date(currentDate.valueOf());
                startDate.setDate(startDate.getDate() - 1);
                endDate.setDate(endDate.getDate() + 2);
                return { start: startDate, end: endDate };
              },
            },
          }}
        />

        <Link href="/calendar">
          <button className={styles.button}>学年暦を見る</button>
        </Link>
      </div>
    </div>
  );
}
