import React from 'react';

import styles from './TextBlock.module.css';

export default function Banner({text, title}) {
  return(
      <div className="maxWidthBig marginAuto padding-m">
        <h2>{title}</h2>
        <p className="lineHeight-l">{text}</p>
      </div>
  )
}