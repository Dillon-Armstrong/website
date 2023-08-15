import React, {useRef} from 'react';
import gsap from 'gsap';

export default function App() {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".name", {
        x: 100,
        duration: 2,
        repeat: 2,
      });
    });
    return () => ctx.revert();
  });

  return (
    <h1 className="name">Dillon Armstrong</h1>
  );
}
