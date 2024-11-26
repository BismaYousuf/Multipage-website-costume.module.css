import React from "react";
import styles from "./hero.module.css";
import { Merriweather as MerriweatherFont } from "next/font/google";
import Image from "next/image";

const Merriweather = MerriweatherFont({
  subsets: ["latin"],
  weight: "300",
});

function Hero() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.maintitle}>
        <h1
          style={{ fontFamily: Merriweather.className }}
          className={styles.h1}
        >
          <span className={styles.span}>Sale 20% Off</span> <br /> On Everything
        </h1>
      </div>
      <div className={styles.mainparagraph}>
        <p style={{ fontFamily: Merriweather.className }}>
          Shop your favorite products now and enjoy 20% off on everything in our
          store! Whether you&apos;re updating your wardrobe, upgrading your home, or
          looking for the perfect gift, now&aposs the time to grab amazing deals updating your wardrobe.
          Hurry, don&apost miss out on this limited-time offer!
        </p>
      </div>

      <button className={styles.button}>SHOP NOW</button>

      <div className={styles.imageDiv}>
        <Image src={"/girls happy.png"} alt={"pic"} height={427} width={600}/>


      </div>
    </div>
  );
}

export default Hero;
