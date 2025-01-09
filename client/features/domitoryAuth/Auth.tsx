import { useState } from "react";
import styles from "./Auth.module.css";
import LoginForm from "./LoginForm";

interface AuthProps {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const Auth: React.FC<AuthProps> = ({ setIsLoggedIn }) => {
  const [loginFormData, setLoginFormData] = useState({
    roomNumber: "",
    studentID: "",
  });
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const roomNumberRegex = /^[2-6][A-Z][0-1][0-9]$/;
    const studentIDRegex = /^\d{10}$/; // 10桁の数字のみを許可

    if (!roomNumberRegex.test(loginFormData.roomNumber)) {
      setError("部屋番号が間違っています。Wrong room number.");
      return;
    }

    if (!studentIDRegex.test(loginFormData.studentID)) {
      setError("学籍番号が間違っています。Incorrect student ID number");
      return;
    }

    setError("");
    setIsLoggedIn(true);
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
        <h1 className={styles.mainTitle}>AI House Portal ログイン</h1>
        {error && <p className={styles.error}>{error}</p>}
        <LoginForm
          loginFormData={loginFormData}
          handleLogin={handleLogin}
          handleLoginInputChange={handleLoginInputChange}
        />
      </div>
    </div>
  );
};

export default Auth;
