import React from "react";
import styles from "./Auth.module.css";

interface RegisterFormProps {
  registrationData: {
    name: string;
    roomNumber: string;
    password: string;
    studentID: string;
    confirmPassword: string;
  };
  handleRegister: (e: React.FormEvent<HTMLFormElement>) => void;
  handleRegisterInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  registrationData,
  handleRegister,
  handleRegisterInputChange,
}) => (
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
);

export default RegisterForm;
