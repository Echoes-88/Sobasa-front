import React from 'react';

import styles from './Features.module.css';

export default function Features({products}) {
  return(

    <div className="flex wrap maxWidthBig justify-content-center">

    {products.map(product => (
      <div className={styles.product}>
      <img className={styles.productImage} src={product.img}/>
      <p className="strong">{product.name}</p>
      <p className='italic'>{product.description}</p>
      <p className="redColor">{product.price}</p>
      {product.onSale && (
      <div className={styles.productPromo}>On sale</div>
      )}
      </div>
    ))}

    </div>
  )
}