"use client";

import React, { useEffect } from "react";
import styles from "./products.module.css";  // Ensure the correct path is here
import Image from "next/image";
import { Inknut_Antiqua } from "next/font/google";
import useEmblaCarousel from "embla-carousel-react";
import { FaStar } from "react-icons/fa6";
import { productData } from "@/constant/products";
import Autoplay from 'embla-carousel-autoplay';
import Link from "next/link";

// Font and other logic...

const inknutAntiqua = Inknut_Antiqua({
  subsets: ["latin"],
  weight: "700",
});
function Products() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({delay:2000})])

    useEffect(() => {
        if (emblaApi) {
          console.log(emblaApi.slideNodes()) 
        }
      }, [emblaApi])
    

  return (
    <>
      <div className={styles.productsHeadDiv}>
        <h1 className={inknutAntiqua.className}>
          {" "}
          OUR <span className={styles.span}>PRODUCTS</span>
        </h1>
      </div>

      <div
        className={`${styles.productsSection} ${styles.embla}`}
        ref={emblaRef}
      >
        <div className={styles.Cards}>
          <div className={styles.embla__container}>
            {productData.map((data) => {
              return (
                <div className={styles.embla__slide} key={data.id}>
                  <div className={styles.productImg}>
                    <Image
                      src={data.src}
                      alt={"dresses"}
                      width={215.61}
                      height={287}
                      className={styles.images}
                    />

                    <div className={styles.productInfo}>
                      <h1 className={inknutAntiqua.className}>
                        {data.heading}
                      </h1>

                      <pre>
                        {" "}
                        {data.price} | {data.rating}{" "}
                        <FaStar color="yellow" className={styles.star} />{" "}
                      </pre>
                 
                    </div>
                  </div>
                </div>
              );
            })}

                 
          </div>
          
        </div>
       
      </div>
   
      <Link href={"/PProduct"}><button className={styles.button}>SEE MORE PRODUCTS</button></Link>
    
    </>
  );
}

export default Products;
