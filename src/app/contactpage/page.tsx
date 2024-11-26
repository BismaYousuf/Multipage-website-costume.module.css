import React from "react";
import styles from "./ContactPage.module.css";

const ContactPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.subtitle}>
        We’d love to hear from you! Fill out the form below, and we’ll get back to you as soon as possible.
      </p>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={styles.input}
          placeholder="Enter your full name"
          required
        />

        <label className={styles.label} htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.input}
          placeholder="Enter your email address"
          required
        />

        <label className={styles.label} htmlFor="phone">
          Phone:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className={styles.input}
          placeholder="Enter your phone number"
          required
        />

        <label className={styles.label} htmlFor="message">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          className={styles.textarea}
          rows={5}
          placeholder="Write your message here"
        ></textarea>

        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
