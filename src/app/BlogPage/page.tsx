import React from "react";
import styles from "./BlogPage.module.css"; // Import CSS Module
import Image from "next/image"; // Import Image component from Next.js
import { Merriweather as MerriweatherFont } from "next/font/google"; // Import font

// Initialize font loader
const merriweather = MerriweatherFont({
  subsets: ["latin"],
  weight: "700",
});

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
}

const BlogPage: React.FC = () => {
  const blogs: Blog[] = [
    {
      id: 1,
      title: "Exploring the Mountains",
      description: "An exciting journey through the Rocky Mountains, experiencing nature like never.",
      image: "/blog1.jpg",
    },
    {
      id: 2,
      title: "A Guide to Minimalism",
      description: "Discover how living with less can bring more peace and fulfillment to your life.",
      image: "/blog2.jpg",
    },
    {
      id: 3,
      title: "The Art of Mindfulness",
      description: "Learn techniques to stay present and mindful in a busy, fast-paced world.",
      image: "/blog3.jpg",
    },
  ];

  return (
    <div className={`${merriweather.className} ${styles.blogPage}`}>
      <h1 className={styles.pageTitle}>Our Blog</h1>
      <div className={styles.blogGrid}>
        {blogs.map((blog) => (
          <div key={blog.id} className={styles.blogCard}>
            <Image src={blog.image} alt={blog.title} className={styles.blogImage} width={500} height={300} />
            <h2 className={styles.blogTitle}>{blog.title}</h2>
            <p className={styles.blogDescription}>{blog.description}</p>
            <button className={styles.readMoreButton}>Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
