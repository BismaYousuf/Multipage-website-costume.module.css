import React from "react";
import styles from "./CustomerReview.module.css";
import { Inknut_Antiqua } from "next/font/google";
import { Merriweather as MerriweatherFont } from "next/font/google";
import Image from "next/image";

const inknut = Inknut_Antiqua({
  subsets: ["latin"],
  weight: "400",
});
const merriweather = MerriweatherFont({
  subsets: ["latin"],
  weight: ["300", "700"],
});

const CustomerReview: React.FC = () => {
  return (
    <div className={styles.reviewContainer}>
    <div className="profileContainer">
  <Image
    src="/profile.jpg"
    alt="Customer Profile"
    className="profileImage"
  />
</div>

      <h3  className={`${styles.customerName} ${inknut.className}`}>
        Frank Spencer
      </h3>
      <p className={`${styles.customerRole} ${merriweather.className}`}>
        Customer
      </p>
      <p className={`${styles.reviewText} ${merriweather.className}`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis beatae, fugiat in facere <br />
        reiciendis labore et est eligendi magnam repellat earum, deserunt sed doloribus magni pariatur <br />
         maxime quam. Ad, ullam.
      </p>
 
    </div>
  );
};

export default CustomerReview;
