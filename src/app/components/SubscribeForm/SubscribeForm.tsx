import React from 'react';
import styles from './SubscribeForm.module.css';
import { Inknut_Antiqua } from "next/font/google";
import { Merriweather as MerriweatherFont } from "next/font/google";

const inknutAntiqua = Inknut_Antiqua({
  subsets: ["latin"],
  weight: "700",
  
});

const Merriweather = MerriweatherFont({
  subsets: ["latin"],
  weight: "300",
});

const SubscribeForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
      <h1 className={`${inknutAntiqua.className} ${styles.Arrivalsheading}`}><span className={styles.span}>SUBSCRIBE</span> TO GET DISSCOUNT OFFER</h1>
      </h1>
      <p style={{ fontFamily: Merriweather.className }} className={styles.description}>
        Join our mailing list today and enjoy exclusive discount offers straight to your inbox! <br />
        Be the first to know about special promotions, new arrivals, and more. 
        As a welcome <br />gift, get 10% off your first order just by subscribing!
      </p>
      <div className={styles.form}>
        <input
          type="email"
          className={styles.input}
          placeholder="Enter your e-mail here"
          aria-label="Email"
        />
        <button className={styles.button}>Subscribe</button>
      </div>
    </div>
  );
};

export default SubscribeForm;
