import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      className={styles.formInput}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}; 

export default Input;
