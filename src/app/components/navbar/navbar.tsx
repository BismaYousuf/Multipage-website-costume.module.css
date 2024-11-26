"use client"
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image
          src="/logo.png"
          width={50}
          height={40}
          alt="Logo"
          className={styles.navlogo}
        />
        <span className={styles.log}>
          F<span className={styles.span}>a</span>mms
        </span>
      </div>

      <div
        className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
      >
        ☰
      </div>

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/PProduct">Product</Link>
        </li>
        <li>
          <Link href="/BlogPage">Blog</Link>
        </li>
        <li>
          <Link href="/contactpage">Contact</Link>
        </li>
      </ul>

      <Link href="/login">
        <button className={styles.button}>Login</button>
      </Link>
    </nav>
  );
};

export default Navbar;
