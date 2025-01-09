import { ChevronDown, ChevronLeft, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./index.module.css";

const Section = ({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.section} id={id}>
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
        <h1 className={styles.title}>{"AI-House HUB-4\nFAQ"}</h1>
      </header>

      <nav className={styles.toc}>
        <h2>目次</h2>
        <ul>
          <li>
            <a href="#application">1. 申込について</a>
          </li>
          <li>
            <a href="#security">2. セキュリティーやサポートについて</a>
          </li>
          <li>
            <a href="#meals">3. 食事について</a>
          </li>
          <li>
            <a href="#facilities">4. 施設、設備について</a>
          </li>
          <li>
            <a href="#education">5. 教育プログラムについて</a>
          </li>
          <li>
            <a href="#rules">6. 宿舎のルールについて</a>
          </li>
          <li>
            <a href="#environment">7. 周辺環境について</a>
          </li>
        </ul>
      </nav>

      <Section title="1. 申込について" id="application">
        <h3>Q. 現地を⾒学したいです。</h3>
        <p>
          A. 管理⼈室に電話をして、⾒学の予約をしてください。
          <br />
          TEL 03-3909-1640
          <br />
          受付時間︓⽉〜⼟曜⽇ 9:00-18:00（12:00-13:00 除く）
        </p>

        <h3>Q. ⼊居にあたり条件はありますか︖</h3>
        <p>
          A. 語学⼒などの条件はありません。しかし AI-House
          は単なる住居ではなく、⼊居者同⼠の交流を重視する教育寮です。
        </p>

        <h3>
          Q.
          株式会社学⽣情報センター（ナジック）が宿舎の管理運営を担当すると聞きました。どのような会社ですか︖
        </h3>
        <p>A. 学生寮事業を専⾨とする宿舎運営のプロフェッショナルです。</p>

        <h3>Q. どのような学⽣が⼊居しますか︖</h3>
        <p>A. 半数は国内学⽣、半数は外国⼈留学⽣となる予定です。</p>

        <h3>Q. 英語が話せないので⼼配です。</h3>
        <p>A. 語学力よりも積極的な姿勢が⼤切です。</p>

        <h3>Q. ⼊寮費や初期費⽤はいつ⽀払いますか︖</h3>
        <p>A. 3 ⽉中旬が⽀払期間となります。</p>

        <h3>Q. キャンセルは可能ですか︖</h3>
        <p>A. キャンセルは可能ですが、入寮費は返金できません。</p>
      </Section>

      <Section title="2. セキュリティーやサポートについて" id="security">
        <h3>Q. 館内のセキュリティーについて教えてください。</h3>
        <p>A. 24時間のセキュリティ体制が整っています。</p>

        <h3>
          Q.
          レジデント・アシスタント（RA）はどのようなサポートをしてくれますか︖
        </h3>
        <p>A. 生活の悩みや病気の対応などをサポートします。</p>
      </Section>

      <Section title="3. 食事について" id="meals">
        <h3>Q. 食事のプランは外せますか︖</h3>
        <p>A. できません。教育の一部としています。</p>

        <h3>Q. ベジタリアンやアレルギー対応はありますか︖</h3>
        <p>
          A. ベジタリアンメニューは対応可能ですが、アレルギー対応は難しいです。
        </p>
      </Section>

      <Section title="4. 施設、設備について" id="facilities">
        <h3>Q. 居室にはトイレ、バス、洗⾯所はありますか︖</h3>
        <p>A. 共用設備となります。</p>
      </Section>

      <Section title="5. 教育プログラムについて" id="education">
        <h3>Q. プログラムではどんなことをしますか︖</h3>
        <p>A. 外部講師によるセミナーやRA主催のイベントが行われます。</p>
      </Section>

      <Section title="6. 宿舎のルールについて" id="rules">
        <h3>Q. 飲酒、喫煙について教えてください。</h3>
        <p>A. 宿舎内は全面禁煙で、飲酒は居室内のみ可能です。</p>
      </Section>

      <Section title="7. 周辺環境について" id="environment">
        <h3>Q. 宿舎の周りにスーパーやコンビニはありますか︖</h3>
        <p>A. 最寄りのスーパーは徒歩 5 分、コンビニは徒歩 3 分です。</p>

        <h3> 宿舎の周りの雰囲気が知りたい。</h3>
        <p>
          A. 気になる⽅は Google
          ストリートビューで実際に訪れた気分を味わってみてください。
        </p>
        <Link
          href={"https://maps.app.goo.gl/8nfPHHBbHZ25XYT48"}
          className={styles.link}
        >
          Googleマップで見る
        </Link>
      </Section>
    </div>
  );
}
