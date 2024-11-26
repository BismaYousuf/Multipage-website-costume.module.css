import React from 'react';
import styles from "./delivery.module.css";
import Image from "next/image";
import { Inknut_Antiqua } from "next/font/google";

const inknutAntiqua = Inknut_Antiqua({
  subsets: ["latin"],
  weight: "700",
});

function Delivery() {
  return (
    <>
      <div className={styles.secDiv}>
        <h1 className={inknutAntiqua.className}>Why <span className={styles.span}>Shop</span> With Us</h1>
      </div>

    <div className={styles.cardsDiv}>
    <div className={styles.card1}>
         <Image src={'/card 1.png'} 
    alt={''}
    width={286}
    height={210}
     />
     <Image src={'/card 2.png'} 
     alt={''}
     width={286}
     height={210}
     />
       <Image src={'/card 3.png'} 
     alt={''}
     width={286}
     height={210}
     />
    </div>

    </div>


    </>
  );
}

export default Delivery;
