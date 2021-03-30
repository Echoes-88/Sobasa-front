import React from 'react';
import Link from 'next/link';

import styles from '../Navbar.module.css';

export default function MobileNavbar({mobMenu, setMobMenu}) {
  return(
    // <div className={`${styles.MobileNavbar} ${mobMenu ? styles.activ : ''}`}>

  <div className={mobMenu ? styles.activ : styles.MobileNavbar}>
        <button onClick={() => setMobMenu(false)} type="button" className={styles.closeMobileNav}>
        X
        </button>
        <div className={styles.MobileNavbarElts}>
        <Link href="/">
              <a className={`${styles.menuElt} ${styles.current}`}>Accueil</a>
            </Link>
            <Link href="/lerestaurant">
              <a className={styles.menuElt}>Le restaurant</a>
            </Link>
            <Link href="/menu">
              <a className={styles.menuElt}>Menu</a>
            </Link>
            <Link href="/contact">
              <a className={styles.menuElt}>Contact</a>
            </Link>
        </div>
  </div>
);
}