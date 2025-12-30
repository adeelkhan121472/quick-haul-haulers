import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3>Quick Haul Haulers</h3>
          <p>Your trusted partner for fast and reliable hauler rental services.</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Contact Us</h4>
          <p>Phone: <a href="tel:5551234567" className={styles.footerPhone}>(555) 123-4567</a></p>
          <p>Email: <a href="mailto:info@quickhaulhaulers.com" className={styles.footerEmail}>info@quickhaulhaulers.com</a></p>
          <p>Hours: Mon-Sat 7AM-6PM</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2025 Quick Haul Haulers. All rights reserved.</p>
      </div>
    </footer>
  );
}
