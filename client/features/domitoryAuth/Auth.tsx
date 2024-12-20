import { useState } from "react";
import styles from "./Auth.module.css"; // スタイルのインポート
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

interface AuthProps {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

//eslint-disable-next-line
export const Auth: React.FC<AuthProps> = ({ setIsLoggedIn }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [loginFormData, setLoginFormData] = useState({
    name: "",
    roomNumber: "",
    password: "",
    studentID: "",
  });
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

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 通常、ここで認証処理を行います（例：API呼び出しなど）。
    setIsLoggedIn(true); // ログイン成功を仮定
  };

  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  return (
    <div>
      <div className={styles.loginForm}>
        <h1 className={styles.mainTitle}>
          {isRegistering
            ? "AI House Portal 新規登録"
            : "AI House Portal ログイン"}
        </h1>

        {isRegistering ? (
          <RegisterForm
            registrationData={registrationData}
            handleRegister={handleRegister}
            handleRegisterInputChange={handleRegisterInputChange}
          />
        ) : (
          <LoginForm
            loginFormData={loginFormData}
            handleLogin={handleLogin}
            handleLoginInputChange={handleLoginInputChange}
          />
        )}

        <button
          className={styles.secondaryButton}
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering
            ? "アカウントをお持ちの方はこちら"
            : "新規登録はこちら"}
        </button>

        {!isRegistering && (
          <button
            className={styles.linkButton}
            onClick={() => alert("パスワードリセットリンクを送信します")}
          >
            パスワードをお忘れですか？
          </button>
        )}
      </div>
    </div>
  );
};

export default Auth;
