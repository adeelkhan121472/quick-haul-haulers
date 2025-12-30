'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link href="/" className={styles.navbarLogo}>
          <div className={styles.logoContainer}>
            <Image
              src="/Logo.png"
              alt="Quick Haul Haulers Logo"
              width={120}
              height={120}
              priority
              className={styles.logoImage}
            />
          </div>
        </Link>
        <ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLinks}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/services" className={styles.navLinks}>
              Services
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/locations" className={styles.navLinks}>
              Locations
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" className={styles.navLinks}>
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" className={styles.navLinks}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
