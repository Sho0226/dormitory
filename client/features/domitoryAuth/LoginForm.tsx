import React from "react";
import styles from "./Auth.module.css";

interface LoginFormProps {
  loginFormData: {
    roomNumber: string;
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
      name="roomNumber"
      placeholder="部屋番号/Room Number"
      value={loginFormData.roomNumber}
      onChange={handleLoginInputChange}
      required
    />
    <input
      type="text"
      name="studentID"
      placeholder="学籍番号/Student ID"
      value={loginFormData.studentID}
      onChange={handleLoginInputChange}
      required
    />
    <p>※学籍番号は10桁です。Student ID number is 10 digits.</p>
    <button type="submit" className={styles.button}>
      ログイン
    </button>
  </form>
);

export default LoginForm;
