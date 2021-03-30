import React from 'react';

import styles from './HalfTextImg.module.css';

export default function({image, title, button}) {

  const backgroundImg = {
    backgroundImage: 'url('+image+')',
    backgroundPosition: '50% 50%',
    backgroundSize:'cover'
  }


  return(
    <div className={styles.halfTextImgContainer}>
      <div className={styles.imgContainer} style={backgroundImg}>
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut nulla non massa fermentum ultricies. In hac habitasse platea dictumst. Fusce eleifend consequat sem ac ultrices. Proin mattis leo nisi, pharetra lobortis lorem porttitor a. Sed commodo molestie erat, sed egestas augue. Nullam nec libero leo. Nunc eu faucibus nisl, non viverra magna. Morbi sapien diam, dictum ac molestie et, porttitor vel ligula. Phasellus venenatis sed tortor consectetur finibus. Ut vitae vestibulum purus. Suspendisse eleifend augue in ultricies laoreet. Donec luctus ex id diam scelerisque maximus. Morbi pellentesque lobortis erat, quis porttitor enim mollis ullamcorper. Nam semper pretium cursus. Donec ut aliquam tortor.
        </p>
        {button && (
        <button className={styles.button}>Plus d'informations</button>
        )}

      </div>
    </div>
  )
}