import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';


const Contact = () => {
    const form = useRef()
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_z8fif1l', 'template_4aupz7g', form.current, {
        publicKey: 'OxYn_9NrSdD0-zj6q',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };
  return (
    <section>
      <div className='Title'>  
      <h1 className='--text-center'><strong>Get in Touch with Us</strong></h1>
      </div>

      
        <div className="container1" style={{ border: '4px solid #630229'}}>

        <div className='messageus'>
          <h2  >Message Us</h2> <br />
         <p>Have a question or need assistance?<br /><br /> We're here to help! Whether you're inquiring about our products, seeking advice on choosing the perfect fragrance, or simply want to provide feedback, our team is ready to assist you. Feel free to get in touch with us via email, phone, or by filling out the form below. We value your input and strive to provide exceptional customer service to ensure your satisfaction. Don't hesitate to reach out - we're eager to hear from you and make your experience with us a delightful one! </p>
         
         </div>
  
       
            <form ref={form} onSubmit={sendEmail} className="--form-control--card--flex-center --dir-column">
                <input type="text" placeholder='Full Name'
                name='user_name' required />
                <input type="email" placeholder='Email'
                name='user_email' required />
                <input type="text" placeholder='Subject'
                name='subject' required />
                <textarea name="message" cols="30" rows="10"></textarea>
                <button type='submit' className="--btn
                --btn-primary">Send Message</button>


            </form>
        </div>
    </section>
  )
}

export default Contact