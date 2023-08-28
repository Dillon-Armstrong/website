import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';

export default function node({ n }) {
  const comp = React.useRef();

  useLayoutEffect(() => {
    const nodeCtx = gsap.context(() => {
      gsap.to(".n", {
        duration: 3,
        // ease: "circ.out",
        x: -n,
      });
    }, comp);
    return () => nodeCtx.revert();
  }, []);

  return (
    <div
      className="n"
      style={{ top: n, left: n * 5 }}
    />
  );
}
