
import styles from '../Navbar.module.css';
import Link from "next/link";

export default function DesktopNavbar({setMobMenu}) {


  return (
    <nav className={styles.navbarMainContainer}>

        <div className={styles.mobileButtonContainer}>
          <button onClick={() => setMobMenu(true)} type="button" aria-controls="mobile-menu" aria-expanded="false">
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


    </nav>
  );

}