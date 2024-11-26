import React from "react";
import styles from "./login.module.css";

const ContactForm: React.FC = () => {
  return (
 <>
    <h1 className={styles.heading}> Please Login here!</h1>
    <form className={styles.form}>
      <label className={styles.label}>Name:</label>
      <input type="text" name="name" className={styles.input} required />

      <label className={styles.label}>Email:</label>
      <input type="email" name="email" className={styles.input} required />

      <label className={styles.label}>Password:</label>
      <input type="tel" name="phone" className={styles.input} required />


      <button type="submit" className={styles.button}>
        Login
      </button>
    </form>
 </>
  );
};

export default ContactForm;

