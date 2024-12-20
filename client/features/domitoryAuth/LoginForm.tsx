import React from "react";
import styles from "./Auth.module.css";

interface LoginFormProps {
  loginFormData: {
    name: string;
    roomNumber: string;
    password: string;
    studentID: string;
  };
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  handleLoginInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  loginFormData,
  handleLogin,
  handleLoginInputChange,
}) => (
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
      placeholder="学籍番号"
      value={loginFormData.studentID}
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
);

export default LoginForm;
