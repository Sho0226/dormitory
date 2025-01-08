import { useState } from "react";
import styles from "./Auth.module.css"; // スタイルのインポート
import LoginForm from "./LoginForm";

interface AuthProps {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

//eslint-disable-next-line
export const Auth: React.FC<AuthProps> = ({ setIsLoggedIn }) => {
  const [loginFormData, setLoginFormData] = useState({
    roomNumber: "",
    studentID: "",
  });
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const roomNumberRegex = /^[2-6][A-Z][0-1][0-9]$/;
    const studentIDRegex = /^(111|112|212|113|114|214|115|116|117|217|118|119|219|11a|11A|121|221|122|123|131|231|132|133|141|241|142|151|251|152|153|253|154|155|181|281|182|1D1|1d1|1D2|1d2|2D2|2d2|1E1|1e1|1A1|1a1|1A2|1a2|1A3|1a3|16A|16a|16B|16b|16C|16c|16D|16d|16E|16e|1B1|1b1|1F1|1f1|191|192|193|1C1|1c1|1C2|1c2|900|901|902)\d{7}$/;

    if (!roomNumberRegex.test(loginFormData.roomNumber)) {
      setError("部屋番号が間違っています。Wrong room number.");
      return;
    }

    if (!studentIDRegex.test(loginFormData.studentID)) {
      setError("学籍番号が間違っています。Incorrect student ID number");
      return;
    }

    setError("");
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
