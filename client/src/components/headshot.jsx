import React from 'react';
import headShot from '../../dist/assets/IMG_0957.jpg';
import imageIcon from '../../dist/assets/icons8-murder-chalk-96.jpeg';

export default function Headshot({ imageRef }) {
  return (
    <img
      ref={imageRef}
      src={headShot}
      alt={imageIcon}
    />
  );
}
