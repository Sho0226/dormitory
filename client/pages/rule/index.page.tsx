import { ChevronDown, ChevronLeft, ChevronUp } from "lucide-react";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./index.module.css";

// Section コンポーネントが id を受け取り、それを適用するように修正
const Section = ({
  title,
  children,
  id, // id を受け取るプロパティ
}: {
  title: string;
  children: React.ReactNode;
  id?: string; // id プロパティの型定義
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.section} id={id}>
      {" "}
      {/* id をここで適用 */}
      <h2 className={styles.sectionTitle} onClick={() => setIsOpen(!isOpen)}>
        {title}
        {isOpen ? (
          <ChevronUp className={styles.icon} />
        ) : (
          <ChevronDown className={styles.icon} />
        )}
      </h2>
      {isOpen && <div className={styles.sectionContent}>{children}</div>}
    </div>
  );
};

export default function RuleBook() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.backButton} onClick={() => router.back()}>
          <ChevronLeft className={styles.icon} />
          戻る
        </button>
        <h1 className={styles.title}>AI-House HUB-4 宿舎ガイドブック</h1>
      </header>

      <nav className={styles.toc}>
        <h2>目次</h2>
        <ul>
          <li>
            <a href="#overview">1. AI-House HUB-4 の施設概要</a>
          </li>
          <li>
            <a href="#residents">2. 入居者について</a>
          </li>
          <li>
            <a href="#movein">3. 入居・退居について</a>
          </li>
          <li>
            <a href="#fees">4. 宿舎費について</a>
          </li>
          <li>
            <a href="#facilities">5. 設備・備品</a>
          </li>
          <li>
            <a href="#rules">6. 注意事項</a>
          </li>
          <li>
            <a href="#contacts">7. 項目別相談先一覧</a>
          </li>
          <li>
            <a href="#support">8. サポートを必要とする学生へ</a>
          </li>
          <li>
            <a href="#access">9. AI-House HUB-4 へのアクセス</a>
          </li>
        </ul>
      </nav>

      <Section title="1. AI-House HUB-4 の施設概要" id="overview">
        <h3>1.1 AI-House HUB-4 のコンセプト</h3>
        <p>
          AI-House HUB-4 は 2022 年 3
          月にオープンした東洋大学の新しい国際交流宿舎です。
          異なる文化的・社会的背景を持つ仲間と共同生活を送り、異文化に対する理解やコミュニケーション能力、
          共生する力を伸ばすことを目標とする宿舎です。
        </p>
        {/* 他のサブセクションも同様に追加 */}
      </Section>

      <Section title="2. 入居者について" id="residents">
        <h3>2.1 入居資格</h3>
        <p>AI-House HUB-4 に入居できる者は、次のとおりです：</p>
        <ul>
          <li>学部生及び大学院生</li>
          <li>交換留学生</li>
          <li>レジデント・アシスタント（RA）</li>
          <li>交換研究員</li>
          <li>外国人の客員教員及び客員研究員</li>
          <li>研究機関、研究センター等で受け入れた外国人大学院生</li>
          <li>本学が主催する短期受入プログラムに参加する者</li>
          <li>
            その他国際交流推進のため国際教育センター長又は所管長が特に認める者
          </li>
        </ul>
        {/* 他のサブセクションも同様に追加 */}
      </Section>

      <Section title="3. 入居・退居について" id="movein">
        <h3>3.1 入居期間</h3>
        <p>AI-House HUB-4 に入居できる期間は次の通りです：</p>
        <ul>
          <li>学部生及び大学院生は最長 2 年間。</li>
          <li>交換留学生は 11 ヵ月以内。</li>
        </ul>
        {/* 他のサブセクションを追加 */}
      </Section>

      <Section title="4. 宿舎費について" id="fees">
        <p>滞在にかかる費用は次のとおりです：</p>
        <ul>
          <li>入寮費：50,000円</li>
          <li>宿舎費：96,000円（一般個室）</li>
        </ul>
        {/* 他のサブセクションを追加 */}
      </Section>

      <Section title="5. 設備・備品" id="facilities">
        <h3>5.1 居住フロアについて</h3>
        <p>2・3F は男性フロア、4・5F は女性フロアです。</p>
        <h3>5.2 宿舎の設備・備品</h3>
        <p>各居室には次の設備があります：</p>
        <ul>
          <li>ベッド、マットレス</li>
          <li>デスク、チェア</li>
        </ul>
        {/* 他のサブセクションを追加 */}
      </Section>

      <Section title="6. 注意事項" id="rules">
        <h3>6.1 訪問者</h3>
        <p>訪問者は 1F のエントランスロビーのみ立ち入り可能です。</p>
        <h3>6.2 外泊</h3>
        <p>外泊をする場合は、事前にオンラインフォームを提出してください。</p>
        {/* 他のサブセクションを追加 */}
      </Section>

      <Section title="7. 項目別相談先一覧" id="contacts">
        <p>入居前や生活全般に関する相談先の一覧です：</p>
        <ul>
          <li>宿舎費について：株式会社学生情報センター（ナジック）</li>
          <li>生活全般について：管理人</li>
        </ul>
      </Section>

      <Section title="8. サポートを必要とする学生へ" id="support">
        <h3>8.1 障がいのある学生へのサポート</h3>
        <p>
          障がい等の理由により支援を必要とする学生に対し、バリアフリー部屋を用意しています。
        </p>
        {/* 他のサブセクションを追加 */}
      </Section>

      <Section title="9. AI-House HUB-4 へのアクセス" id="access">
        <p>
          <strong>住所：</strong> 〒115-0053 東京都北区赤羽台 1-7-37 東洋大学
          AI-House HUB-4 XXX（部屋番号）
        </p>
        <ul>
          <li>JR 赤羽駅より徒歩 8 分</li>
          <li>東京メトロ南北線赤羽岩淵駅より徒歩 10 分</li>
        </ul>
        <p>※宿舎施設内には駐車場がありません。公共交通機関をご利用ください。</p>

        <h3>連絡先</h3>
        <p>
          <strong>AI-House HUB-4 管理人室受付</strong>
        </p>
        <p>TEL 03-3909-1640 月～土 （祝日を除く）8:00～18:00</p>

        <p>
          <strong>東洋大学国際教育センター Housing Team</strong>
        </p>
        <p>〒112－8606 東京都文京区白山 5-28-20</p>
        <p>TEL 03-3945-8279 E-MAIL mlidorm@toyo.jp</p>
      </Section>
    </div>
  );
}
