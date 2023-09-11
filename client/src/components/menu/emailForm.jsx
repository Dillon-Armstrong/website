import React, { forwardRef, useState } from 'react';

const EmailForm = forwardRef((props, formRef) => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  return (
    <form ref={formRef}>
      <input type="text" value={message} onChange={handleChange} />
      <button type="submit"> send </button>
    </form>
  );
});

export default EmailForm;
