import React, {useContext, useEffect} from 'react';
import AppContext from "../../../context/AppContext";
import Link from 'next/link';

import styles from '../Navbar.module.css';

export default function MobileNavbar({mobMenu, setMobMenu}) {
  const { currentPage } = useContext(AppContext);


  
  return(
    // <div className={`${styles.MobileNavbar} ${mobMenu ? styles.activ : ''}`}>

  <div className={mobMenu ? styles.activ : styles.MobileNavbar}>
        <button onClick={() => setMobMenu(false)} type="button" className={styles.closeMobileNav}>
        X
        </button>
        <div className={styles.MobileNavbarElts}>
        <Link href="/">
              <a className={`${styles.menuElt} ${currentPage === 'home' ? styles.current : ""}`}>Accueil</a>
            </Link>
            <Link href="/lerestaurant">
              <a className={`${styles.menuElt} ${currentPage === 'restaurant' ? styles.current : ""}`}>Le restaurant</a>
            </Link>
            <Link href="/menu">
              <a className={`${styles.menuElt} ${currentPage === 'menu' ? styles.current : ""}`}>Menu</a>
            </Link>
            <Link href="/contact">
              <a className={`${styles.menuElt} ${currentPage === 'contact' ? styles.current : ""}`}>Contact</a>
            </Link>
        </div>
  </div>
);
}