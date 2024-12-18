import { Layout } from 'layouts/Layout';
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
    <Layout
      render={() => (
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
      
      
import LanguageSwitcher from "components/Translation/Translation";
import {
  Bell,
  Book,
  Calendar,
  HelpCircle,
  Menu,
  Music,
  Users,
  Utensils,
  Video,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import styles from "./index.module.css";
//eslint-disable-next-line
export default function AIHousePortal() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFloor, setSelectedFloor] = useState("2F");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginFormData, setLoginFormData] = useState({
    name: "",
    roomNumber: "",
    password: "",
    studentID: "",
  });

  const [isRegistering, setIsRegistering] = useState(false); // 新規登録の状態

  // 新規登録用のデータ
  const [registrationData, setRegistrationData] = useState({
    name: "",
    roomNumber: "",
    password: "",
    studentID: "",
    confirmPassword: "",
  });

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (registrationData.password !== registrationData.confirmPassword) {
      alert("パスワードが一致しません。");
      return;
    }

    // 新規登録処理（API呼び出しなど）
    console.log("登録データ:", registrationData);
    setIsLoggedIn(true); // 仮でログイン状態にする
  };

  const handleRegisterInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setRegistrationData({
      ...registrationData,
      [name]: value,
    });
  };

  // メニューのトグル
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const getClassName = (selectedFloor: string, floor: string) => {
    return selectedFloor === floor ? styles.isActive : styles.notActive;
  };

  // 入力フォームの変更をハンドリングする関数
  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  // ログイン処理
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 通常、ここで認証処理を行います（例：API呼び出しなど）。
    setIsLoggedIn(true); // ログイン成功を仮定
  };

  // フロアごとの部屋リスト
  const roomsByFloor: { [key: string]: string[] } = {
    "2F": ["tamokuteki1", "tamokuteki2", "Study1", "Study2"],
    "3F": ["tamokuteki1", "tamokuteki2", "Study1", "Study2"],
    "4F": ["tamokuteki1", "tamokuteki2", "Study1", "Study2"],
    "5F": ["tamokuteki1", "tamokuteki2", "Study1", "Study2"],
  };

  return (
    <div className={styles.container}>
      {!isLoggedIn ? (
        <div className={styles.loginForm}>
          <h1 className={styles.mainTitle}>
            {isRegistering
              ? "AI House Portal 新規登録"
              : "AI House Portal ログイン"}
          </h1>

          {/* 新規登録フォーム */}
          {isRegistering ? (
            <form onSubmit={handleRegister}>
              <input
                type="text"
                name="name"
                placeholder="名前"
                value={registrationData.name}
                onChange={handleRegisterInputChange}
                required
              />
              <input
                type="text"
                name="roomNumber"
                placeholder="部屋番号"
                value={registrationData.roomNumber}
                onChange={handleRegisterInputChange}
                required
              />
              <input
                type="text"
                name="studentID"
                placeholder="学籍番号"
                value={registrationData.studentID}
                onChange={handleRegisterInputChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="パスワード"
                value={registrationData.password}
                onChange={handleRegisterInputChange}
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="パスワード確認"
                value={registrationData.confirmPassword}
                onChange={handleRegisterInputChange}
                required
              />
              <button type="submit" className={styles.button}>
                登録
              </button>
            </form>
          ) : (
            // ログインフォーム
            <form onSubmit={handleLogin}>
              <input
                type="text"
                name="name"
                placeholder="名前"
                value={loginFormData.name}
                onChange={handleLoginInputChange}
                required
              />
              <input
                type="text"
                name="roomNumber"
                placeholder="部屋番号"
                value={loginFormData.roomNumber}
                onChange={handleLoginInputChange}
                required
              />
              <input
                type="text"
                name="studentID"
                placeholder="学籍番号" // 学籍番号用のプレースホルダを追加
                value={loginFormData.studentID} // 学籍番号の値をバインド
                onChange={handleLoginInputChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="パスワード"
                value={loginFormData.password}
                onChange={handleLoginInputChange}
                required
              />
              <button type="submit" className={styles.button}>
                ログイン
              </button>
            </form>
          )}

          {/* 新規登録とログイン切り替え */}
          <button
            className={styles.secondaryButton}
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering
              ? "アカウントをお持ちの方はこちら"
              : "新規登録はこちら"}
          </button>

          {/* パスワードを忘れた場合 */}
          {!isRegistering && (
            <button
              className={styles.linkButton}
              onClick={() => alert("パスワードリセットリンクを送信します")}
            >
              パスワードをお忘れですか？
            </button>
          )}
        </div>
      ) : (
        <>
          <header className={styles.header}>
            <h1 className={styles.mainTitle}>AI House Portal</h1>
            <button className={styles.menuButton} onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className={styles.menuIcon} />
              ) : (
                <Menu className={styles.menuIcon} />
              )}
            </button>
            <nav
              className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
            >
              <Link
                href="https://toyo.749.cc/aihouse/"
                className={styles.navLink}
                onClick={toggleMenu}
              >
                ホームページ
              </Link>
              <Link
                href="/announcements"
                className={styles.navLink}
                onClick={toggleMenu}
              >
                お知らせ
              </Link>
              <Link
                href="/facilities"
                className={styles.navLink}
                onClick={toggleMenu}
              >
                施設予約
              </Link>
              <Link
                href="/events"
                className={styles.navLink}
                onClick={toggleMenu}
              >
                イベント
              </Link>
              <Link
                href="/rule"
                className={styles.navLink}
                onClick={toggleMenu}
              >
                寮則
              </Link>
              <LanguageSwitcher />
            </nav>
          </header>

          <main className={styles.main}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>
                <Bell className={styles.icon} />
                重要なお知らせ
              </h2>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  期末試験の静粛時間について（6/1-6/14）
                </li>
                <li className={styles.listItem}>
                  夏季休暇中の寮の利用について
                </li>
                <li className={styles.listItem}>
                  新入寮生歓迎会のお知らせ（4/10）
                </li>
              </ul>
            </div>

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
                  className={`${styles.facilityGrid} ${floor} ${getClassName(selectedFloor, floor)}`}
                >
                  {/*  選択した階に応じた部屋を表示  */}
                  {roomsByFloor[selectedFloor].map((room, index) => (
                    <button
                      key={`${selectedFloor}-${index}`}
                      className={styles.facilityButton}
                    >
                      <Users className={styles.facilityIcon} />
                      <span className={styles.facilityName}>{room}</span>
                    </button>
                  ))}
                </div>
              ))}
              {/* 常に表示されるAI-StudioとMusic Room  */}
              <div className={styles.floorSelection}>
                <button className={styles.facilityButton}>
                  <Video className={styles.facilityIcon} />
                  <span className={styles.facilityName}>AI-Studio</span>
                </button>
                <button className={styles.facilityButton}>
                  <Music className={styles.facilityIcon} />
                  <span className={styles.facilityName}>Music Room</span>
                </button>
              </div>
              <p className={styles.note}>
                ※予約できる部屋は最大２時間使える(目安)
              </p>
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

            <div className={styles.card}>
              <h2 className={styles.cardTitle}>
                <Utensils className={styles.icon} /> 食事関連
              </h2>
              <button
                className={styles.button}
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSd14yq1hROVw4VX5g38JBcxUdjLKPugGD2hWRKu3wsVQiWqDQ/viewform",
                    "_blank",
                  )
                }
              >
                お弁当取り置きフォーム
              </button>
              <button
                className={`${styles.button} ${styles.secondaryButton}`}
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSdXDaIyKGLLflPh4c1SH1NdzYdKf8ltKL5DLmdbq2V2VEdYpg/viewform",
                    "_blank",
                  )
                }
              >
                欠食届
              </button>
            </div>

            <div className={styles.card}>
              <h2 className={styles.cardTitle}>
                <Users className={styles.icon} /> イベント情報
              </h2>
              <ul className={styles.list}>
                <li className={styles.listItem}>6/20 留学生交流会</li>
                <li className={styles.listItem}>7/1 七夕飾り付け</li>
                <li className={styles.listItem}>7/15 夏季BBQパーティー</li>
              </ul>
            </div>

            <div className={styles.card}>
              <h2 className={styles.cardTitle}>
                <Book className={styles.icon} /> 寮則ハイライト
              </h2>
              <ul className={`${styles.list} ${styles.rulesList}`}>
                <li className={styles.listItem}>
                  門限：平日 23:00 / 休日 24:00
                </li>
                <li className={styles.listItem}>静粛時間：22:00 - 7:00</li>
                <li className={styles.listItem}>
                  来客制限：共用エリアのみ（要事前申請）
                </li>
              </ul>
              <Link href="/rules">
                <button className={`${styles.button} ${styles.outlineButton}`}>
                  寮則全文を見る
                </button>
              </Link>
              <button
                className={styles.button}
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSfc5U6jTvsNvotFIiWqHE3RyinwHZU2y8cT4PQDXhURaOxQ6w/viewform",
                    "_blank",
                  )
                }
              >
                外泊届を提出
              </button>
            </div>

            <div className={styles.card}>
              <h2 className={styles.cardTitle}>
                <HelpCircle className={styles.icon} /> お問い合わせ&FAQ
              </h2>
              <p className={styles.listItem}>
                よくある質問と回答をご確認ください。
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>入居条件について</li>
                <li className={styles.listItem}>セキュリティーとサポート</li>
                <li className={styles.listItem}>食事プランについて</li>
                <li className={styles.listItem}>施設・設備について</li>
                <li className={styles.listItem}>教育プログラムについて</li>
              </ul>
              <button
                className={styles.button}
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSd14yq1hROVw4VX5g38JBcxUdjLKPugGD2hWRKu3wsVQiWqDQ/viewform",
                    "_blank",
                  )
                }
              >
                寮生向けお問い合わせフォーム
              </button>
              <Link href="/faq">
                <button className={`${styles.button} ${styles.outlineButton}`}>
                  FAQ全文を見る
                </button>
              </Link>
            </div>
          </main>
          <footer className={styles.footer}>
            &copy; 2023 AI House. For residents' use only.
          </footer>
        </>
      )}
    </div>
  );
}
