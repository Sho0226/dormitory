import styles from './index.module.css';

// セクションコンポーネント
const Section = ({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id: string;
}) => (
  <div className={styles.section} id={id}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    <div className={styles.sectionContent}>{children}</div>
  </div>
);

// メインコンポーネント
const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
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

      {/* 各セクションの内容 */}
      <Section title="1. AI-House HUB-4 の施設概要" id="overview">
        <h3>1.1 AI-House HUB-4 のコンセプト</h3>
        <p>
          AI-House HUB-4 は 2022 年 3 月にオープンした東洋大学の新しい国際交流宿舎です。
          異なる文化的・社会的背景を持つ仲間と共同生活を送り、異文化に対する理解や
          コミュニケーション能力、共生する力を伸ばすことを目標とする宿舎です。
        </p>
        <h3>1.2 所在地</h3>
        <p>〒115-0053 東京都北区赤羽台 1-7-37</p>
        <p>JR 赤羽駅より徒歩 8 分 / 東京メトロ南北線 赤羽岩淵駅より徒歩 10 分</p>
        <h3>1.3 施設情報</h3>
        <ul>
          <li>収容人数：292 名（一般個室 288、バリアフリー室 4）</li>
          <li>
            地上 5 階（1 階は食堂等の共用フロア、2・3 階が男性居住フロア、4・5 階が女性居住フロア）
          </li>
          <li>共有スペース：ダイニングホール、学習室、音楽室、AI キッチンなど</li>
        </ul>
      </Section>

      <Section title="2. 入居者について" id="residents">
        <h3>2.1 入居資格</h3>
        <ul>
          <li>学部生及び大学院生</li>
          <li>交換留学生</li>
          <li>レジデント・アシスタント（RA）</li>
          <li>外国人の客員教員及び客員研究員</li>
        </ul>
        <h3>2.2 レジデント・アシスタント（RA）</h3>
        <p>
          RA は宿舎生活の支援、イベント運営、留学生のサポートを行う役割を担っています。
          問題がある場合は担当の RA に相談してください。
        </p>
      </Section>

      <Section title="3. 入居・退居について" id="movein">
        <h3>3.1 入居期間</h3>
        <p>入居は原則として 2 年以内です。交換留学生は 11 ヵ月以内となります。</p>
        <h3>3.2 入居申込・退去</h3>
        <p>
          入居は宿舎ウェブサイトから申請してください。退去は前月 15
          日までに退去届を提出してください。
        </p>
      </Section>

      <Section title="4. 宿舎費について" id="fees">
        <p>滞在にかかる費用は以下の通りです：</p>
        <ul>
          <li>入寮費：50,000円</li>
          <li>宿舎費（一般個室）：96,000円</li>
          <li>宿舎費（バリアフリー室）：108,000円</li>
        </ul>
      </Section>

      <Section title="5. 設備・備品" id="facilities">
        <h3>5.1 居住フロアについて</h3>
        <p>2・3 階は男性フロア、4・5 階は女性フロアです。</p>
      </Section>

      <Section title="6. 注意事項" id="rules">
        <h3>6.1 訪問者</h3>
        <p>訪問者は 1F のエントランスロビーにのみ立ち入り可能です。</p>
        <h3>6.2 外泊</h3>
        <p>外泊時は事前にオンラインフォームを提出してください。</p>
      </Section>

      <Section title="7. 項目別相談先一覧" id="contacts">
        <p>宿舎生活に関する相談先：</p>
        <ul>
          <li>宿舎費の相談：株式会社学生情報センター（ナジック）</li>
          <li>設備の不具合：RA または管理人</li>
        </ul>
      </Section>

      <Section title="8. サポートを必要とする学生へ" id="support">
        <h3>8.1 障がいのある学生へのサポート</h3>
        <p>バリアフリー部屋が提供されます。</p>
        <h3>8.2 セクシュアルマイノリティーへのサポート</h3>
        <p>ジェンダーやセクシュアリティに関する相談を受け付けます。</p>
      </Section>

      <Section title="9. AI-House HUB-4 へのアクセス" id="access">
        <p>住所：〒115-0053 東京都北区赤羽台 1-7-37</p>
        <p>最寄り駅：JR 赤羽駅より徒歩 8 分 / 東京メトロ南北線 赤羽岩淵駅より徒歩 10 分</p>
        <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.8026966869834!2d139.71484199166304!3d35.78022267733525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601893054faae87f%3A0x9e04c9eecc85378e!2sAI-House%20HUB-4!5e0!3m2!1sja!2sjp!4v1734501113517!5m2!1sja!2sjp"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        </div>
      </Section>
    </div>
  );
};

export default Home;
