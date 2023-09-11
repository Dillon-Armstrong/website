import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
require('dotenv').config();

export default function EmailForm() {
  const service = process.env.SERVICE_ID;
  const template = process.env.TEMPLATE_ID;
  const publicKey = process.env.PUBLIC_KEY;

  const formRef = useRef();
  // const [message, setMessage] = useState({
  //   sender: '',
  //   text: '',
  // });

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setMessage.text(e.target.value);
  // };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service, template, formRef.current, publicKey)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <h3>
        Email
      </h3>
      <form ref={formRef} onSubmit={sendEmail}>
        <label>
          your email
          <input type="email" name="user_email" />
        </label>
        <label>
          Message
          <textarea type="text" rows="20" cols="20" />
        </label>
        <button type="submit"> send </button>
      </form>
    </>
  );
}
