import React from 'react';

import styles from './Cards.module.css';

export default function Cards({images}) {

  return (
  <div className={styles.cardsGroup}>
      {images.map(img =>
      <>
          <div className={styles.cardContainer}>
            <div className={`${styles.imgContainer}`}>
              <img className={styles.galleryImg} src={img}/>
            </div>
            <div className={styles.textContainer}>
              <p>- Soba ayashi -</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut nulla non massa fermentum ultricies. In hac habitasse platea dictumst.</p>
              <p>11€80</p>
            </div>
          </div>
      </>
      )}
  </div>
  )
}