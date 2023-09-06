import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export default function Tool({ tool }) {
  const toolRef = useRef(null);

  useLayoutEffect(() => {
    const toolCtx = gsap.context(() => {
      gsap.fromTo(toolRef.current, { x: 150, opacity: 0 }, {
        opacity: 10,
        x: 40,
        duration: 3,
        delay: 1,
      });
    });
    return () => toolCtx.revert();
  });

  return (
    <li ref={toolRef}>{tool}</li>
  );
}
