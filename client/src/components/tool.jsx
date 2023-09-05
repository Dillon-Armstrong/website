import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export default function Tool({ tool }) {
  const toolRef = useRef(null);

  useLayoutEffect(() => {
    const toolCtx = gsap.context(() => {
      gsap.from(toolRef.current, {
        opacity: 0,
        x: 100,
        duration: 3,
        delay: 2,
      });
    });
    return () => toolCtx.revert();
  });

  return (
    <li ref={toolRef}>{tool}</li>
  );
}
