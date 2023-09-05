import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Tool from './tool';

export default function Skill({ name, tools }) {
  const nameRef = useRef();

  useLayoutEffect(() => {
    const nameCtx = gsap.context(() => {
      gsap.from(nameRef.current, {
        opacity: 0,
        delay: 0.5,
        duration: 1,
      });
    });
    return () => nameCtx.revert();
  });

  return (
    <ul ref={nameRef}>
      <h3>{name}</h3>
      {tools.map((tool) => <Tool key={tool} tool={tool} />)}
    </ul>
  );
}
