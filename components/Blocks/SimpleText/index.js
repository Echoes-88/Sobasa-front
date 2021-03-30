import React from 'react';

import styles from './TextBlock.module.css';

export default function Banner({text, title}) {
  return(
      <div className="maxWidthBig marginAuto padding-m">
        <h1>{title}</h1>
        <p className="lineHeight-l">{text}</p>
      </div>
  )
}