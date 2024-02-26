import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';





export const About = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_z8fif1l',
                 'template_4aupz7g',
          form.current, {
          publicKey: 'OxYn_9NrSdD0-zj6q',
        })
        .then(
          () => {
            console.log("Message Sent!");
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };


  return (
   
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_mail" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};