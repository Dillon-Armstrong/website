import React, { useState, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Menu from './menu';

export default function MenuIcon({ imageRef }) {
  const [clicked, setClicked] = useState(false);
  const menuRef = useRef(null);

  const openMenu = (e) => {
    e.preventDefault();
    gsap.to(imageRef.current, { zIndex: -1 });
    setClicked(true);
    gsap.set(
      menuRef.current,
      { left: 100 },
    );
  };

  const goBack = (e) => {
    e.preventDefault();
    setClicked(false);
    gsap.to(imageRef.current, { zIndex: 0 });
  };

  return (
    clicked
      ? <Menu goBack={goBack} ref={menuRef} />
      : (
        <button type="button" onClick={openMenu}>
          =
        </button>
      )
  );
}
