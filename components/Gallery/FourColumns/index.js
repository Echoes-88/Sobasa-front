import React from 'react';

import styles from './gallery.module.css';

export default function Gallery() {
  return (
  <div className={styles.row}>
    <div className={styles.column}>
    <img className={styles.landscape} src='img/gallery/restaurant-paysage-1.jpg' />
    <img className={styles.portrait} src='img/gallery/restaurant-portrait-1.jpg' />
    <img className={styles.landscape} src='img/gallery/restaurant-paysage-2.jpg' />
    </div>

    <div className={styles.column}>
    <img className={styles.portrait} src='img/gallery/restaurant-portrait-3.jpg' />
    <img className={styles.portrait} src='img/gallery/restaurant-portrait-4.jpg' />
    </div>

    <div className={styles.column}>
    <img className={styles.landscape} src='img/gallery/restaurant-paysage-3.jpg' />
    <img className={styles.portrait} src='img/gallery/restaurant-portrait-5.jpg' />
    <img className={styles.landscape} src='img/gallery/restaurant-paysage-4.jpg' />

    </div>

    <div className={styles.column}>
    <img className={styles.portrait} src='img/gallery/restaurant-portrait-6.jpg' />
    <img className={styles.landscape} src='img/gallery/restaurant-paysage-5.jpg' />
    <img className={styles.landscape} src='img/gallery/restaurant-paysage-6.jpg' />
    </div>
  </div>
  )
}