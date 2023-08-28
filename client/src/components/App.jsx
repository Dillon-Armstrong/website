import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import Headshot from './headshot';
// import Nodes from './nodes';

export default function App() {
  const header = useRef(null);

  useLayoutEffect(() => {
    const headCtx = gsap.context(() => {
      gsap.from(header.current, {
        x: 100,
        duration: 2,
        repeat: 0,
      });
    });
    return () => headCtx.revert();
  }, []);

  return (
    <div className="body" ref={header}>
      <h1 className="name">Dillon Armstrong</h1>
      <Headshot />
    </div>
  );
}
