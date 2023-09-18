/* eslint-disable arrow-body-style */
import React, { useRef, forwardRef } from 'react';
import gsap from 'gsap';
import EmailForm from './emailForm';

const Menu = forwardRef(({ goBack }, menuRef) => {
  // const menuRef = useRef(null);
 // const formRef = useRef(null);

  // useLayoutEffect(() => {
  //   const menuCtx = gsap.context(() => {
  //     gsap.fromTo(
  //       menuRef.current,
  //       { left: 100 },
  //       { left: 50 },
  //     );
  //   });

  //   return menuCtx.revert();
  // }, []);

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
});

export default Menu;
