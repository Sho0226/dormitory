interface TranslationPair {
  [key: string]: string; // インデックスシグネチャを追加
  en: string;
  ja: string;
  zh_cn: string; // 中国語（簡体字）
  zh_tw: string; // 中国語（繁体字）
  ko: string;    // 韓国語
}

export const preserveTerms: Record<string, TranslationPair> = {
  'AI House Portal': {
    en: 'AI House Portal',
    ja: 'AI House Portal',
    zh_cn: 'AI之家门户',
    zh_tw: 'AI之家門戶',
    ko: 'AI 하우스 포털',
  },
  'AI House': {
    en: 'AI House',
    ja: 'AI House',
    zh_cn: 'AI之家',
    zh_tw: 'AI之家',
    ko: 'AI 하우스',
  },
  翻訳: {
    en: 'Translation',
    ja: '翻訳',
    zh_cn: '翻译',
    zh_tw: '翻譯',
    ko: '번역',
  },
  Homepage: {
    en: 'Homepage',
    ja: 'ホームページ',
    zh_cn: '主页',
    zh_tw: '主頁',
    ko: '홈페이지',
  },
  Notice: {
    en: 'Notice',
    ja: 'お知らせ',
    zh_cn: '通知',
    zh_tw: '通知',
    ko: '공지사항',
  },
  'Facility Reservations': {
    en: 'Facility Reservations',
    ja: '施設予約',
    zh_cn: '设施预订',
    zh_tw: '設施預訂',
    ko: '시설 예약',
  },
  Events: {
    en: 'Events',
    ja: 'イベント',
    zh_cn: '活动',
    zh_tw: '活動',
    ko: '이벤트',
  },
  'Dormitory Rules': {
    en: 'Dormitory Rules',
    ja: '寮則',
    zh_cn: '宿舍规则',
    zh_tw: '宿舍規則',
    ko: '기숙사 규칙',
  },
  // Floors
  '2F': {
    en: '2F',
    ja: '2F',
    zh_cn: '二楼',
    zh_tw: '二樓',
    ko: '2층'
  },
  // Rooms
  tamokuteki1: {
    en: 'Multipurpose room 1',
    ja: '多目的室1',
    zh_cn: '多功能室1号',
    zh_tw: '多功能室1號',
    ko: '다목적실1'
  },
  study1: {
   en:'Study room 1',
   ja:'勉強室1',
   zh_cn:'学习室1号',
   zh_tw:'學習室1號',
   ko:'스터디룸1'
  },
 // Facilities
  AI-Studio:{
   en:'AI-Studio room',
   ja:'AI-Studio room',
   zh_cn:'AI工作室',
   zh_tw:'AI工作室',
   ko:'AI 스튜디오'
   },
 // Notes and Forms
 スタジオ予約フォーム:{
   en:'Studio Reservation Form',
   ja:'スタジオ予約フォーム',
   zh_cn:'工作室预订表单',
   zh_tw:'工作室預訂表單',
   ko:'스튜디오 예약 양식'
 },
// Meals
 食事関連:{
   en:'Meal Related',
   ja:'食事関連',
   zh_cn:'餐饮相关',
   zh_tw:'餐飲相關',
   ko:'식사 관련'
 },
// Events
 イベント情報:{
   en:'Event Information',
   ja:'イベント情報',
   zh_cn:'活动信息',
   zh_tw:'活動信息',
   ko:'이벤트 정보'
 },
// Dormitory Rules Highlights
 寮則ハイライト:{
   en:'Dormitory Rules Highlights',
   ja:'寮則ハイライト',
   zh_cn:'宿舍规则亮点',
   zh_tw:'宿舍規則亮點',
   ko:'기숙사 규칙 하이라이트'
 },
// Inquiries & FAQ
 お問い合わせフォーム:{
   en:'Inquiry Form',
   ja:'お問い合わせフォーム',
   zh_cn:'询问表单',
   zh_tw:'詢問表單',
   ko:'문의 양식'
 }
};
