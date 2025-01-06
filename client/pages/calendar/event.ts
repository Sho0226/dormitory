interface CalendarEvent {
  title: string;
  date?: string;
  start?: string;
  end?: string;
  color: string;
  textColor: string;
}

export const Events: CalendarEvent[] = [
  // 4月
  {
    title: "入学式",
    date: "2024-04-05",
    color: "#4CAF50",
    textColor: "#ffffff",
  },
  {
    title: "新入生ガイダンス",
    date: "2024-04-05",
    color: "#4CAF50",
    textColor: "#ffffff",
  },
  {
    title: "春学期開始",
    date: "2024-04-08",
    color: "#4CAF50",
    textColor: "#ffffff",
  },
  // 7月
  {
    title: "春学期授業終了",
    date: "2024-07-22",
    color: "#4CAF50",
    textColor: "#ffffff",
  },
  {
    title: "補講期間",
    start: "2024-07-23",
    end: "2024-07-27",
    color: "#81C784",
    textColor: "#ffffff",
  },
  {
    title: "春学期定期試験",
    start: "2024-07-29",
    end: "2024-08-07",
    color: "#81C784",
    textColor: "#ffffff",
  },
  // 8-9月
  {
    title: "夏季休業",
    start: "2024-08-08",
    end: "2024-09-19",
    color: "#2196F3",
    textColor: "#ffffff",
  },
  {
    title: "秋学期開始",
    date: "2024-09-20",
    color: "#FF9800",
    textColor: "#ffffff",
  },
  // 12-1月
  {
    title: "冬季休業",
    start: "2024-12-25",
    end: "2025-01-04",
    color: "#2196F3",
    textColor: "#ffffff",
  },
  {
    title: "元旦",
    date: "2025-01-01",
    color: "#F44336",
    textColor: "#ffffff",
  },
  {
    title: "1月授業開始",
    date: "2025-01-04",
    color: "#FF9800",
    textColor: "#ffffff",
  },
  {
    title: "成人の日",
    date: "2025-01-13",
    color: "#F44336",
    textColor: "#ffffff",
  },
  {
    title: "共通テスト準備",
    date: "2025-01-18",
    color: "#F44336",
    textColor: "#ffffff",
  },
  {
    title: "共通テスト",
    date: "2025-01-19",
    color: "#F44336",
    textColor: "#ffffff",
  },
  {
    title: "秋学期授業終了",
    date: "2025-01-20",
    color: "#FF9800",
    textColor: "#ffffff",
  },
  {
    title: "秋学期定期試験",
    start: "2025-01-25",
    end: "2025-02-01",
    color: "#FFB74D",
    textColor: "#ffffff",
  },
  // 2-3月
  {
    title: "春季休業",
    start: "2025-02-08",
    end: "2025-04-01",
    color: "#2196F3",
    textColor: "#ffffff",
  },
  {
    title: "建国記念日",
    date: "2025-02-11",
    color: "#F44336",
    textColor: "#ffffff",
  },
  {
    title: "天皇誕生日",
    date: "2025-02-23",
    color: "#F44336",
    textColor: "#ffffff",
  },
  {
    title: "春分の日",
    date: "2025-03-20",
    color: "#F44336",
    textColor: "#ffffff",
  },
  {
    title: "学位記授与式",
    date: "2025-03-23",
    color: "#4CAF50",
    textColor: "#ffffff",
  },
];
