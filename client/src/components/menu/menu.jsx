import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import EmailForm from './emailForm';

export default function Menu({ goBack }) {
  const menuRef = useRef(null);
 // const formRef = useRef(null);

  useLayoutEffect(() => {
    const menuCtx = gsap.context(() => {
      gsap.to(
        menuRef.current,
        { width: 200, duration: 1 },
      );
    }, []);

    return menuCtx.revert();
  }, []);

  // const showForm = () => {
  //   gsap.to(formRef.current, { scale: 2 });
  // };

  return (
    <>
      <button type="button" onClick={goBack}>{`=>`}</button>
      <div className="menu">
        <EmailForm />
        <div>
          share link
        </div>
      </div>
    </>
  );
}
