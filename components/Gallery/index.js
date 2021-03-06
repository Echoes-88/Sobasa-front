import React from 'react';

import styles from './gallery.module.css';


export default function Gallery({productsFeature}) {

  const nameClass = productsFeature.length > 1 ? 'groupDeTiles' : 'bigTile';

  return (
  <div className={styles.tilesGroup}>
      {productsFeature.map(product =>
      <>
          <div key="{product.name}" className={styles.mainTileContainer}>
            <div className={`${styles[nameClass]} ${styles.tileContainer}`}>
              <img className={styles.galleryImg} src={product.img} alt={product.name}/>
            </div>
            <div className={styles.backgroundFilter}>
              <div className={styles.test}>
                <p>{product.name}</p>
              </div>
              <div className={styles.mainText}>
                <p>{product.description}.</p>
              </div> 
            </div>
          </div>
      </>
      )}
  </div>
  )
}