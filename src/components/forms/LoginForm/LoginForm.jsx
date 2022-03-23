import React from "react";
import Input from "../../Input/Input";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <div className={styles.Form}>
      <div className={styles.title}>FORM</div>
      <div>
        <Input type="text" placeholder="name@email.com" />
      </div>
      <div>
        <Input type="password" placeholder="password" />
      </div>
      <button className={styles.button}>Sing in</button>
    </div>
  );
};

export default LoginForm;
