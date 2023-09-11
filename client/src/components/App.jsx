import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import Headshot from './headshot';
import SkillsList from './skillsList';
import Bio from './bio';
import MenuIcon from './menu/menuIcon';
// import Nodes from './nodes';

export default function App() {
  const headerRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const headCtx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { x: 50 }, {
        x: 100,
        duration: 2,
        repeat: 0,
      });

      gsap.set(imageRef.current, {
        yPercent: -50,
        xPercent: -50,
        top: "24%",
        left: "82%",
        position: "absolute",
        opacity: 0,
      });

      gsap.to(imageRef.current, { opacity: 1, duration: 4 });

      gsap.fromTo(imageRef.current, { scale: 1 }, {
        scale: 3, duration: 3, ease: "expoScale(1, 2.5)", repeat: 0,
      });
    });
    return () => headCtx.revert();
  }, []);

  return (
    <>
      <h1 className="header" ref={headerRef}>
        <div>
          Dillon Armstrong
        </div>
        <MenuIcon imageRef={imageRef} />
      </h1>
      <div className="app">
        <Bio />
        <Headshot imageRef={imageRef} />
        <SkillsList />
      </div>
    </>
  );
}
