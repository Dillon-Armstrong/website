import React, { useRef } from 'react';
import headShot from '../../dist/IMG_0957.jpeg';
import ImageIcon from '../../dist/icons8-murder-chalk-48.jpeg';

export default function Headshot({ imageRef }) {
  return (
    <img ref={imageRef} src={headShot} alt={imageIcon}></img>
  );
}
