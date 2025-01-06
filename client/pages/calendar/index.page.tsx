import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";

interface CalendarEvent {
  title: string;
  date: string;
  color?: string;
}

export const Calendar = () => {
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
  ];

  return (
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
  );
};
