import React from "react";
import styles from "./ProductPage.module.css"; 
import Image from "next/image"; 
import { Inknut_Antiqua } from "next/font/google"; 


const inknutAntiqua = Inknut_Antiqua({
  subsets: ["latin"],
  weight: "700", 
});

// Define the type for the product structure
interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

const ProductPage: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Product 1",
      price: "$49.99",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, tempora. Doloremque libero consequatur atque amet",
      image: "/img4.png",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$79.99",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, tempora. Doloribus, tempora",
      image: "/img5.png",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$99.99",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, tempora. Doloremque libero consequatur atque amet",
      image: "/img6.png",
    },
  ];

  return (
    <div className={`${inknutAntiqua.className} ${styles.productPage}`}>
      <h1 className={styles.title}>Our Products</h1>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <Image src={product.image} alt={product.name} className={styles.productImage} width={500} height={300} />
            <h2 className={styles.productName}>{product.name}</h2>
            <p className={styles.productDescription}>{product.description}</p>
            <p className={styles.productPrice}>{product.price}</p>
            <button className={styles.buyButton}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
