import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import Nodes from './nodes';

export default function App() {
  // const header = useRef();
  useLayoutEffect(() => {
    const headCtx = gsap.context(() => {
      gsap.from(".name", {
        x: 100,
        duration: 2,
        repeat: 0,
      });
    });
    return () => headCtx.revert();
  }, []);

  useLayoutEffect(() => {
    const nodeCtx = gsap.context(() => {
      gsap.to(".n", {
        duration: 3,
        ease: "circ.out",
        y: 400,
      });
    });
    return () => nodeCtx.revert();
  }, []);

  return (
    <div className="body">
      <h1 className="name">Dillon Armstrong</h1>
      <Nodes />
    </div>
  );
}
