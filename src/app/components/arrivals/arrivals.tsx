import React from 'react'
import styles from "./arrivals.module.css";
import Image from "next/image";
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
function Arrivals() {
  return (
    <>
        <div className={styles.maindiv}>
          <div className={styles.arrivalsImage}>

          <Image src={"/arrivals.png"} 
          alt={"pic"} 
          width={700} 
          height={700}
          />

          </div>

          <div className={styles.arrivalsDiv}>
  <h1 className={`${inknutAntiqua.className} ${styles.Arrivalsheading}`}>#NEW <span className={styles.span}>ARRIVALS</span> </h1>

  <p style={{ fontFamily: Merriweather.className }} className={styles.arrivalsPara}>
  Stay ahead of the trends with our new arrivals! From the freshest styles to the hottest new products, explore what&apos;s new in our collection. Whether you&apos;re looking for something stylish, functional, or unique, we&apos;ve got the latest just for you. Explore what&apos;s new in our collection. Whether you&apos;re looking for something stylish, Be the first to shop these exciting new additions before they&apos;re gone!

  </p>

  <button className={styles.button}>SHOP NOW</button>
</div>


        </div>
    
    
    </>
  )
}

export default Arrivals
