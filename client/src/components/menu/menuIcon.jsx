import React, { useState } from 'react';
import gsap from 'gsap';
import Menu from './menu';

export default function MenuIcon({ imageRef }) {
  const [clicked, setClicked] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    setClicked(true);
    gsap.to(imageRef.current, { zIndex: -1 });
  };

  const goBack = (e) => {
    e.preventDefault();
    setClicked(false);
    gsap.to(imageRef.current, { zIndex: 0 });
  };

  return (
    clicked
      ? <Menu goBack={goBack} />
      : (
        <button type="button" onClick={openMenu}>
          =
        </button>
      )
  );
}
