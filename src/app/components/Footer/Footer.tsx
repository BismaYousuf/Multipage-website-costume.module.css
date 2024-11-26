import React from "react";
import styles from "./Footer.module.css";
import { Merriweather as MerriweatherFont } from "next/font/google";
import Image from "next/image";

const merriweather = MerriweatherFont({
  subsets: ["latin"],
  weight: ["300", "700"],
});

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      {/* Brand Section */}
      <div className={styles.brand}>
        <Image src="/logo.png" alt="Logo" className={styles.logo} />
        <span className={`${styles.brandName} ${merriweather.className}`}>
          Famms
        </span>
      </div>


      <div className={styles.contactInfo}>
      <p className={`${styles.brandEmail} ${merriweather.className}`}>
        <strong>Email:</strong>  bismayousuf540@gmail.com
        </p>
        <p>
          <strong>ADDRESS:</strong> 28 White tower, Street Name, New York City,
          USA
        </p>
        <p>
          <strong>TELEPHONE:</strong> +91 987 654 3210
        </p>
      </div>

     
      <div className={styles.newsletter}>
        <h4 className={`${styles.newsletterTitle} ${merriweather.className}`}>
          NEWSLETTER:
        </h4>
        <p>Subscribe to our newsletter and get updates daily.</p>
        <div className={styles.subscribeForm}>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
