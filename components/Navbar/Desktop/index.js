import React, {useContext} from 'react';
import AppContext from "../../../context/AppContext";

import styles from '../Navbar.module.css';
import Link from "next/link";

export default function DesktopNavbar({setMobMenu}) {

  const { currentPage } = useContext(AppContext); 

  return (
    <nav className={styles.navbarMainContainer}>

        <div className={styles.mobileButtonContainer}>
          <button onClick={() => setMobMenu(true)} className={styles.openMobNav} type="button" aria-controls="mobile-menu" aria-expanded="false">
          open navbar
          </button>
        </div>
        <div className={styles.otherContainer}>
          <div className={styles.logo}>
            <a href="/">
              <img src="img/logo.png" alt="logo" />
            </a>
          </div>

          <div className={`${styles.menuContainer} flex justify-content-center align-items-center fullHeight`}>
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
              <a className={`${styles.menuElt}  ${currentPage === 'contact' ? styles.current : ""}`}>Contact</a>
            </Link>
          </div> 
        </div>


    </nav>
  );

}