import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import Headshot from './headshot';
import SkillsList from './skillsList';
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
        top: "12%",
        left: "80%",
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
      <h1 className="name" ref={headerRef}>Dillon Armstrong</h1>
      <div className="app">
        <Headshot imageRef={imageRef} />
        <SkillsList />
      </div>
    </>
  );
}
