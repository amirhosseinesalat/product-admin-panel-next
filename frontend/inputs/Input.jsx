import { forwardRef } from "react";
import styles from "../components/signPage.module.css";

const Input = forwardRef(({ error, ...rest }, ref) => {
  return (
    <>
      <input
        ref={ref}
        className={`${styles.input} ${error ? styles.inputError : ""}`}
        {...rest}
      />
      {error && <p className={styles.error}>{error}</p>}
    </>
  );
});

export default Input;
