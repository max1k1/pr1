import React from "react";
import styles from "./Input.module.css";

const Input = ({ type, placeholder }) => {
  return (
    <input className={styles.formInput} type={type} placeholder={placeholder} />
  );
};

export default Input;
