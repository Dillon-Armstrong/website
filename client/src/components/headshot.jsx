import React, { useRef } from 'react';
import headShot from '../../dist/assets/IMG_0957';
import ImageIcon from '../../dist/assets/icons8-murder-chalk-48';

export default function Headshot({ imageRef }) {
  return (
    <img ref={imageRef} src={headShot} alt={imageIcon}></img>
  );
}
